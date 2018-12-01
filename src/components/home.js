import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import ListingsHome from '../listingsHome'

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URI
})

const Home = () => {
  return (
    <div>
      <title>PairBNB</title>
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
            <ListingsHome />
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
    </div>
  )
}

export default Home
