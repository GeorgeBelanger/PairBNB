import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './post'

const Posts = () => (
  <Query
    query={gql`
      {
        allPosts {
          id
          title
          author{
            name
          }
          description
          url
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.allPosts.map((currentPost) => (
        <Post post={currentPost} />
      ))
    }}
  </Query>
)

export default Posts
