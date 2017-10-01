import { action } from '@storybook/react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

const Form = ({ children, handleSubmit }) => (
  <form className="uk-form" onSubmit={handleSubmit}>
    {children}
  </form>
)
Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = values => {
  if (values.username === undefined) {
    return new Promise(resolve => resolve())
  }
  return sleep(1000)
    .then(() => {
      if (['batman', 'superman'].includes(values.username)) {
        throw { username: 'That username is taken' }
      }
    })
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password too short'
  }
  if (!values['password-repeat']) {
    errors['password-repeat'] = 'Required'
  } else if (values.password !== values['password-repeat']) {
    errors['password-repeat'] = 'Passwords must match'
  }
  action('validate')(values, errors)
  return errors
}

export default connect()(
  reduxForm({
    form: 'demo',
    onSubmit: action('onSubmit'),
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
  })(Form)
)
