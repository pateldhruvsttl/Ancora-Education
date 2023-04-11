import React from 'react'
import TableCell from '@mui/material/TableCell';
import IcnCheck from '../../assets/icons/IcnCheck'
import './Enrollment.scss'

type IconType = (props:any) => JSX.Element

interface props{
    action?:string
    Icon:IconType
}
function EnrollAction({action,Icon} : props) {
    return (
        <TableCell align="center">
            <div className='enroll-action'><Icon width={12} height={12} />
            <span className='enroll-actionTxt'>{action}</span></div>
        </TableCell>
    )
}

export default EnrollAction