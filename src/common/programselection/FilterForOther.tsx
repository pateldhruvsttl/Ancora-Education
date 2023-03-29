import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Style from './CardPageStyle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './ProgramTab.scss'

function FilterForOther() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={Style.filterContainer} className="myClass">
            <Typography sx={Style.filterby}>Filter By:</Typography>
            <Tabs
                TabIndicatorProps={{
                    style: Style.tabIndicatorDesign
                }}
                value={value} onChange={handleChange} centered>
                {/* for active tab we add style 'filterActive' */}
                <Tab label={<Typography sx={{ ...Style.filterType, ...Style.filterActive }}>All</Typography>} />
                <Tab label={<Typography sx={Style.filterType}>Degree & Diplomas Programs</Typography>} />
                <Tab label={<Typography sx={Style.filterType}>Short-Term Programs</Typography>} />
            </Tabs>
        </Box>
    )
}

export default FilterForOther