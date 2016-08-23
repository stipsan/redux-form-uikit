import { storiesOf } from '@kadira/storybook'
import { Field } from 'redux-form'
import { Button, Input } from 'uikit-react'

import renderInput from '../renderInput'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
renderInput.displayName = 'renderInput'

// Make sure only user-land propTypes are shown (and not props relevant to redux-form internals)
/* eslint-disable no-unused-vars */
const { input: skipInput, meta: skipMeta, ...renderInputPropTypes } = renderInput.propTypes
const { danger: skipDanger, success: skipSuccess, ...InputPropTypes } = Input.propTypes
/* eslint-enable*/
const InputProps = () => <input />
InputProps.propTypes = {
  ...InputPropTypes,
  ...renderInputPropTypes,
}
InputProps.displayName = 'renderInput'

storiesOf('renderInput', module)
  /* eslint-disable max-len */
  .addWithInfo('Basic Usage', `
  ---
  \`renderInput\` is wrapping the \`<Input />\` component from [\`uikit-react\`](https://uikit-react.io).

  More information on supported props can be seen [here](http://uikit-react.io/input).
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        component={renderInput}
        name="email"
        placeholder="E-mail"
        type="email"
      />
      <Field
        component={renderInput}
        name="password"
        placeholder="Password"
        type="password"
      />
      <div className="uk-form-row">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  ), { header: false, inline: true, propTables: [InputProps] })
  .addWithInfo('Stacked Form', '', () => (
    <div className="uk-margin-bottom uk-form-stacked">
      <Field
        component={renderInput}
        name="email"
        label="E-mail"
        type="email"
      />
      <Field
        component={renderInput}
        name="password"
        label="Password"
        type="password"
      />
      <div className="uk-form-row">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Horizontal Form', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        component={renderInput}
        name="email"
      />
    </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Inline Form', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        component={renderInput}
        name="email"
      />
    </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Async Validation', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        component={renderInput}
        name="email"
      />
    </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Transition Validation Feedback', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        component={renderInput}
        name="email"
      />
    </div>
  ), { header: false, inline: true, propTables: null })
  /* eslint-enable */
