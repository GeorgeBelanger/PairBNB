import React from 'react'

const Listing = (props) => (
  <article id={props.listing.price} className='image' style={{ backgroundImage: `url(${props.listing.displayImageUrl})`}}>
    <header className='major'>
      <h3><a href={props.listing.url} rel='noopener noreferrer' target='_blank' className='link'>{props.listing.title} ${props.listing.price}/night</a></h3>
      <p><b>{props.listing.location} {props.listing.beds} Beds</b> <br />
        {props.listing.description}
      </p>
    </header>
  </article>
  // import { NavLink } from 'react-router-dom'
  // NavLink to={`/listingPage/${props.listing.id}`}
)

export default Listing
