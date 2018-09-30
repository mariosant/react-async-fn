import React from 'react'
import testRenderer from 'react-test-renderer'
import hoc from './'

const e = React.createElement

const Component = props => <div {...props}>Hello World!</div>

const asyncFn = jest.fn()

beforeEach(jest.resetAllMocks)

test('Renders component properly', () => {
	asyncFn.mockResolvedValue('Okay')

	const Enhanced = hoc(asyncFn)(Component)
	const snapshot = testRenderer.create(<Enhanced />).toJSON()

	expect(snapshot).toMatchSnapshot()
})
