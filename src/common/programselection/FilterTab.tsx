import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Style from './CardPageStyle';
import { Typography } from '@mui/material';
import './ProgramTab.scss'
import Dimention from '../../utils/Dimention';
import FilterForMobile from './FilterForMobile';
import FilterForOther from './FilterForOther';

export default function FilterTab() {
    const { width, height } = Dimention()

    return (
        width >= 823 ?
            <FilterForOther />
            :
            <FilterForMobile />

    );
}
