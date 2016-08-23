import { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

class Form extends Component {
  render() {
    const { children } = this.props
    return (
        <form className="uk-form">
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
  if (!values.has('password')) {
    errors.password = 'Required'
  } else if (6 > values.get('password').length) {
    errors.password = 'Password too short'
  }
  return errors
}

export default connect()(
  reduxForm({
    form: 'demo',
    validate,
  })(Form)
)
