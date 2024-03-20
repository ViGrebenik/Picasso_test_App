import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/routes'
import store from '../store/store'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='app'>
					<Routes />
				</div>
			</Router>
		</Provider>
	)
}

export default App
