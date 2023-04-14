import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Style from './FundingMyFutureStyle'
import { getStyle,getAcademicStyle,getProgramCost } from './GetDifferentStyle'

interface data {
    leftData?: string
    academicEstimate?: string
    programCost?: string
}
function MyFutureContent() {
    return (
        <>
            {data.map((row: data, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}>
                    <TableCell style={getStyle(index)}>{row?.leftData}</TableCell>
                    <TableCell style={getAcademicStyle(index)}>{row?.academicEstimate}</TableCell>
                    <TableCell style={getProgramCost(index)}>{row?.programCost}</TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default MyFutureContent

const data = [
    {
        leftData: 'What Should I Borrow?',
    },
    {
        leftData: `To get the most immediate benefit rom your education and minimize you future deb,
        we encourage you o borrow asltle as necessary. Although you can borrow up 10 your
        maximum loan eligibility shown under Federal Student Loans, the amount we recommend
        you borrow is shown below.`,
    },
    {
        leftData: `Federal Student Loans - Maximum Loan Eligitity`,
        academicEstimate: '$3,500.00',
        programCost: '$9,833.00'
    },
    {
        leftData: `Net Recommended Loan Amounts 5000`,
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
    {
        leftData: `Federal Dict Subsicized Loan`,
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
    {
        leftData: `Federal Direct Unsubsidized Loan`,
        academicEstimate: '$0.00',
        programCost: '$0.00'
    },
]