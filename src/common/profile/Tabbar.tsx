import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IcnCheck from '../../assets/icons/IcnCheck'
import IcnLock from '../../assets/icons/IcnLock'
import './Profile.scss'
import ProfileDetail from './ProfileDetail';
import TabPanel from './TabPanel';
import EducationBackground from '../../components/EducationBackground';
import ProgramSelection from '../../components/ProgramSelection';
import ProfileConfirmation from '../../components/ProfileConfirmation';
import FamilyEduRightPrivacy from '../../components/FamilyEduRightPrivacy';
import EnrollmentEducation from '../../components/EnrollmentEducation';
import MyFundingPlan from '../../components/MyFundingPlan';


function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function IconTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
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
                        height: '25px', width: '25px', backgroundColor: 'white',
                        border: '1px solid',
                        marginRight: '20px', marginLeft: '20px',
                    },
                }}
            >
                {/* for blue color of icon use darkblue class and blue color label use darkblue-col*/}
                {/* for grey color of icon use gray class and gray color label use gray-col */}
                {/* for orange color of icon use orange class and orange color label use orange-col */}
                {/* for lightgreen color of icon use lightgreen class and green color label use green-col */}

                <Tab {...a11yProps(0)} icon={<span className='tabi darkblue'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel darkblue-col'>Contact Information</span>} />
                <Tab {...a11yProps(1)} icon={<span className='tabi gray'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel gray-col'>Personal Information</span>} />
                <Tab {...a11yProps(2)} icon={<span className='tabi gray'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel gray-col'>Military Background</span>} />
                <Tab {...a11yProps(3)} icon={<span className='tabi orange'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel orange-col'>Education Background</span>} />
                <Tab {...a11yProps(4)} icon={<span className='tabi lightgreen'><IcnCheck width={15} height={12} /></span>} iconPosition="start" label={<span className='tlabel green-col'>Enrollment Documents</span>} />
                <Tab {...a11yProps(5)} icon={<span className='tabi darkblue'><IcnCheck width={15} height={12} /></span>} iconPosition="start" label={<span className='tlabel darkblue-col'>FERPA</span>} />
                <Tab {...a11yProps(6)} icon={<span className='tabi darkblue'><IcnCheck width={15} height={12} /></span>} iconPosition="start" label={<span className='tlabel darkblue-col'>My Funding Plan</span>} />
                <Tab icon={<span className='tabi gray'><IcnCheck /></span>} iconPosition="start" label={<span className='tlabel gray-col'>Program Preferences</span>} />
                <Tab icon={<span className='tabi lightgreen'><IcnLock width={15} height={12} /></span>} iconPosition="start" label={<span className='tlabel green-col'>Program Selection</span>} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <ProfileDetail />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EducationBackground />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ProgramSelection />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ProfileConfirmation />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <EnrollmentEducation />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <FamilyEduRightPrivacy />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <MyFundingPlan />
            </TabPanel>
        </>
    );
}

