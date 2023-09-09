import React from 'react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear();
  return (
   <>
   <div className='footer'>
    <div className='footer-3'>
    <div className='first mt-5'>
      <h4>Nikhil Dhakate</h4>
      <p>{year} Nikhil Dhakate All rights reserved</p>
     
    </div>
    <div className='third mt-5'>

<p>hello weicome to my resturant weg  if their any query contact me</p>
<p>nikhildhakate19@gmail.com</p>
<span>+9172331098</span>

    </div>

  







    </div>







   </div>
   
   
   
   </>
  )
}

export default Footer