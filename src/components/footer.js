import React from 'react'
import './footer.css'
import Logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Logo} />
      <div>
        <h4>Doormat Navigation</h4>
        <div>Home</div>
        <div>About</div>
        <div>Menu</div>
        <div>Reservation</div>
        <div>Order Online</div>
        <div>Login </div>
      </div>
      <div>
        <h4>Contact</h4>
        <div>Adress</div>
        <div>Phone Number</div>
        <div>Email</div>
      </div>
      <div>
        <h4>Social Media Links</h4>
        <div>Facebook</div>
        <div>LinkedIn</div>
        <div>Instagram</div>
        <div>Twitter</div>
      </div>
    </div>
  )
}

export default Footer