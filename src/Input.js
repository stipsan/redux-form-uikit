import cx from 'classnames'
import { PropTypes } from 'react'
import { Input as UKInput } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const Input = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  icon,
  label,
  ...custom,
}) => (
  <div className={cx('uk-form-row')}>
    <UKInput
      autoComplete={input.name}
      placeholder={label}
      {...input}
      {...custom}
      danger={touched && error}
    />
    {touched && error && <p className="uk-form-help-block uk-text-left">
      {error}
    </p>}
  </div>
)

Input.propTypes = {
  // ...FieldPropTypes,
  icon: PropTypes.string,
}

export default Input
