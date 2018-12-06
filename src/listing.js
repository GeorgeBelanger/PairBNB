import React from 'react'

const Listing = (props) => (
  <article id={props.listing.price} className='image' style={{ backgroundImage: `url(${props.listing.displayImageUrl})`}}>
    <header className='major'>
      <h3>
        <a href={props.listing.url} rel='noopener noreferrer' target='_blank' className='link'>{props.listing.title} <br />
      ${props.listing.price}/night</a>
      </h3>
      <p>
        <b>{props.listing.location} <br />
          {props.listing.beds} <i className='icon alt fas fa-bed' /> {props.listing.baths} <i className='icon alt fas fa-bath' /> {props.listing.reviewRating} <i className='icon alt fas fa-star' />
        </b>
      </p>
    </header>
  </article>
  // import { NavLink } from 'react-router-dom'
  // NavLink to={`/listingPage/${props.listing.id}`}
)

export default Listing
