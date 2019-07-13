import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

const Links = () => (
  <ul>
    <li>
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/call-us">Call Us</NavLink>
    </li>
  </ul>
)

//stateless function component
const App = () => (
  <Router>
    <Links />
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/call-us" to="/contact" />
        <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default App;