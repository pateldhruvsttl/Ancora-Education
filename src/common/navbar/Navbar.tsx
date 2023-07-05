import React from 'react'
import './Navbar.scss'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile.jpg'
import IcnDown from '../../assets/icons/IcnDown'
import IcnBell from '../../assets/icons/IcnBell'

function Navbar() {
    return (
        <div className='navbar-cal'>
            <header>
                <div className='logo-cal'>
                    <a href='#'><img src={logo} alt="logo here."></img></a>
                </div>
                <div className='user-profile'>
                    <a className='notification-cal'><IcnBell /></a>
                    <div className='count-not'>1</div>
                    <img src={profile} />
                    
                    <div className='user-detail'>
                        <label className='user-name'>Krupa Patel</label>
                        <label className='sub-name'>Profile</label>
                    </div>
                    
                    <span className='nav-down'><IcnDown /></span>
                </div>

            </header>
        </div>
    )
}

export default Navbar