import React, {useState} from 'react'
import Listings from '../listings'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { Spring } from 'react-spring'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjhupbfdv1msh0155lkixi5zx'
})

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
  },
  shape: { width: 300, height: 300, willChange: 'transform' },
}



const ListingPage = ({match}) => {


  
  const [toggle, setToggle] = useState(true) 



  return (
    <React.Fragment>
      <title></title>
      {/* Banner */}
      {/* Note: The "styleN" class below should match that of the header element. */}
      <section id='banner' className='style2'>
        <div className='inner'>
          <span className='image'>
            <img src='images/pic07.jpg' alt='Alt Image1' />
          </span>
          <header className='major'>
            <h1>Landing</h1>
          </header>
          <div className='content'>
            <p>Lorem ipsum dolor sit amet nullam consequat<br />
              sed veroeros. tempus adipiscing nulla.</p>
          </div>
        </div>
      </section>
      {/* Main */}
      <div id='main'>
        <ApolloProvider client={client}>
          <section id='one' className='tiles'>
            <Listings match={match} />
          </section>
        </ApolloProvider>
        {/* One */}
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <Spring
                from={{ color: 'black' }}
                to={{
                  coords: toggle ? [0, 0] : [50, 50],
                  color: toggle ? '#247BA0' : '#70C1B3',
                  start: toggle ? '#B2DBBF' : '#B2DBBF',
                  end: toggle ? '#247BA0' : '#F3FFBD',
                  scale: toggle ? 0.3 : 0.4,
                  shape: toggle ? TRIANGLE : RECTANGLE,
                  stop: toggle ? '0%' : '50%',
                  rotation: toggle ? '0deg' : '45deg',
                }}>
                {({
                  color,
                  scale,
                  shape,
                  start,
                  end,
                  stop,
                  rotation,
                  coords,
                  ...rest
                }) => (
                  <div
                    style={{
                      ...styles.container,
                      background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)`,
                      ...rest,
                    }}>
                    <svg
                      style={{
                        ...styles.shape,
                        transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation}) translate3d(${
                          coords[0]
                        }px,${coords[1]}px,0)`,
                      }}
                      version="1.1"
                      viewBox="0 0 400 400">
                      <g
                        style={{ cursor: 'pointer' }}
                        fill={color}
                        fillRule="evenodd"
                        onClick={() => setToggle(!toggle)}>
                        <path id="path-1" d={shape} />
                      </g>
                    </svg>
                  </div>
                )}
              </Spring>
              <h2>Sed amet aliquam</h2>
            </header>
            <p />
          </div>
        </section>
        {/* Two */}
        <section id='two' className='spotlights'>
          <section>
            <a href='generic.html' className='image'>
              <img src='images/pic08.jpg' alt='Alt Image2' data-position='center center' />
            </a>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Orci maecenas</h3>
                </header>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                <ul className='actions'>
                  <li><a href='generic.html' className='button'>Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href='generic.html' className='image'>
              <img src='images/pic09.jpg' alt='Alt Image3' data-position='top center' />
            </a>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Rhoncus magna</h3>
                </header>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                <ul className='actions'>
                  <li><a href='generic.html' className='button'>Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href='generic.html' className='image'>
              <img src='images/pic10.jpg' alt='Alt Image4' data-position='25% 25%' />
            </a>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                <ul className='actions'>
                  <li><a href='generic.html' className='button'>Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        {/* Three */}
        <section id='three'>
          <div className='inner'>
            <header className='major'>
              <h2>Massa libero</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
            <ul className='actions'>
              <li><a href='generic.html' className='button next'>Get Started</a></li>
            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default ListingPage
