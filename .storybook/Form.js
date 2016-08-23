import { action } from '@kadira/storybook'
import { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

class Form extends Component {
  render() {
    const { children, handleSubmit } = this.props
    return (
      <form className="uk-form" onSubmit={handleSubmit}>
        {children}
      </form>
    )
  }
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
  } else if (6 > values.password.length) {
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
  })(Form)
)
