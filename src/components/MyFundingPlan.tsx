import React from 'react'
import './ComponentStyle.scss'
import '../common/profile/ProfileDetail.scss'
import ProfileHeading from '../common/profile/ProfileHeading'
import CostAttendance from '../common/myfundingplan/CostAttendance'
import FundingContent from '../common/myfundingplan/FundingContent'
import CommonAcademic from '../common/myfundingplan/CommonAcademic'
import NetCost from '../common/myfundingplan/NetCost'
import AcademicYearOne from '../common/myfundingplan/AcademicYearOne'
import IcnRight from '../assets/icons/IcnRight'
import GetFundingButton from '../common/myfundingplan/GetFundingButton'

function MyFundingPlan() {
  return (
    <div className='profileDetai add-space-both'>
      <ProfileHeading {...heading} isBorder={true} />
      <CostAttendance />
      <FundingContent />
      <AcademicYearOne academicDetail={academicDetailOne} data={academicDataOne}
        headerRow={academicOneTableHeading} isIcon={true} />
      <CommonAcademic academicDetail={academicDetailOne} Icon={IcnRight} />
      <CommonAcademic academicDetail={academicDetailOne} Icon={IcnRight} />
      <AcademicYearOne academicDetail={academicSecondYearDetail} data={academicDataTwo}
        headerRow={academicTwoTableHeading} isIcon={false} />
      <NetCost />
     <GetFundingButton />
    </div>
  )
}

export default MyFundingPlan

const heading = {
  heading: 'My Funding Plan',
  subDetail: 'Congratulations on your acceptance to Miller-Motte! Your funding plan below is based on information you provided during the enrollment process and your completed Free Application for Federal Student Aid.'
}

const academicDetailOne = {
  academicYear: 'Academic Year 2: 03/20/2023 - 10/15/2023',
  awardYear: 'Award Year: 2022-23, 2023-24'
}
const academicSecondYearDetail = {
  academicYear: 'Program Dates: 8/08/2022 - 12/24/2023'
}

const academicOneTableHeading = {
  one: 'Net Amount Term 1 8/08/2022 - 10/16/2022',
  two: 'Net Amount Term 2 10/17/2022 - 12/25/2022',
  three: 'Net Amount Term 3 1/09/2023 - 3/19/2023',
  four: 'Total Academic Year Net Amount',
  five: 'Gross Amount'
}
const academicTwoTableHeading = {
  one: 'Academic Year 1',
  two: 'Academic Year 2',
  three: 'Academic Year 3',
  four: 'Total Program Net Amounts',
  five: 'Total Program Gross Amount'
}

const academicDataOne = [
  {
    name: 'Tuition and Fees', netAmountOne: '$4,606.00',
    netAmountTwo: '$4,606.00', netAmountThree: '$4,606.00',
    totalNetAmount: '$13,818.00', grossAmount: '$13,818.00'
  },
  {
    name: 'Tuition Flex (Student Cash Payment)', netAmountOne: '$4,606.00',
    netAmountTwo: '$4,606.00', netAmountThree: '$4,606.00',
    totalNetAmount: '$13,818.00', grossAmount: '$13,818.00'
  },
  {
    name: 'Total Funding', netAmountOne: '$4,606.00',
    netAmountTwo: '$4,606.00', netAmountThree: '$4,606.00',
    totalNetAmount: '$13,818.00',
  },
  {
    name: 'Term Balance', netAmountOne: '$0.00',
    netAmountTwo: '$0.00', netAmountThree: '$0.00',
  },
]

const academicDataTwo = [
  {
    name: 'Tuition and Fees', netAmountOne: '$13,818.00',
    netAmountTwo: '$13,818.00', netAmountThree: ' $4,606.00',
    totalNetAmount: '$32,242.00', grossAmount: '$32,242.00'
  },
  {
    name: 'Federal Direct Subsidized Loan', netAmountOne: '$0.00',
    netAmountTwo: '$0.00', netAmountThree: '$0.00',
    totalNetAmount: '$0.00', grossAmount: '$0.00'
  },
  {
    name: 'Federal Direct Unubsidized Loan', netAmountOne: '$0.00',
    netAmountTwo: '$0.00', netAmountThree: '$0.00',
    totalNetAmount: '$0.00', grossAmount: '$0.00'
  },
  {
    name: 'Tuition Flex (Student Cash Payment)', netAmountOne: '$13,818.00',
    netAmountTwo: '$13,818.00', netAmountThree: '$4,606.00',
    totalNetAmount: '$32,242.00', grossAmount: '$32,242.00'
  },
  {
    name: 'Total Funding', netAmountOne: '$4,606.00',
    netAmountTwo: '$4,606.00', netAmountThree: '$4,606.00',
    totalNetAmount: '$13,818.00',
  },
  {
    name: 'Term Balance', netAmountOne: '$0.00',
    netAmountTwo: '$0.00', netAmountThree: '$0.00',
  },
]