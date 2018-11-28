import React from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './assets/css/main.css'
import Listings from './listings'
import jQuery from 'jquery'
window.jQuery = jQuery

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjhupbfdv1msh0155lkixi5zx'
})

const App = () => (
  <div>
    <title>PairBNB</title>
    <meta charSet='utf-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, user-scalable=no'
    />
    {/* Wrapper */}
    <div id='wrapper'>
      {/* Header */}
      <header id='header' className='alt'>
        <a href='index.html' className='logo' style={{ marginTop: 15 }}>
          <h3>
            <strong>PairBNB</strong>
          </h3>
        </a>
        <nav>
          <a href='#menu'>Menu</a>
        </nav>
      </header>
      {/* End Header */}
      {/* Menu */}
      <nav id='menu'>
        <ul className='links'>
          <li>
            <a href='index.html'>Home</a>
          </li>
          <li>
            <a href='landing.html'>Landing</a>
          </li>
          <li>
            <a href='generic.html'>Generic</a>
          </li>
          <li>
            <a href='elements.html'>Elements</a>
          </li>
        </ul>
        <ul className='actions stacked'>
          <li>
            <a href='#!' className='button fit'>
            Log In
            </a>
          </li>
        </ul>
      </nav>
      {/* Banner */}
      <section id='banner' className='major'>
        <div className='inner'>
          <header className='major'>
            <h1>Same Price, But Different Value</h1>
          </header>
          <div className='content'>
            <p>
            We've scoured AirBNB for the most expensive rubbish<br />
            and the least expensive riches
            </p>
            <ul className='actions'>
              <li>
                <a href='#one' className='button next scrolly'>
                Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Main */}
      <div id='main'>
        {/* One */}
        <ApolloProvider client={client}>
          <section id='one' className='tiles'>
            <Listings />
          </section>
        </ApolloProvider>
        {/* Two */}
        <section id='two'>
          <div className='inner'>
            <header className='major'>
              <h2>Massa libero</h2>
            </header>
            <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis libero. Mauris aliquet magna magna sed nunc
            rhoncus pharetra. Pellentesque condimentum sem. In
            efficitur ligula tate urna. Maecenas laoreet massa vel
            lacinia pellentesque lorem ipsum dolor. Nullam et orci eu
            lorem consequat tincidunt. Vivamus et sagittis libero.
            Mauris aliquet magna magna sed nunc rhoncus amet pharetra
            et feugiat tempus.
            </p>
            <ul className='actions'>
              <li>
                <a href='landing.html' className='button next'>
                Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* Contact */}
      <section id='contact'>
        <div className='inner'>
          <section>
            <form method='post' action='#'>
              <div className='fields'>
                <div className='field half'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' id='name' />
                </div>
                <div className='field half'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' name='email' id='email' />
                </div>
                <div className='field'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    rows={6}
                    defaultValue={''}
                  />
                </div>
              </div>
              <ul className='actions'>
                <li>
                  <input
                    type='submit'
                    defaultValue='Send Message'
                    className='primary'
                  />
                </li>
                <li>
                  <input type='reset' defaultValue='Clear' />
                </li>
              </ul>
            </form>
          </section>
          <section className='split'>
            <section>
              <div className='contact-method'>
                <span className='icon alt fa-envelope' />
                <h3>Email</h3>
                <a href='#!'>information@untitled.tld</a>
              </div>
            </section>
            <section>
              <div className='contact-method'>
                <span className='icon alt fa-phone' />
                <h3>Phone</h3>
                <span>(000) 000-0000 x12387</span>
              </div>
            </section>
            <section>
              <div className='contact-method'>
                <span className='icon alt fa-home' />
                <h3>Address</h3>
                <span>
                1234 Somewhere Road #5432<br />
                Nashville, TN 00000<br />
                United States of America
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
      {/* Footer */}
      <footer id='footer'>
        <div className='inner'>
          <ul className='icons'>
            <li>
              <a href='#!' className='icon alt fa-twitter'>
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a href='#!' className='icon alt fa-facebook'>
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='#!' className='icon alt fa-instagram'>
                <span className='label'>Instagram</span>
              </a>
            </li>
            <li>
              <a href='#!' className='icon alt fa-github'>
                <span className='label'>GitHub</span>
              </a>
            </li>
            <li>
              <a href='#!' className='icon alt fa-linkedin'>
                <span className='label'>LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className='copyright'>
            <li>© Untitled</li>
            <li>
            Design: <a href='https://html5up.net'>HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
)

export default App
