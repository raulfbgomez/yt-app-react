import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/Login'
import Home from '../components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App