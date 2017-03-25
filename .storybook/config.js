import infoAddon from '@kadira/react-storybook-addon-info'
import { configure, setAddon, addDecorator } from '@kadira/storybook'

import Root from './Root'

setAddon(infoAddon)

addDecorator(Root)

function loadStories() {
  require('../src/stories/renderInput')
}

configure(loadStories, module)
