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
      if (error) return <p>Error :( most likely not connected to the internet</p>

      return data.allPosts.map((currentPost) => (
        <Post key={currentPost.id.toString()} post={currentPost} />
      ))
    }}
  </Query>
)

export default Posts
