import { storiesOf } from '@kadira/storybook'

import Row from '../Row'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Row.displayName = 'Row'

storiesOf('Row', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Row />
    </div>
  ), { header: false, inline: true, propTables: [Row] })
  /* eslint-disable max-len */
  .addWithInfo('Advanced', `
  If you have react-collapse in your dependencies you can pass 'shouldTransitionError' to activate animated reveal and collapse of validation errors.
  `, () => (
    <div className="uk-margin-bottom">

      <Row />
    </div>
  ), { header: false, inline: true })
  /* eslint-enable */
