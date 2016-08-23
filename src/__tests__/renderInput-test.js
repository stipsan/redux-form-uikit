import renderer from 'react-test-renderer'

import renderInput from '../renderInput'

describe('renderInput', () => {
  it('renders correctly', () => {
    expect(renderer.create(
      <renderInput />
    ).toJSON()).toMatchSnapshot()
  })
})
