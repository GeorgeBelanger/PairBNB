import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Listing from './listing'

const Listings = () => (
  <Query
    query={gql`
      {
        allPosts {
          id
          title
          description
          url
          imageUrl
          price
          bedrooms
          location
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

      return data.allPosts.map((currentListing) => (
        <Listing listing={currentListing} />
      ))
    }}
  </Query>
)

export default Listings
