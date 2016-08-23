import renderer from 'react-test-renderer'

import RenderInput from '../renderInput'

// Capitalize to render it outside of redux-form

describe('renderInput', () => {
  // @TODO investigate if we can just grab the default props directly from redux-form/Field
  const defaultProps = {
    input: {
      name: '',
      onBlur: () => {},
      onChange: () => {},
      onDragStart: () => {},
      onDrop: () => {},
      onFocus: () => {},
      value: '',
    },
    meta: {
      asyncValidating: false,
      dirty: false,
      invalid: true,
      pristine: true,
      submitting: false,
      touched: false,
      valid: false,
    },
  }
  const props = {
    ...defaultProps,
    input: {
      ...defaultProps.input,
      name: 'email',
    },
    placeholder: 'E-mail',
  }
  it('renders correctly', () => {
    expect(renderer.create(
      <RenderInput {...props} />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        label="E-mail"
        type="email"
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('renders error messages correctly', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        meta={{
          ...defaultProps.meta,
          error: 'Shows no error if untouched.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Shows error if touched.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        errorClassName="uk-text-danger"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Allows custom className on error container.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        errorDisplay="block"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Support rendering error message in a block beneath the field.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        label="E-mail"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Neatly renders error in input control group.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        errorDisplay="block"
        label="E-mail"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Support rendering error message in a block beneath the field.',
        }}
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('renders help messages correctly', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        help="Friendly message to delight the human."
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        help="Supports custom className on help message."
        helpClassName="uk-text-warning"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        help="Possible to render below field."
        helpDisplay="block"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        help={<strong>Help attribute can render anything <code>React</code> can render.</strong>}
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('prioritizes error over help', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        help="Don't render this!"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Errors have precedence.',
        }}
      />
    ).toJSON()).toMatchSnapshot()
  })
})
