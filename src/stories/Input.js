import { storiesOf } from '@kadira/storybook'
import { Field } from 'redux-form'
import { Button } from 'uikit-react'

import Input from '../Input'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Input.displayName = 'Input'

storiesOf('Input', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Field
        name="email"
        label="E-mail"
        type="email"
        component={Input}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        component={Input}
      />
      <div className="uk-form-row">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  ), { header: false, inline: true, propTables: [Input] })
  /* eslint-disable max-len */
  .addWithInfo('Advanced', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">

      <Field name="email" component={Input} />
    </div>
  ), { header: false, inline: true })
  /* eslint-enable */
