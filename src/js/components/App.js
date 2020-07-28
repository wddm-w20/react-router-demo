import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from 'components/Home'
import About from 'components/About'
import Students from 'components/Students'
import FourOhFour from 'components/FourOhFour'

import 'css/index.css'

const App = () => {

  const students = [
    {id: 123, name: 'Tim Berners-Lee', slug: 'tim-berners-lee'},
    {id: 345, name: 'Grace Hopper', slug: 'grace-hopper'},
    {id: 567, name: 'Alan Turing', slug: 'alan-turing'},
  ]

	return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/student">Students</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/student" render={(props) => <Students {...props} students={students} />} />
        <Route exact path="/student/:slug" render={(props) => <Students {...props} students={students} />} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  )
}

export default App
