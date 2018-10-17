import React from 'react'
import ListingAPI from './api'
import { Link } from 'react-router-dom'

const EveryListing = () => (
  <div>
    <ul>
      {
        ListingAPI.all().map(p => (
          <li key={p.listingnumber}>
            <Link to={`/viewlistings/${p.listingnumber}`}>{p.title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default EveryListing
