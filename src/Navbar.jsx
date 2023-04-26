import React from 'react'
import rt from './img/img.png'
function Navbar() {
  return (
    <div className='navbar'>
<img id='logo' src={rt} alt="" />
      <a href="">HOME</a>
      <a href="">Menu</a>
      <a href="">Contact</a>
      

    </div>
  )
}

export default Navbar
