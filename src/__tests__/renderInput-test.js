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
        inline
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

    expect(renderer.create(
      <RenderInput
        {...props}
        errorDisplay="block"
        help="Don't render this!"
        helpDisplay="block"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Errors have precedence.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        help="Don't render this!"
        label="E-mail"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Errors have precedence.',
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        errorDisplay="block"
        help="Don't render this!"
        helpDisplay="block"
        label="E-mail"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Errors have precedence.',
        }}
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('supports custom wrapper className', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        wrapperClassName="uk-display-inline-block"
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('allows overriding defaults', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        autoComplete={false}
        id="email-confirm"
        label="E-mail"
        placeholder="Confirm E-mail"
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('prevents overriding the danger prop on <Input />', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        danger
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        danger={false}
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Required',
        }}
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('renders asyncValidating status correctly', () => {
    expect(renderer.create(
      <RenderInput
        {...props}
        meta={{
          ...defaultProps.meta,
          asyncValidating: true,
          touched: true,
          pristine: false,
        }}
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...props}
        flip
        icon="envelope"
        meta={{
          ...defaultProps.meta,
          asyncValidating: true,
          touched: true,
          pristine: false,
        }}
      />
    ).toJSON()).toMatchSnapshot()
  })
})
