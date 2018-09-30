import { createFactory } from 'react'
import { connect } from 'refunk'

const mapProps = propsMapper => BaseComponent => props => {
	const nextProps = propsMapper(props)
	const componentFactory = createFactory(BaseComponent)

	return componentFactory(nextProps)
}

const setLoading = loading => () => ({loading})
const setData = data => () => ({data, error: undefined, loading: false})
const setError = error => () => ({data: undefined, error, loading: false})

const load = props => async () => {
	const {fn, update} = props

	update(setLoading(true))

	try {
		const data = await fn(props)
		update(setData(data))
	} catch (error) {
		update(setError(error))
	}
}

export default fn => C => connect(
	mapProps(props => ({
		...props,
		load: load({...props, fn}),
		loading: props.loading || false,
	}))(C)
)
