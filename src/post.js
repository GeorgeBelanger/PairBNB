import React from 'react'

const Post = (props) => (
  <div className='card' style={{'width': '100%', 'marginTop': '10px'}}>
    <div className='card-body'>
      <h5 className='card-title'>{props.post.title}</h5>
      <h6 className='card-subtitle mb-2 text-muted'>by {props.post.author.name}</h6>
      <p className='card-text'>{props.post.description}</p>
      <a href={props.post.url} className='card-link'>Go to link ...</a>
    </div>
  </div>
)

export default Post
