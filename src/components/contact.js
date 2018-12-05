import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
      {/* Contact */}
      <section id='contact'>
        <div className='inner'>
          <section>
            <form method='post' action='#'>
              <div className='fields'>
                <div className='field half'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' id='name' />
                </div>
                <div className='field half'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' name='email' id='email' />
                </div>
                <div className='field'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    rows={6}
                    defaultValue={''}
                  />
                </div>
              </div>
              <ul className='actions'>
                <li>
                  <input
                    type='submit'
                    defaultValue='Send Message'
                    className='primary'
                  />
                </li>
                <li>
                  <input type='reset' defaultValue='Clear' />
                </li>
              </ul>
            </form>
          </section>
          <section className='split'>
            <section>
              <div className='contact-method'>
                <span className='icon alt fa-envelope' />
                <h3>Email</h3>
                <a href='mailto:realtorgeorgeb@gmail.com?subject=PairBNB blew my mind :O'>realtorgeorgeb@gmail.com</a>
              </div>
            </section>
            <section>
              <div className='contact-method'>
                <span className='icon alt fa-phone' />
                <h3>Phone</h3>
                <a href='tel:2075723632'>(207) 572-3632</a>
              </div>
            </section>
            <section>
              <div className='contact-method'>
                <span className='icon alt fa-home' />
                <h3>Address</h3>
                <span>
              1234 Somewhere Road<br />
              Windham, ME 04062<br />
              United States of America
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact
