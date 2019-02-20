import React from 'react'
import {Route} from 'react-router-dom'
import './assets/css/main.css'
import HeaderMenu from './components/headerMenu'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import ListingPage from './components/listingPage'
import Error from './components/Error'
import jQuery from 'jquery'
import SwitchWithSlide from './obnoxious-demo-for-react-router-animation-blog-post/src/SwitchWithSlide'

global.jQuery = jQuery

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='wrapper' className='container'>
          <HeaderMenu />
          <SwitchWithSlide>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/listingPage/:id' component={ListingPage} />
            <Route component={Error} />
          </SwitchWithSlide>
          <Contact />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
};

export default App
