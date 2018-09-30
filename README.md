react-async-fn
==============

A simple hoc to resolve async functions on React.

Usage
-----

Install it

```
npm i react-async-fn
```

Use it

```
import React from 'react
import asyncFn = require('react-async-fn')

const Component = ({load, loading, data, error}) => (
	<div className={loading ? 'loading'}>
		{data}
		<Button onClick={load} />
	</div>
)

const enhancer = asyncFn(async () => ...) // load your data

export default enhancer(Component)
```

Missing a feature? PRs are always welcome :)
