import React from 'react'
import './ComponentStyle.scss'
import '../common/profile/ProfileDetail.scss'
import EnrollHeaderContent from '../common/enrollmentedu/EnrollHeaderContent'
import EnrollTable from '../common/enrollmentedu/EnrollTable'
import PreviousButton from '../common/formbutton/PreviousButton'
import NextButton from '../common/formbutton/NextButton'

function EnrollmentEducation() {
    return (
        <div className='profileDetai add-space-both'>
            <EnrollHeaderContent />
            <EnrollTable />
            <div className='buttons-cal'>
                <PreviousButton title={'Previous Step'} />
                <NextButton title={'Next step: FERPA'} />
            </div>
        </div>
    )
}

export default EnrollmentEducation