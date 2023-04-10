import React from 'react'
import CommonParagraph from '../commonheading/CommonParagraph'
import './ProfileHeading.scss'
interface detail {
  heading?: string,
  subDetail?: string,
  isBorder?: boolean
}
function ProfileHeading(props: detail) {
  return (
    <div className='profile-heading'>
      <h1>{props.heading}</h1>
      <div className='profile-gline' />
      <CommonParagraph subDetail={props.subDetail} />
      {props.isBorder && <div className='profile-hline' />}
    </div>
  )
}

export default ProfileHeading