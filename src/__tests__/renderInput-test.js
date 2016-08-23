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

    expect(renderer.create(
      <RenderInput
        {...defaultProps}
        help="This message is replaced by any validation errors."
        label="E-mail"
        name="email"
        type="email"
      />
    ).toJSON()).toMatchSnapshot()
  })
})
