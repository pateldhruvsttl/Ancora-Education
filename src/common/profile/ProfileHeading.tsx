import React from 'react'
import './ProfileHeading.scss'
interface detail{
  heading:string,
  subDetail:string
}
function ProfileHeading(props: detail) {
  return (
    <div className='profile-heading'>
      <h1>{props.heading}</h1>
      <div className='profile-gline' />
      <p className='profile-content'>{props.subDetail}</p>
      <div className='profile-hline' />
    </div>
  )
}

export default ProfileHeading