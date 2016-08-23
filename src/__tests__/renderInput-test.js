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
  it('renders correctly', () => {
    expect(renderer.create(
      <RenderInput {...defaultProps} />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        label="E-mail"
        name="email"
        type="email"
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('renders error messages correctly', () => {
    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        meta={{
          ...defaultProps.meta,
          error: 'Shows no error if untouched.',
        }}
        name="password"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Shows error if touched.',
        }}
        name="password"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        errorClassName="uk-text-danger"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Allows custom className on error container.',
        }}
        name="password"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        label="E-mail"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Neatly renders error in input control group.',
        }}
        name="email"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        label="E-mail"
        meta={{
          ...defaultProps.meta,
          touched: true,
          error: 'Gently nudge the human in the right direction.',
        }}
        name="email"
      />
    ).toJSON()).toMatchSnapshot()
  })

  it('renders help messages correctly', () => {
    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        help="Friendly message to delight the human."
        label="E-mail"
        name="email"
        type="email"
      />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        help="Friendly message to delight the human."
        label="E-mail"
        name="email"
        type="email"
      />
    ).toJSON()).toMatchSnapshot()
  })
})
