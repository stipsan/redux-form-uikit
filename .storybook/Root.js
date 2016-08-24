import Logo from 'babel-loader!uikit-react/.storybook/Logo'
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
      <nav className="tm-navbar uk-navbar uk-navbar-attached">
        <Logo />
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a className="uk-navbar-nav-subtitle">
              {kind}
              <div>{story}</div>
            </a>
          </li>
        </ul>
        <div className="uk-navbar-content">
          <iframe
            frameBorder="0"
            height="20px"
            scrolling="0"
            src="https://ghbtns.com/github-btn.html?user=stipsan&repo=redux-form-uikit&type=star&count=true"
            width="170px"
          />
        </div>
        <div className="uk-navbar-flip">
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
