import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home'>
          <h1>Este es mi pagina home</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App