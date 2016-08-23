import cx from 'classnames'
import { PropTypes } from 'react'
import { Input } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const renderInput = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  label,
  help,
  helpClassName,
  inline,
  wrapperClassName: customWrapperClassName,
  ...custom,
}) => {
  const props = {
    autoComplete: input.name,
    placeholder: label,
    id: label ? input.name : undefined,
    ...input,
    ...custom,
    danger: touched && !!error,
  }
  const component = <Input {...props} />
  const feedback = touched && error && (
    <p className={cx(`uk-form-help-${help}`, helpClassName)}>
      {error}
    </p>
  )
  const wrapperClassName = cx(customWrapperClassName, {
    'uk-form-row': !inline,
    'uk-display-inline-block': inline,
  })
  if (label) {
    return (
      <div className={wrapperClassName}>
        <label className="uk-form-label" htmlFor={props.id}>{label}</label>
        <div className="uk-form-controls">
          {component}
          {feedback}
        </div>
      </div>
    )
  }
  return (
    <div className={wrapperClassName}>
      {component}
      {feedback}
    </div>
  )
}

renderInput.defaultProps = {
  help: 'inline',
}

renderInput.propTypes = {
  // ...FieldPropTypes,
  inline: PropTypes.bool,
  help: PropTypes.oneOf(['inline', 'block']),
  helpClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
}

export default renderInput
