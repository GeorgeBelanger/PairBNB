import React from 'react'
import { NavLink } from 'react-router-dom'

const Listing = (props) => (
  <article>
    <span className='image'>
      <img src={props.listing.displayImageUrl} alt='' />
    </span>
    <header className='major'>
      <h3><NavLink to={`/listingPage/${props.listing.id}`} className='link'>{props.listing.title} ${props.listing.price}/night</NavLink></h3>
      <p><b>{props.listing.location} {props.listing.beds} Beds</b> <br />
        {props.listing.description}
      </p>
    </header>
  </article>
)

export default Listing
