import cx from 'classnames'
import { PropTypes } from 'react'
import { Input } from 'uikit-react'
// import FieldPropTypes from 'redux-form-uikit/PropTypes/Field'

const renderInput = ({
  input,
  meta: { asyncValidating, touched, error, submitting },
  label,
  help,
  helpDisplay,
  helpClassName,
  errorDisplay,
  errorClassName: customErrorClassName,
  helpClassName: customHelpClassName,
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

  const errorMessage = touched && error && (
    <p className={cx(`uk-form-help-${errorDisplay}`, customErrorClassName)}>
      {error}
    </p>
  )
  const helpMessage = help && (
    <p className={cx(`uk-form-help-${helpDisplay}`, customHelpClassName)}>
      {help}
    </p>
  )
  const inlineMessage = (errorDisplay === 'inline' && errorMessage) ||
                        (helpDisplay === 'inline' && helpMessage)
  const blockMessage = (errorDisplay === 'block' && errorMessage) ||
                       (helpDisplay === 'block' && helpMessage)

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
          {inlineMessage}
          {blockMessage}
        </div>
      </div>
    )
  }
  return (
    <div className={wrapperClassName}>
      {component}
      {inlineMessage}
      {blockMessage}
    </div>
  )
}

renderInput.defaultProps = {
  helpDisplay: 'inline',
  errorDisplay: 'inline',
}

renderInput.propTypes = {
  errorClassName: PropTypes.string,
  errorDisplay: PropTypes.oneOf(['inline', 'block']),
  help: PropTypes.node,
  helpClassName: PropTypes.string,
  helpDisplay: PropTypes.oneOf(['inline', 'block']),
  id: PropTypes.string,
  inline: PropTypes.bool,
  input: PropTypes.object, // @TODO remove
  meta: PropTypes.object, // @TODO remove
  wrapperClassName: PropTypes.string,
}

export default renderInput
