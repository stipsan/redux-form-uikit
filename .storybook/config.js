import infoAddon from '@storybook/addon-info'
import { configure, setAddon, addDecorator } from '@storybook/react'

import Root from './Root'

setAddon(infoAddon)

addDecorator(Root)

function loadStories() {
  require('../src/stories/renderInput')
}

configure(loadStories, module)
