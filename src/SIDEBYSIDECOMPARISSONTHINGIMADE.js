body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.justify-center{
  justify-content: center;
}

.two-card-container{  
/*col-6*/
  display: flex;
  -ms-flex: 0 0 45%;
  flex: 0 0 45%;
  max-width: 45%;
  justify-content: center;

}

@media (max-width: 600px){
  .two-card-container{  
  /*col-10*/
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
}


// <div className='row justify-center mb-4'>
//   <div className='two-card-container'>
//     <a href='https://ancient-headland-22384.herokuapp.com/' className='card' style={divStyle}>
//       <p className='card-param-1'> 💎   ♨️  📲 ✨ 📈  🐘  🈳  🔙🔚  📋  🐙</p>
//       <p className='card-param-2'>Web App</p>
//       <div className='info'>
//         <h2 className='card-title'>PairBNB</h2>
//         <p className='card-description'>Room listings and reservations</p>
//       </div>
//     </a>
//   </div>
// </div>

var divStyle = {
  backgroundPosition: 'center center',
  backgroundImage: 'url(https://assets.blinkloader.com/3287797048/1159919350-800)',
  backgroundRepeat: 'no-repeat',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix

  backgroundPositionX:
  '50%',

  backgroundPositionY:
  '50%',

  backgroundSize:
  'cover',

  borderBottomLeftRadius:
  '5px',

  borderBottomRightRadius:
  '5px',

  borderTopLeftRadius:
  '5px',

  borderTopRightRadius:
  '5px',

  color:
  'rgb(0, 0, 0)',

  cursor:
  'pointer',

  display:
  'inline-block',

  height:
  '50vh',

  marginBottom:
  '20px',

  marginLeft:
  '20px',

  marginRight:
  '0px',

  marginTop:
  '20px',

  paddingBottom:
  '0px',

  paddingLeft:
  '20px',

  paddingRight:
  '0px',

  paddingTop:
  '0px',

  position:
  'relative',

  textAlign:
  'center',

  textDecorationColor:
  'rgb(0, 0, 0)',

  textDecorationLine:
  'none',

  textDecorationStyle:
  'solid',

  transitionDelay:
  '0s',

  transitionDuration:
  '0.3s',

  transitionProperty:
  'all',

  transitionTimingFunction:
  'ease-in-out',

  width:
  '40%',

  borderRadius:
  '30px 0px 0px 30px'
}

var divStyleTwo = {
  backgroundPosition: 'center center',
  backgroundImage: 'url(https://assets.blinkloader.com/3287797048/23071608-800)',
  backgroundRepeat: 'no-repeat',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix

  backgroundPositionX:
  '50%',

  backgroundPositionY:
  '50%',

  backgroundSize:
  'cover',

  borderBottomLeftRadius:
  '5px',

  borderBottomRightRadius:
  '5px',

  borderTopLeftRadius:
  '5px',

  borderTopRightRadius:
  '5px',

  color:
  'rgb(0, 0, 0)',

  cursor:
  'pointer',

  display:
  'inline-block',

  height:
  '50vh',

  marginBottom:
  '20px',

  marginLeft:
  '0px',

  marginRight:
  '20px',

  marginTop:
  '20px',

  paddingBottom:
  '0px',

  paddingLeft:
  '0px',

  paddingRight:
  '20px',

  paddingTop:
  '0px',

  textAlign:
  'center',

  textDecorationColor:
  'rgb(0, 0, 0)',

  textDecorationLine:
  'none',

  textDecorationStyle:
  'solid',

  transitionDelay:
  '0s',

  transitionDuration:
  '0.3s',

  transitionProperty:
  'all',

  transitionTimingFunction:
  'ease-in-out',

  width:
  '40%',

  borderRadius:
  '0px 30px 30px 0px'
}
