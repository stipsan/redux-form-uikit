import { storiesOf } from '@storybook/react'
import { Field } from 'redux-form'
import { Button, Input, Icon } from 'uikit-react'

import renderInput from '../renderInput'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
renderInput.displayName = 'renderInput'
Field.displayName = 'Field'
Button.displayName = 'Button'


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
  renderInput is wrapping the <Input /> component from [uikit-react](https://uikit-react.io).

  More information on supported props can be seen [here](http://uikit-react.io/input).
  `, () => (
    <div className="uk-margin-bottom">
      <Field
        component={renderInput}
        name="email"
        placeholder="E-mail"
        type="email"
        width="medium"
      />
      <Field
        component={renderInput}
        name="password"
        placeholder="Password"
        type="password"
        width="medium"
      />
      <div className="uk-margin">
        <Button type="submit">Submit</Button>
      </div>
    </div>
    ), { header: false, inline: true, propTables: [InputProps], mtrcConf: { // eslint-disable-line
        a: ({ href, children }) => <a href={href} target="_blank">{children}</a>, // eslint-disable-line
    } })
    .addWithInfo('Stacked Form', '', () => (
      <div className="uk-margin-bottom uk-form-stacked">
        <Field
          component={renderInput}
          label="E-mail"
          name="email"
          type="email"
          width="medium"
        />
        <Field
          component={renderInput}
          errorDisplay="block"
          label="Password"
          name="password"
          type="password"
          width="medium"
        />
        <div className="uk-margin">
          <Button type="submit">Submit</Button>
        </div>
      </div>
      ), { header: false, inline: true, propTables: null })
      .addWithInfo('Horizontal Form', `
      ---
      On smaller devices the form will render as stacked.
      `, () => (
        <div className="uk-margin-bottom uk-form-horizontal">
          <Field
            component={renderInput}
            label="E-mail"
            name="email"
            type="email"
            width="medium"
          />
          <Field
            component={renderInput}
            errorDisplay="block"
            label="Password"
            name="password"
            type="password"
            width="medium"
          />
          <div className="uk-margin">
            <div className="uk-form-controls">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      ), { header: false, inline: true, propTables: null })
      .addWithInfo('Form Help', '', () => (
        <div className="uk-margin-bottom uk-form-horizontal">
          <Field
            component={renderInput}
            errorClassName="uk-text-danger"
            help="This message is replaced by any validation errors."
            label="E-mail"
            name="email"
            type="email"
            width="medium"
          />
          <Field
            component={renderInput}
            errorClassName="uk-text-danger"
            errorDisplay="block"
            help="This message stays since errorDisplay=block."
            label="Password"
            name="password"
            type="password"
            width="medium"
          />
          <Field
            component={renderInput}
            errorClassName="uk-text-danger"
            help={<span>You can have <code>error</code> and <code>help</code> swap places as well.</span>}
            helpDisplay="block"
            label="Repeat Password"
            name="password-repeat"
            type="password"
            width="medium"
          />
          <div className="uk-margin">
            <div className="uk-form-controls">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      ), { header: false, inline: true, propTables: null })
      .addWithInfo('Inline Form', '', () => (
        <div className="uk-margin-bottom">
          <nav className="uk-navbar uk-navbar-container uk-margin">
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo">Brand</a>
              <div className="uk-navbar-item">
                <Field
                  flip
                  inline
                  component={renderInput}
                  icon="search"
                  name="search"
                  placeholder="search"
                  type="search"
                  width="small"
                />
              </div>
            </div>
            <div className="uk-navbar-right">
              <div className="uk-navbar-left">
                <Field
                  inline
                  component={renderInput}
                  errorClassName="uk-position-absolute uk-overlay-bottom uk-alert uk-alert-danger uk-margin-small-top"
                  errorDisplay="block"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  width="small"
                  wrapperClassName="uk-margin-small-left"
                />
                <Field
                  inline
                  component={renderInput}
                  errorClassName="uk-position-absolute uk-overlay-bottom uk-alert uk-alert-danger uk-margin-small-top"
                  errorDisplay="block"
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
          Try entering batman or superman.
          `, () => (
            <div className="uk-margin-bottom">
              <div className="uk-margin">
                <Field
                  component={renderInput}
                  icon="user"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="uk-margin">
                <Button primary type="submit">
                  Register
                  <span className="uk-margin-small-left"><Icon icon="play-circle" /></span>
                </Button>
              </div>
            </div>
  ), { header: false, inline: true, propTables: null })
  .addWithInfo('Textarea and Select', '', () => (
    <div className="uk-margin-bottom uk-form-horizontal">
      <Field
        className="uk-textarea uk-form-width-medium"
        component={renderInput}
        inputComponent="textarea"
        label="Comment"
        name="comment"
        placeholder="Enter your comment…"
      />
      <Field
        className="uk-select uk-form-width-medium"
        component={renderInput}
        /* eslint-disable react/jsx-no-bind */
        inputComponent={props => (
          <select {...props}>
            <option value="">Choose your color</option>
            <option value="1">red</option>
            <option value="2">green</option>
            <option value="3">blue</option>
          </select>
        )}
        /* eslint-enable */
        label="Color"
        name="color"
      />
      <div className="uk-margin">
        <div className="uk-form-controls">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
  ), { header: false, inline: true, propTables: null })
