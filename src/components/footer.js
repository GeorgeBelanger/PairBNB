import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
      {/* Footer */}
      <footer id='footer'>
        <div className='inner'>
          <ul className='icons'>
            <li>
              <a href='https://www.facebook.com/george.m.belanger' className='icon alt fa-facebook'>
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/georgebelanger2/' className='icon alt fa-instagram'>
                <span className='label'>Instagram</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/GeorgeBelanger' className='icon alt fa-github'>
                <span className='label'>GitHub</span>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/realtorgeorgeb/' className='icon alt fa-linkedin'>
                <span className='label'>LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className='copyright'>
            <li>© Untitled</li>
            <li>
              <a href='www.georgebelanger.com'>George Belanger</a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
