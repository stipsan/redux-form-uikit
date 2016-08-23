import cx from 'classnames'
import { PropTypes } from 'react'
import { Input as UKInput } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const Input = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  icon,
  label,
  placeholder,
  ...custom,
}) => (
  <div className={cx('uk-form-row')}>
    <UKInput
      autoComplete={input.name}
      {...input}
      {...custom}
      className={cx('uk-width-1-1 uk-form-large', {
        'uk-form-danger': touched && error,
      })}
      disabled={submitting}
      placeholder={placeholder || label}
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
