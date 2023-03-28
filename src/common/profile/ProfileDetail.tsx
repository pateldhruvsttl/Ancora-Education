import React from 'react'
import NextButton from '../formbutton/NextButton'
import PreviousButton from '../formbutton/PreviousButton'
import GetInputField from './GetInputField'
import './ProfileDetail.scss'
import ProfileHeading from './ProfileHeading'

function ProfileDetail() {
  return (
    <div className='profileDetai'>
      <ProfileHeading {...detail} />
      <form>
        <div className="form-row">
          <GetInputField data={fields} />
        </div>
      </form>
      <div className='profile-hline' />
      <div className='buttons-cal'>
        <PreviousButton title={'Previous Step'} />
        <NextButton title={'Personal Information'} />
      </div>
    </div>
  )
}

export default ProfileDetail
const detail = {
  heading: 'Contact Information',
  subDetail: 'Please provide your contact information below. When entering your phone number, enter the best number to reach you in the primary phone number field. If you have questions about specific fields, click on the "" for more information.'
}
const fields = [
  {
    type: 'text',
    placeholder: 'Joe',
    title: 'First Name',
    required: true,
    isField: 'text',
    colSpan: 'col-md-4'
  },
  {
    type: 'text',
    placeholder: 'Middle Name',
    title: 'Middle Name',
    required: false,
    isField: 'text',
    colSpan: 'col-md-4'
  },
  {
    type: 'text',
    placeholder: 'Email',
    title: 'Email',
    required: true,
    isField: 'text',
    colSpan: 'col-md-4'
  },
  {
    type: 'text',
    placeholder: 'Middle Name',
    title: 'Middle Name',
    required: false,
    isField: 'dropDown',
    colSpan: 'col-md-4'
  },
  {
    type: 'text',
    placeholder: 'Middle Name',
    title: 'City',
    required: true,
    isField: 'dropDown',
    colSpan: 'col-md-4'
  },
  {
    type: 'text',
    placeholder: 'Middle Name',
    title: 'City',
    required: true,
    isField: 'dropDown',
    colSpan: 'col-md-4'
  },
  {
    type: 'text',
    placeholder: 'Middle Name',
    title: 'Phone Type',
    required: true,
    isField: 'dropDown',
    colSpan: 'col-md-2'
  },
  {
    type: 'text',
    placeholder: 'Middle Name',
    title: 'Cell',
    required: true,
    isField: 'dropDown',
    colSpan: 'col-md-2'
  },

]