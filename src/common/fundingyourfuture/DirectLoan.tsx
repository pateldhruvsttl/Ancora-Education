import React from 'react'
import PellGrant from './PellGrant'
import './FundingFuture.scss'
import DirectLoanTable from './DirectLoanTable'

interface props{
    tableData:{}[]
    data:{}
}
function DirectLoan({tableData,data}:props) {
  return (
    <div className='directloan-cal'>
        <PellGrant data={data}/>
        <DirectLoanTable data={tableData}/>
    </div>
  )
}

export default DirectLoan