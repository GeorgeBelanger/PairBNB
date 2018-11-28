import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/main.css'
import HeaderMenu from './components/headerMenu'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/home'
import Generic from './components/generic'
import Landing from './components/landing'
import Error from './components/Error'
import jQuery from 'jquery'
window.jQuery = jQuery

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div id='wrapper'>
          <HeaderMenu />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/generic' component={Generic} />
            <Route path='/landing' component={Landing} />
            <Route component={Error} />
          </Switch>
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
};

export default App
