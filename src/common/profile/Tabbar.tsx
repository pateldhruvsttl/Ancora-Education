
import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IcnCheck from '../../assets/icons/IcnCheck'
import './Profile.scss'

export default function IconTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            TabIndicatorProps={{
                style: {
                    backgroundColor: "#2B4574" //here specify the color of the tabs
                }
            }}
            sx={{
                maxWidth: '100%',
                alignItems: 'center',
                paddingRight: '20px',
                paddingLeft: '20px',
                [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                    height: '25px',
                    width: '25px',
                    backgroundColor: 'white',
                    border: '1px solid',
                    marginRight: '20px',
                    marginLeft: '20px',
                },
            }}
        >

            <Tab icon={<span className='tabi darkblue'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel darkblue-col'>Contact Information</span>} />
            <Tab icon={<span className='tabi gray'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel gray-col'>Military Background</span>} />
            <Tab icon={<span className='tabi orange'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel orange-col'>Education Background</span>} />
            {/* <Tab icon={<span className='tabi gray'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel'>Program Selection</span>} />
            <Tab icon={<span className='tabi gray'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel'>Program Preferences</span>} /> */}

        </Tabs>
    );
}

