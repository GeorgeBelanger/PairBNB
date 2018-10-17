import React from 'react'
import ListingAPI from './api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const SingleListing = (props) => {
  const singlelisting = ListingAPI.get(
    parseInt(props.match.params.listingnumber, 10)
  )
  if (!singlelisting) {
    return <div>Sorry, but the listing was not found</div>
  }
  return (
    <div>
      <h1>{singlelisting.title} ({singlelisting.beds} Beds)</h1>
      <h2>Location: {listing.location}</h2>
      <Link to='/everylisting'>Back</Link>
    </div>
  )
}

export default SingleListing
