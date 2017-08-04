import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login.jsx';

const appRouter = () => (
  <Router>
    <Route exact path='/' component={Login} />
  </Router>
)

export default appRouter;
