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
              <h1>Generic</h1>
            </header>
            <h2> Hope you liked the sliding transition. I am still developing a landing page for the listings! Atleast no console log errors :)</h2>
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
