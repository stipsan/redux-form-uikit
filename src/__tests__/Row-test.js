import renderer from 'react-test-renderer'

import Row from '../Row'

describe('Row', () => {
  it('renders correctly', () => {
    expect(renderer.create(
      <Row />
    ).toJSON()).toMatchSnapshot()
  })
})
