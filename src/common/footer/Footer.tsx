import React from 'react'
import './Footer.scss'
import IcnQuestion from '../../assets/icons/IcnQuestion'
import Scan from '../../assets/images/scan.png'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-cal'>
                <h4><span className='question-icon'><IcnQuestion /></span>Helpful Links</h4>
                <div className='second-flabel'>
                    <ul className='first-link'>
                        <li><a>Federal Student</a></li>
                        <li><a>Aid Shopping Sheet(Net Price Calculator)</a></li>
                        <li><a>FAFSA</a></li>
                        <li><a>IRS</a></li>
                    </ul>
                    <ul className='second-link'>
                        <li><a>National Student Loan</a></li>
                        <li><a>Data System Tuition</a></li>
                        <li><a>Campus Catalog</a></li>
                    </ul>
                </div>
            </div>
            <div className='scan-cal'>
                <button>
                    <div className='scan-img'><img src={Scan} /></div>
                    <p className='scan-content'>Click or Scan to save our contact info</p>
                </button>
            </div>
        </div>
    )
}

export default Footer