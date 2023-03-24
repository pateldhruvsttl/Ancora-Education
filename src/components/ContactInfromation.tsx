import React from 'react'
import Footer from '../common/footer/Footer'
import Navbar from '../common/navbar/Navbar'
import Profile from '../common/profile/Profile'
import ProgressLine from '../common/profile/ProgressLine'
import './ComponentStyle.scss'

function ContactInfromation() {
    return (
        <div className='contact-form'>
            <Navbar />
            <div className='progress-line'><ProgressLine /></div>
            <Profile />
            <div className='footer-space'><Footer /></div>
        </div>

    )
}

export default ContactInfromation