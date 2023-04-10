import React from 'react'
import '../profile/ProfileHeading.scss'

interface subDetail{
    subDetail? : string
    isEnroll? : boolean
}
function CommonParagraph({subDetail,isEnroll} : subDetail) {
  return (
    <p className={isEnroll ? 'profile-content enrollContent' : 'profile-content'}>{subDetail}</p>
  )
}

export default CommonParagraph