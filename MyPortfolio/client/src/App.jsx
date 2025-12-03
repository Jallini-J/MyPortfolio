import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from '../MainRouter.jsx'

/**
 * App component - Root component that wraps the application in React Router.
 * The `AuthProvider` is mounted in `main.jsx` so it is not added here.
 */
function App() {
	return (
		<Router>
			<MainRouter />
		</Router>
	)
}

export default App