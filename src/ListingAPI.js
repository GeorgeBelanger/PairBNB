// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ListingAPI = {
  listings: [
    { listingnumber: 1, title: 'Ben Blocker', location: 'G', beds: 3 },
    { listingnumber: 2, title: 'Dave Defender', location: 'D', beds: 3 },
    { listingnumber: 3, title: 'Sam Sweeper', location: 'D', beds: 3 },
    { listingnumber: 4, title: 'Matt Midfielder', location: 'M', beds: 3 },
    { listingnumber: 5, title: 'William Winger', location: 'M', beds: 3 },
    { listingnumber: 6, title: 'Fillipe Forward', location: 'F', beds: 3 }
  ],
  all: function () { return this.listings },
  get: function (id) {
    const isListing = p => p.number === id
    return this.Listings.find(isListing)
  }
}

export default ListingAPI
