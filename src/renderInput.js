import cx from 'classnames'
import { PropTypes } from 'react'
import { Input as UkInput } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const Input = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  icon,
  label,
  ...custom,
}) => {
  return (
    <div className={cx('uk-form-row')}>
      <UkInput
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
}


Input.propTypes = {
  // ...FieldPropTypes,
  icon: PropTypes.string,
}

export default Input
