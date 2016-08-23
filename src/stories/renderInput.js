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
        label="E-mail"
        name="email"
        type="email"
      />
      <Field
        component={renderInput}
        help="block"
        label="Password"
        name="password"
        type="password"
      />
      <div className="uk-form-row">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Horizontal Form', '', () => (
    <div className="uk-margin-bottom uk-form-horizontal">
      <Field
        component={renderInput}
        label="E-mail"
        name="email"
        type="email"
      />
      <Field
        component={renderInput}
        help="block"
        label="Password"
        name="password"
        type="password"
      />
      <div className="uk-form-row">
        <div className="uk-form-controls">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Inline Form', '', () => (
    <div className="uk-margin-bottom">
      <nav className="uk-navbar">
        <a className="uk-navbar-brand">Brand</a>
        <div className="uk-navbar-content">
          <Field
            flip
            inline
            component={renderInput}
            icon="search"
            name="search"
            type="search"
            width="small"
          />
        </div>
        <div className="uk-navbar-flip">
          <div className="uk-navbar-content">
            <Field
              inline
              component={renderInput}
              help="block"
              helpClassName="uk-position-absolute uk-overlay-bottom uk-alert uk-alert-danger uk-margin-small-top"
              name="email"
              placeholder="E-mail"
              type="email"
              width="small"
              wrapperClassName="uk-margin-small-left"
            />
            <Field
              inline
              component={renderInput}
              help="block"
              helpClassName="uk-position-absolute uk-overlay-bottom uk-alert uk-alert-danger uk-margin-small-top"
              name="password"
              placeholder="Password"
              type="password"
              width="small"
              wrapperClassName="uk-margin-small-left uk-margin-small-right"
            />
            <Button primary type="submit">Login <i className="uk-icon-chevron-circle-right" /></Button>
          </div>
        </div>
      </nav>
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
