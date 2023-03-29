import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Style from './CardPageStyle';
import IcnFilter from '../../assets/icons/IcnFilter'


function FilterForMobile() {
    return (
        <Box sx={{ ...Style.filterContainer, ...Style.filterMobileContainer }}>
            <Box sx={Style.leftFilter}>
                <Typography sx={{ ...Style.filterby, ...Style.allFilterTxt }}>Filter By:</Typography>
                <Typography sx={Style.filterActive}>
                    All
                </Typography>
            </Box>
            <Box sx={Style.rightFilter}>
                <IcnFilter width={18} height={18} />
            </Box>

        </Box>
    )
}

export default FilterForMobile