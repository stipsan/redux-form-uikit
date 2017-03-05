import cx from 'classnames'
import { PropTypes, createElement } from 'react'
import { Input } from 'uikit-react'

const renderInput = ({
  autoComplete,
  input,
  meta: { asyncValidating, error, touched },
  label,
  help,
  helpDisplay,
  errorDisplay,
  errorClassName,
  helpClassName,
  id,
  inline,
  inputComponent,
  wrapperClassName: customWrapperClassName,
  ...custom
}) => {
  if (autoComplete === false) {
    console.error('autoComplete is no longer set automatically in redux-form-uikit. You should review code that rely on this being set automatically. autoComplete={false} can be safely removed, however.')
  }
  const component = createElement(inputComponent, {
    autoComplete,
    id: id || (label ? input.name : undefined),
    placeholder: label,
    ...input,
    ...custom,
    danger: touched && !!error,
    icon: asyncValidating === true ? 'spinner' : custom.icon,
  })

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
        <label className="uk-form-label" htmlFor={id || input.name}>{label}</label>
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
  autoComplete: '',
  errorClassName: '',
  errorDisplay: 'inline',
  help: false,
  helpClassName: '',
  helpDisplay: 'inline',
  id: '',
  inline: false,
  inputComponent: Input,
  label: false,
  wrapperClassName: '',
}

renderInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  inputComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  autoComplete: PropTypes.string,
  errorClassName: PropTypes.string,
  errorDisplay: PropTypes.oneOf(['inline', 'block']),
  help: PropTypes.node,
  helpClassName: PropTypes.string,
  helpDisplay: PropTypes.oneOf(['inline', 'block']),
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.node,
  wrapperClassName: PropTypes.string,
}

export default renderInput
