import React from 'react'
import CommonParagraph from '../common/commonheading/CommonParagraph'
import NextButton from '../common/formbutton/NextButton'
import PreviousButton from '../common/formbutton/PreviousButton'
import RadioButton from '../common/inputfield/RadioButton'
import ProfileHeading from '../common/profile/ProfileHeading'
import './ComponentStyle.scss'
import '../common/profile/ProfileDetail.scss'
import AddFerpaDetail from '../common/ferpadetail/AddFerpaDetail'
import AddFerpaButton from '../common/ferpadetail/AddFerpaButton'

function FamilyEduRightPrivacy() {
  return (
    <div className='profileDetai add-space-both'>

      <ProfileHeading {...heading} isBorder={false} />

      <CommonParagraph subDetail={subDetail} isEnroll={true} />
      <CommonParagraph subDetail={subDetailOne} isEnroll={true} />
      <CommonParagraph subDetail={subDetailTwo} isEnroll={true} />

      <RadioButton detail={selection} />

      <AddFerpaDetail />
      <AddFerpaButton />

      <div className='profile-hline enroll-top' />

      <div className='buttons-cal'>
        <PreviousButton title={'Previous Step'} />
        <NextButton title={'Next Step: Enrollment Confirmation'} />
      </div>

    </div>
  )
}

export default FamilyEduRightPrivacy

const selection = {
  selectOne: 'Do not release any information.',
  selectTwo: 'I agree that my Academic and Financial Aid records at ONL - Miller-Motte Online Programs (CHAT) may be released to the following parties:'
}
const heading = {
  heading: 'The Family Educational Rights and Privacy Act of 1974 (FERPA)',
}

const subDetail = `The following information is required by the Family Educational Rights and Privacy Act of 1974. As amended, in order for the college to be authorized to release the information you indicate. This procedure is followed to protect your privacy.`

const subDetailOne = ` I hereby authorize miller-motte.ancoraed.com to release information from my academic or financial aid file as indicated and any other record pertaining to me to the individuals listed below.I understand and agree that this release will encompass my entire academic career at miller-motte.ancoraed.com. I may change this permission at
any time by completing a new "Authorization to Release Information," at which time any prior forms signed by me will become null and void. In addition, I understand that
the person(s) listed below will be asked to verify my last four digits of social security number and date of birth to any information being released to them.`

const subDetailTwo = `Please indicate your preference relative to releasing information about you.`

