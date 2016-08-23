import cx from 'classnames'
import { PropTypes } from 'react'
import { Input } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const Input = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  icon,
  ...custom,
}) => (
  <div className={cx('uk-form-row')}>
    <div className="uk-form-icon uk-width-1-1">
      <i
        className={cx({
          'uk-icon-spinner uk-icon-spin': asyncValidating,
          [`uk-icon-${icon || input.name}`]: !asyncValidating,
        })}
      />
      <input
        autoComplete={input.name}
        {...input}
        {...custom}
        className={cx('uk-width-1-1 uk-form-large', {
          'uk-form-danger': touched && error,
        })}
        disabled={submitting}
      />
    </div>
    <p className="uk-form-help-block uk-text-left">
      {error || '&nbsp;'}
    </p>
  </div>
)

Input.propTypes = {
  // ...FieldPropTypes,
  icon: PropTypes.string,
}

export default Input
