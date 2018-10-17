import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EveryListing from './everylisting'
import SingleListing from './singlelisting'

const ViewListings = () => (
  <Switch>
    <Route exact path='/everylisting' component={EveryListing} />
    <Route path='/everylisting/:listingnumber' component={SingleListing} />
  </Switch>
)

export default ViewListings
