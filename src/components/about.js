import React from 'react'

const Generic = () => {
  return (
    <React.Fragment>
      <title>Generic</title>
      {/* Main */}
      <div id='main' className='alt'>
        {/* One */}
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <h1>About this App</h1>
            </header>
            <h3> Hope you liked the sliding transition. I wanted to show the difference in value you can get for the same amount of money when it comes to airBNB. A few other features I'm thinking about: 
            </h3><h4><br/>  -  User login with the ability to upload your own listings with only a url. I would have a web scraper go to AirBNB and fill out the details and upload them to my database. 
            <br/>  -  Infinite scrolling. I have done this before with vanilla JS but have yet to do it with react.
            <br/>  -  Landing page for listings. I think it would be great if I could use flight data between your location and the destination to add to a landing page for listings. 
            <br/>  -  Filters. I haven't tried graphql filtering in real time yet.
            <br/>  -  Your suggestion. Let me know what features would make this better, or which features would be your favorite!
            <br/><br/>
            Placeholder image is from a real estate developers convention I went to in KL :)
            </h4>
            <span className='image main'>
              <img src='./DSC03616.JPG' alt='alt image5' />
            </span>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Generic
