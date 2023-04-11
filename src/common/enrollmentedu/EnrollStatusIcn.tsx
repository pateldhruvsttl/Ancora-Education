import React from 'react'
import TableCell from '@mui/material/TableCell';
import IcnCheck from '../../assets/icons/IcnCheck'
import './Enrollment.scss'
import Dimention from '../../utils/Dimention';

interface props {
    status?: string
}
function EnrollStatusIcn({ status }: props) {
    const { width } = Dimention()
    const getClass = () => {
        if (status === 'Completed') return 'enrollStatus'
        else if (status === 'Processing') return 'enrollStatus enroll-orange'
        else return 'enrollStatus enroll-gray'
    }

    const getIcnClass = () => {
        if (status === 'Completed') return 'enrollStatusIcn'
        else if (status === 'Processing') return 'enrollStatusIcn enrollIcn-orange'
        else return 'enrollStatusIcn enrollIcn-gray'
    }
    return (
        width >= 320 && width < 450 ?
            <TableCell align="center">
                <span className={getIcnClass()}><IcnCheck width={10} height={10} /></span>
                <span className={getClass()}>{status}</span>
            </TableCell>
            :
            <TableCell align="center">
                <span className={getClass()}>{status}</span>
                <span className={getIcnClass()}><IcnCheck width={10} height={10} /></span>
            </TableCell>
    )
}

export default EnrollStatusIcn