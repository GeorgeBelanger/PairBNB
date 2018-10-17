import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './index'
import ViewListings from './viewlistings'
import Generic from './generic'
import Elements from './elements'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route path='/viewlistings' component={ViewListings} />
      <Route path='/generic' component={Generic} />
      <Route path='/elements' component={Elements} />
    </Switch>
  </main>
)

export default Main
