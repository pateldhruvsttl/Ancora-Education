import React from 'react'
import NextButton from '../common/formbutton/NextButton'
import PreviousButton from '../common/formbutton/PreviousButton'
import ProfileHeading from '../common/profile/ProfileHeading'
import CardPage from '../common/programselection/CardPage'
import FilterTab from '../common/programselection/FilterTab'
import ProgramTab from '../common/programselection/ProgramTab'
import './ComponentStyle.scss'
import '../common/profile/ProfileDetail.scss'


function ProgramSelection() {
  return (
    <div className='profileDetai add-space-both'>
      <ProfileHeading {...heading} />
      <div className='campus-onl'>Campus: <span>ONL - Miller-Motte Online Programs (CHAT)</span></div>
      <ProgramTab />
      <FilterTab />
      <CardPage />
      <div className='buttons-cal'>
        <PreviousButton title={'Previous Step'} />
        <NextButton title={'Program Preferences'} />
      </div>
    </div>
  )
}

export default ProgramSelection

const heading = {
  heading: 'Program Selection',
  subDetail: 'Choose your program of interest. Start by clicking on a program category, then select your program by clicking on its box and then clicking "Next Step" at the bottom.'
}