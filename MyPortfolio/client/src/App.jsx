import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from "../MainRouter.jsx";


/**
 * App component - Root component that wraps the application in React Router
 * Provides routing context for the entire portfolio website
 */
const App = () => {
return (
<Router>
<MainRouter />
</Router>
);
};
export default App;