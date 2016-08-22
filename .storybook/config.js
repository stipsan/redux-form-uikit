import './uikit.less'

import infoAddon from '@kadira/react-storybook-addon-info'
import Logo from 'babel-loader!uikit-react/.storybook/Logo'
import { configure, setAddon, addDecorator } from '@kadira/storybook'

setAddon(infoAddon)

addDecorator((fn, { kind, story }) => <div>
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
        src="https://ghbtns.com/github-btn.html?user=stipsan&repo=redux-form-uikit&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="170px"
        height="20px"
      />
    </div>
    <div className="uk-navbar-flip">
      <ul className="uk-navbar-nav">
        <li>
          <a
            href="https://uikit-react.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            uikit-react
          </a>
        </li>
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
    {fn()}
  </div>
</div>)

function loadStories() {
  require('../src/stories/Row')
}

configure(loadStories, module)
