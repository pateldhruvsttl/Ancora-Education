import React from 'react'
import Style from './FundingPlanStyle'

function FundingContent() {
  return (
    <div style={Style.fundingContent as React.CSSProperties}>
        <p style={Style.fundingConTxt}>*Based on your anticipated course load.</p>
        <p style={Style.fundingConTxt}>**Cost of Attendance components are estimated and your actual costs may vary.</p>
    </div>
  )
}

export default FundingContent