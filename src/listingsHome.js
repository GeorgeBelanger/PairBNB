import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Listing from './listing'

const ListingsHome = () => (

  <Query
    query={gql`
      {
        allPosts {
          id
          title
          description
          url
          displayImageUrl
          price
          beds
          location
          baths
          reviewRating
          languages
          expensiveLocation
          author{
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      const expensiveListings = data.allPosts
        .filter(listing => listing.expensiveLocation === true)

      const inexpensiveListings = data.allPosts
        .filter(listing => listing.expensiveLocation === false)

      // zipper function to pair them
      const pairedListings = []
      for (var i = 0; i < expensiveListings.length; i++) {
        pairedListings.push(expensiveListings[i], inexpensiveListings[i])
      }

      return pairedListings.map((currentListing) => (
        <Listing key={currentListing.id.toString()} listing={currentListing} />
      ))
    }}
  </Query>
)

export default ListingsHome
