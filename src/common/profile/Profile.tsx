import React from 'react'
import './Profile.scss'
import ProfileDetail from './ProfileDetail'
import ProgressLine from './ProgressLine'
import Tabbar from './Tabbar'

function Profile() {
  return (
    <div className='profile-cal'>
      <div className='tab-cal'><Tabbar /></div>
      <ProfileDetail />
    </div>
  )
}

export default Profile