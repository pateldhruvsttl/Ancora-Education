import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EnrollStatusIcn from './EnrollStatusIcn';
import EnrollAction from './EnrollAction';
import IcnView from '../../assets/icons/IcnView'
import IcnEdit from '../../assets/icons/IcnEdit'
import IcnAdd from '../../assets/icons/IcnAdd'
import Style from './EnrollmentStyle'
import Dimention from '../../utils/Dimention';

function createData(
    name: string,
    status: string,
    action: string,
) {
    return { name, status, action, };
}

const rows = [
    createData('AM - ASR Notice of Availability', 'Completed', 'View'),
    createData('AM - Criminal Background Pending Ack', 'Completed', 'View'),
    createData('AM - Criminal Background Pending Ack', 'Processing', 'Edit'),
    createData('AM - Criminal Background Pending Ack', 'Completed', 'View'),
    createData('AM - Criminal Background Pending Ack', 'Pending', 'Add'),
];

export default function EnrollTable() {
    const { width } = Dimention()

    const getDocNameStyle = () => {
        if (width >= 1000 && width <= 1470) return Style.docStyleOne
        else if (width >= 884 && width < 1000) return Style.docStyleTwo
        else if (width >= 481 && width < 884) return Style.docStyleThree
        else if (width >= 320 && width < 500) return Style.docStyleFour
        else if (width >= 1471) return Style.docStyle
    }

    const getStatusStyle= () => {
        return width >= 320 && width < 450 ? Style.statusTD : Style.statusTDOther
    }
    return (
        <TableContainer component={Paper} sx={{ marginTop: 3, boxShadow: 'none' }}>
            <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{
                        marginTop: '-10px',
                        borderBottom: '2px solid #2B4574'
                    }}>
                        <TableCell sx={getDocNameStyle()}>Document Name</TableCell>
                        <TableCell sx={getStatusStyle()} align="center">Status</TableCell>
                        <TableCell sx={Style.actionTD} align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ padding: 0 }}>
                                {row.name}
                            </TableCell>
                            {/* For render different status */}
                            {
                                row.status == 'Completed'
                                    ?
                                    <EnrollStatusIcn status={row.status} />
                                    :
                                    row.status == 'Processing' ?
                                        <EnrollStatusIcn status={row.status} />
                                        :
                                        <EnrollStatusIcn status={row.status} />
                            }
                            {/* for render different action */}
                            {
                                row.action == 'View'
                                    ?
                                    <EnrollAction action={row.action} Icon={IcnView} />
                                    :
                                    row.action == 'Edit' ?
                                        <EnrollAction action={row.action} Icon={IcnEdit} />
                                        :
                                        <EnrollAction action={row.action} Icon={IcnAdd} />
                            }

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
