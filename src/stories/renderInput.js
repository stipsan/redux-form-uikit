import { storiesOf } from '@kadira/storybook'
import { PropTypes } from 'react'
import { Field } from 'redux-form'
import { Button } from 'uikit-react'

import renderInput from '../renderInput'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
renderInput.displayName = 'renderInput'

// Make sure only user-land propTypes are shown (and not props relevant to redux-form internals)
const InputProps = () => <input />
InputProps.propTypes = {
  icon: PropTypes.string,
}
InputProps.displayName = 'renderInput'

storiesOf('renderInput', module)
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
        component={renderInput}
      />
      <Field
        name="password"
        placeholder="Password"
        type="password"
        component={renderInput}
      />
      <div className="uk-form-row">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  ), { header: false, inline: true, propTables: [InputProps] })
  .addWithInfo('Advanced', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">

      <Field name="email" component={renderInput} />
    </div>
  ), { header: false, inline: true, propTables: null })
  /* eslint-enable */
