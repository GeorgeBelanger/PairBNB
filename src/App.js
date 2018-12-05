import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import './assets/css/main.css'
import HeaderMenu from './components/headerMenu'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/home'
import Generic from './components/generic'
import ListingPage from './components/listingPage'
import Error from './components/Error'
import jQuery from 'jquery'
import SwitchWithSlide from './obnoxious-demo-for-react-router-animation-blog-post/src/SwitchWithSlide'

require('dotenv').config()
window.jQuery = jQuery

class Container extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='wrapper' className='container'>
          <HeaderMenu />
          <SwitchWithSlide>
            <Route path='/' component={Home} exact />
            <Route path='/generic' component={Generic} />
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

const App = () => (
  <BrowserRouter>
    <Container />
  </BrowserRouter>
)

export default App
