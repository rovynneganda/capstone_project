import React from 'react'
import { logo } from './icons_assets'
const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div>
      <img src={logo} alt='' style={{width: "200px"}}/>
    <p style={{width:'300px'}}>We are family owned Meditarrenaran restaurant focused on traditional recipes served with a modern twist</p>
      </div>
    <ul className='footer-ul'>
        <h3>Doormat Navigation</h3>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
    </ul>
    <ul className='footer-ul'>
        <h3>Contact</h3>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
    </ul>
    <ul className='footer-ul'>
        <h3>Contact</h3>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
    </ul>
    </footer>
   
    </>
  )
}

export default Footer