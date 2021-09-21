import React from 'react'
import Navbar from './componants/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './componants/Home.js'
import About from './componants/About.js'

const App = () => {

  
  return (
    <header>
      <Router>
      <Navbar />
      <About />
      <Switch>
        <Route path='/' exact />
      </Switch> 
      </Router>
    </header>
  )
}

export default App
