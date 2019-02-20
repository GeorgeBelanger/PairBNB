import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'
import ListingsHome from '../listingsHome'
import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjhupbfdv1msh0155lkixi5zx',
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
})

const Home = () => {
  return (
    <React.Fragment>
      <title>PairBNB</title>
      {/* Banner */}
      <section id='banner' className='major'>
        <div className='inner'>
          <header className='major'>
            <h1>Your AirBNB budget across the world</h1>
          </header>
          <div className='content'>
            <ul className='actions'>
              <li className=''>
                <a href='#500' className='button next scrolly'>
                  $500/night
                </a>
              </li>
              <li>
                <a href='#300' className='button next scrolly'>
                  $300/night
                </a>
              </li>
              <li>
                <a href='#200' className='button next scrolly'>
                  $200/night
                </a>
              </li>
              <li>
                <a href='#100' className='button next scrolly'>
                  $100/night
                </a>
              </li>
              <li>
                <a href='https://www.couchsurfing.com/' rel='noopener noreferrer' target='_blank' className='button next scrolly'>
                  $0/night
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Main */}
      <div id='main'>
        <ApolloProvider client={client}>
          <section className='tiles'>
            <ListingsHome />
          </section>
        </ApolloProvider>
      </div>
    </React.Fragment>
  )
}

export default Home
