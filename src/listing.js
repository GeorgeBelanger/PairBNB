import React from 'react'

const Listing = (props) => (
  <article>
    <span className='image'>
      <img src={props.listing.imageUrl} alt='' />
    </span>
    <header className='major'>
      <h3><a href={props.listing.url} className='link'>{props.listing.title} ${props.listing.price}/night</a></h3>
      <p><b>{props.listing.location} {props.listing.bedrooms} Beds</b> <br />
        {props.listing.description}
      </p>
    </header>
  </article>
)

export default Listing
