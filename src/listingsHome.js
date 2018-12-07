import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Listing from './listing'

const ListingsHome = () => (

  <Query
    query={gql`
      {
        allPosts(orderBy:price_DESC){
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

      // zipper function to pair them 2 at a time(starting and ending values included) and remove the undefined listings
      const pairedListings = [expensiveListings[0]]
      for (var i = 0; i < expensiveListings.length; i += 2) {
        pairedListings.push(inexpensiveListings[i], inexpensiveListings[i + 1], expensiveListings[i + 1], expensiveListings[i + 2])
      }
      pairedListings.push(inexpensiveListings[-1])
      const result = pairedListings.filter(listing => listing !== undefined)

      return result.map((currentListing) => (
        <Listing key={currentListing.id.toString()} listing={currentListing} />
      ))
    }}
  </Query>
)

export default ListingsHome
