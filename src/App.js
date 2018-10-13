import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Posts from './posts'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjhupbfdv1msh0155lkixi5zx'
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <a className='navbar-brand' href='#'><b>PairBNB and friends</b></a>
      </nav>
      <div>
        <Posts />
      </div>
    </div>
  </ApolloProvider>

)

export default App
