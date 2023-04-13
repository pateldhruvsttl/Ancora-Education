import DirectLoan from "./DirectLoan"
import FundingFutureTitle from "./FundingFutureTitle"
import PellGrant from "./PellGrant"

export const cardData = [
    {
        image: 'https://www.accoladefinancial.com/wp-content/uploads/2022/04/5-FAFSA-and-Financial-Aid-Myths.jpg',
        title: 'Myths About Financial Aid'
    },
    {
        image: 'https://media.istockphoto.com/id/1300095080/photo/savings-for-college-and-education-pink-piggy-bank-with-graduation-cap-and-money.jpg?s=612x612&w=0&k=20&c=zmwM_NXJV8JMTVScWSq5U13Pzxurs4CMtTMSzWLSLCM=',
        title: 'Overview of the Financial Aid Process'
    },
    {
        image: 'https://media.istockphoto.com/id/1152654933/photo/mother-and-daughter-celebrate-scholarship-award.jpg?s=612x612&w=0&k=20&c=xne8j6neR0wFzIb7bHrhZON-ZWVd_8XYdxp49vv78uE=',
        title: 'Responsible Borrowing'
    }
]

export const heading = {
    heading: 'Funding Your Future',
    subDetail: 'Miller-Motte offers a variety of options to assist students in covering their educational costs. It’s important you understand all of the financing options available to you because students will often utilize a few different sources to pay for school. You don’t have to choose only one option.'
}

export const subDetail = ` Here are a few videos to help you better understand financial aid as well as an overview of your financial aid options.`


const typeDataOne = {
    detailOne: 'Federal Pell Grants',
    detailTwo: `The Federal Pell Grant usually is awarded only to undergraduate students who have not earned a Bachelor's degree or a professional degree.A student's eligibility for the Pell Grant is based on a student's financial need, cost of attendance, their enrollment status(full- time part - time), and their plans to attend school for a full academic year or less.`,
    detailThree: 'A program must be eligible to receive Title IV funding to utilize this funding type.',
    detailFour: '21/22 Award Year - Maximum award for full time enrollment - $6495',
    detailFive: '22/23 Award Year - Maximum award for full time enrollment - $6895',

}

const typeDataTwo = {
    detailOne: 'Subsidized Stafford Loan',
    detailTwo: `The Subsidized Stafford Loan is available to students who qualify for need as determined by the FAFSA. Students must be a U.S. citizen or eligible non-citizen as well as have a high school diploma or GED. Like most federal student loans, interest does not accrue while the student is in school. If students qualify for a subsidized Stafford Loan, it will be stated on their financial aid offer notification along with the amount for which they can borrow`,
    detailThree: 'Unsubsidized Loan',
    detailFour: 'A loan for which the borrower is fully responsible for paying the interest no matter the status of the loan. Unsubsidized loans accrue interest from the date of disbursement and continue throughout the life of the loan. This type of loan is not based on financial need.',
    detailFive: 'Below are the maximum eligibility amounts of loan funds that are available for students to apply for.',

}

const typeDataThree = {
    detailOne: 'Parents may borrow up to the full cost of education minus other financial aid received. Interest is charged during all periods and credit checks are required.',
    detailTwo: 'Eligibility for the PLUS is up to the Cost of Attendance less other financial aid awarded.'
}
const typeDataFour = {
    detailOne: 'Federal Work-Study Program',
    detailTwo: 'The Federal Work Study Program provides funds for part-time employment to help needy students finance the costs of postsecondary education. Students looking to utilize the Federal Work Study Program will need to complete the free application for Federal Student Aid and speak with a Financial Services Officer to determine eligibility.',
    detailThree: 'Federal Work-study eligibility is calculated up to the cost of attendance less other financial aid awarded.'
}
const typeDataFive = {
    detailOne: 'FSEOG is a need-based federal student assistance program. Funds are limited and awarded on a first come first serve basis at each start date up to the total school allocation. FSEOG funds are first awarded to first time enrolled undergraduate students,Pell eligible students demonstrating the greatest financial need with the lowest EFC. FSEOG awards range from $100 to $600.',
}
const typeDataSix = {
    detailOne: 'State Grants',
    detailTwo: `Based on a student's state of residence they may be eligible to apply for a State Grant. Upon completion of the Free Application
    for Federal Student Aid students will be prompted to complete additional information to determine potential eligibility. Once
    completed please contact a Financial Services Officer to discuss future steps`,
}

const directLoadTableData = [
    {
        firstValue: 'First Year – $3500',
        secondValue: 'Independent Students First Year',

    },
    {
        firstValue: 'Second Year – $4500',
        secondValue: '$6000 Second Year – $6000'
    },
    {
        firstValue: 'Third Year and Beyond – $5500',
        secondValue: 'Third Year and Beyond – $7000'
    },
    {
        secondValue: 'Dependent Students'
    },
    {
        secondValue: 'Maximum loan amount – $2000'
    }
]

export const fundingFutureTableData = [
    {
        fundingType: <FundingFutureTitle title={'Pell Grants'} />,
        fundingDesc: <PellGrant data={typeDataOne} />
    },
    {
        fundingType: <FundingFutureTitle title={'Direct Loans'} />,
        fundingDesc: <DirectLoan tableData={directLoadTableData} data={typeDataTwo}/>
    },
    {
        fundingType: <FundingFutureTitle title={'Direct Parent PLUS Loan'} />,
        fundingDesc: <PellGrant data={typeDataThree} />
    },
    {
        fundingType: <FundingFutureTitle title={'Federal Work Study (FWS)'} />,
        fundingDesc: <PellGrant data={typeDataFour} />
    },
    {
        fundingType: <FundingFutureTitle title={'Federal Supplemental Education Opportunity Grant (FSEOG)'} />,
        fundingDesc: <PellGrant data={typeDataFive} />
    },
    {
        fundingType: <FundingFutureTitle title={'State Grants'} />,
        fundingDesc: <PellGrant data={typeDataSix} />
    },
]
