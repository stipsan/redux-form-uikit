import cx from 'classnames'
import { PropTypes } from 'react'
import { Input } from 'uikit-react'

const renderInput = ({
  input,
  meta: { touched, error, asyncValidating },
  label,
  help,
  helpDisplay,
  errorDisplay,
  errorClassName,
  helpClassName,
  inline,
  wrapperClassName: customWrapperClassName,
  ...custom,
}) => {
  const component = (
    <Input
      autoComplete={input.name}
      id={label ? input.name : undefined}
      placeholder={label}
      {...input}
      {...custom}
      danger={touched && !!error}
      icon={asyncValidating === true ? 'spinner' : custom.icon}
    />
  )

  const errorMessage = touched && error && (
    <p className={cx(`uk-form-help-${errorDisplay}`, errorClassName)}>
      {error}
    </p>
  )
  const helpMessage = help && (
    <p className={cx(`uk-form-help-${helpDisplay}`, helpClassName)}>
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
        <label className="uk-form-label" htmlFor={custom.id || input.name}>{label}</label>
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
  input: PropTypes.object, // @TODO replace with actual proptypes
  label: PropTypes.node,
  meta: PropTypes.object, // @TODO replace with actual proptypes
  wrapperClassName: PropTypes.string,
}

export default renderInput
