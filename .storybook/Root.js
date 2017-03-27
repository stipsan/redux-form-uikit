import 'uikit/src/less/uikit.theme.less'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer } from 'redux-form'

import Form from './Form'

const store = createStore(combineReducers(({
  form: reducer,
})))

const Root = (fn, { kind, story }) => (
  <Provider store={store}>
    <div>
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a>
                <div>
                  {kind}
                  <div className="uk-navbar-subtitle">{story}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <a className="uk-navbar-item uk-logo">
            <img alt="UIkit React Logo" src="https://uikit-react.io/logo.svg" style={{ height: '64px' }} />
          </a>
          <div className="uk-navbar-center-right">
            <div>
              <div className="uk-flex uk-flex-middle" style={{ height: '80px' }}>
                <iframe
                  frameBorder="0"
                  height="20px"
                  scrolling="0"
                  src="https://ghbtns.com/github-btn.html?user=stipsan&repo=redux-form-uikit&type=star&count=true"
                  width="170px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <a
                href="https://github.com/stipsan/redux-form-uikit"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="uk-margin-top uk-margin-left uk-margin-right uk-margin-bottom">
        <Form>
          {fn()}
        </Form>
      </div>
    </div>
  </Provider>
)

export default Root
