import React from 'react'
import NextButton from '../common/formbutton/NextButton'
import PreviousButton from '../common/formbutton/PreviousButton'
import GetCollage from '../common/profile/GetCollage'
import GetCommonField from '../common/profile/GetCommonField'
import '../common/profile/ProfileDetail.scss'
import ProfileHeading from '../common/profile/ProfileHeading'

function EducationBackground() {
    return (
        <div className='profileDetai add-space-both'>
            <ProfileHeading {...heading} />
            <form>
                <GetCommonField headings={detailOne} field={fieldOne} />
                <GetCommonField headings={detailTwo} field={fieldTwo} />
                <GetCommonField headings={detailThree} field={fieldThree} />
                <GetCollage />
            </form>
            <div className='profile-hline' />
            <div className='buttons-cal'>
                <PreviousButton title={'Previous Step'}/>
                <NextButton title={'Program Selection'} />
            </div>
        </div>
    )
}

export default EducationBackground
const heading = {
    heading: 'Education Background',
    subDetail: 'Please provide information regarding your education background.'
}
const detailOne = {
    heading: 'Previous Education',
}
const detailTwo = {
    heading: 'High School Information',
    subDetail: `Click 'Select Your High School' to find and select the last high school you attended.`
}
const detailThree = {
    heading: 'College Information',
    subDetail: `Please provide college information below.`
}

const fieldOne = [{
    type: 'text',
    placeholder: 'Middle Name',
    title: 'Highest Education you have attempted or completed',
    required: false,
    isField: 'dropDown',
    colSpan: 'col-md-4'
}
]
const fieldTwo = [
    {
        type: 'text',
        placeholder: 'High School',
        title: 'Did you receive a high school diploma or GED?',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    },
    {
        type: 'text',
        placeholder: 'Bubba Gump',
        title: 'What is your first and last name on your diploma or GED?',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    },
    {
        type: 'text',
        placeholder: 'Ford High School',
        title: 'Find your high school',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    },
    {
        type: 'date',
        placeholder: 'Ford High School',
        title: 'High school graduation date',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    }
]
const fieldThree = [
    {
        type: 'text',
        placeholder: 'Yes',
        title: 'Have you previously attended college?',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    },
    {
        type: 'text',
        placeholder: 'No',
        title: 'Did you plan on transferring credits?',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    },
]


