import { storiesOf } from '@kadira/storybook'
import { Field } from 'redux-form'
import { Button } from 'uikit-react'

import Input from '../Input'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Input.displayName = 'Input'

const InputProps = () => <input />

storiesOf('Input', module)
  /* eslint-disable max-len */
  .addWithInfo('Basic Usage', `
  ---
  \`renderInput\` is wrapping the \`<Input />\` component from [\`uikit-react\`](https://uikit-react.io).

  More information on supported props can be seen [here](http://uikit-react.io/?selectedKind=Input&selectedStory=Basic%20Usage&full=0&down=1&left=1&panelRight=0).
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        name="email"
        placeholder="E-mail"
        type="email"
        component={Input}
      />
      <Field
        name="password"
        placeholder="Password"
        type="password"
        component={Input}
      />
      <div className="uk-form-row">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  ), { header: false, inline: true, propTables: [Input] })
  .addWithInfo('Advanced', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">

      <Field name="email" component={Input} />
    </div>
  ), { header: false, inline: true })
  /* eslint-enable */
