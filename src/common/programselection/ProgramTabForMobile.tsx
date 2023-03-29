import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Style from './CardPageStyle';
import IcnBusiness from '../../assets/icons/IcnBusiness'
import IcnClose from '../../assets/icons/IcnClose'


function ProgramTabForMobile() {
    return (
        <Box sx={{ ...Style.filterContainer, ...Style.programTabMobileCal }}>
            <Box sx={Style.leftFilter}>
                <IcnBusiness width={21} height={21} />
                <Typography sx={Style.businessTab}>
                    Business
                </Typography>
            </Box>
            <Box>
                <IcnClose width={15} height={15} />
            </Box>

        </Box>
    )
}

export default ProgramTabForMobile