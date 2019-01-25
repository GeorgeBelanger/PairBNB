import React from 'react'
import { NavLink } from 'react-router-dom'

const Listing = (props) => (
  <article id={props.listing.price} className='image' style={{ backgroundImage: `url(${props.listing.displayImageUrl})`}} >
    <header className='major'>
      <h3>
        <NavLink to={`listingpage/${props.listing.id}`} rel='noopener noreferrer' className='link'>{props.listing.title} <br />
      ${props.listing.price}/night</NavLink>
      </h3>
      <p>
        <b>{props.listing.location} <br />
          {props.listing.beds} <i className='icon alt fas fa-bed' /> {props.listing.baths} <i className='icon alt fas fa-bath' /> {props.listing.reviewRating} <i className='icon alt fas fa-star' />
        </b>
      </p>
    </header>
  </article>  
)

export default Listing
