import cx from 'classnames'
import { PropTypes } from 'react'
import { Input } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const renderInput = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  icon,
  label,
  ...custom,
}) => {
  const props = {
    autoComplete: input.name,
    placeholder: label,
    id: label ? input.name : undefined,
    ...input,
  }
  const component = (
    <Input
      autoComplete={input.name}
      placeholder={label}
      {...input}
      {...custom}
      danger={touched && error}
    />
  )
  const help = touched && error && (
    <p className="uk-form-help-block uk-text-left">
      {error}
    </p>
  )
  if (label) {
    const id = input.id || input.name
    return (
      <div className="uk-form-row">
        <label className="uk-form-label" htmlFor={id}>{label}</label>
        <div className="uk-form-controls">
          {component}
          {help}
        </div>
      </div>
    )
  }
  return (
    <div className="uk-form-row">
      {component}
      {help}
    </div>
  )
}


renderInput.propTypes = {
  // ...FieldPropTypes,
  icon: PropTypes.string,
}

export default renderInput
