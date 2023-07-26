import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input/Input';
import InputLabel from '@mui/material/InputLabel/InputLabel';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

import TextField from '@mui/material/TextField';

import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import TextareaAutosize from '@mui/base/TextareaAutosize';



function StudentService() {



    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="#"
            onClick={handleClick}
        >
            Student Services
        </Link>,
        <Typography key="3" color="text.primary">
            Student Support
        </Typography>,
    ];

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    const [select, setSelect] = React.useState('');
    const [select2, setSelect2] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setSelect2(event.target.value);
    };



    return (

        <>
            <Box className="studentServiceWrap">
                <Box className="breadCrumbWrap">
                    <Container maxWidth="xl">
                        <Stack spacing={2} className='MainBreadCrumbs'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="small" />}
                                aria-label="breadcrumb"
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Container>
                </Box>

                <Box className='alertGrp'>
                    <Alert severity="error"><Typography component="strong">Alert:</Typography >You have not completed the enrollment process. Complete your enrollment now!</Alert>
                </Box>

                <Box className="studentSupportCard">
                    <Container maxWidth="xl">
                        <Box className="studentSupportCardInner">
                            <Box className="heading">
                                <h3>Student Support</h3>
                            </Box>

                            <FormControl className='formControl'>
                                <Grid container spacing={3}>
                                    <Grid lg={6} pb={3}>
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="select">Campus</InputLabel>
                                            <Select
                                                id='select'
                                                value={select}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='selectFuild'
                                            >
                                                <MenuItem value="">
                                                    <em>(776) ONL - Miller-Motte Online Programs (CHAT)</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} pb={3} >
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="studentno">Student No.</InputLabel>
                                            <TextField placeholder="13256901" id='studentno' className='inputFuild' />
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} pb={3} >
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                                            <TextField placeholder="qatest1" className='inputFuild' />
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} pb={3} >
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                            <TextField placeholder="ttestjadu1" className='inputFuild' />
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} pb={3} >
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="mail">Email</InputLabel>
                                            <TextField placeholder="harsha.patil@ancoraeducation.com" id="mail" className='inputFuild' />
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} pb={3} >
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="phone">Phone</InputLabel>
                                            <TextField placeholder="(666)-666-6666" id="Phone" className='inputFuild' />
                                        </Box>
                                    </Grid>
                                    <Grid lg={6}>
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="mail">Preferred Contact</InputLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                                className='redioGroup'
                                            >
                                                <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
                                                <FormControlLabel value="phoneType" control={<Radio />} label="Phone Type" />
                                            </RadioGroup>
                                        </Box>
                                    </Grid>
                                    <Grid lg={6} pb={3}>
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="select2">Support Type</InputLabel>
                                            <Select
                                                id='select2'
                                                value={select2}
                                                onChange={handleChange2}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='selectFuild'
                                            >
                                                <MenuItem value="">
                                                    <em>Select</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </Box>
                                    </Grid>
                                    <Grid lg={12}>
                                        <Box className="oneFulid">
                                            <InputLabel htmlFor="select2">Message</InputLabel>
                                            <TextareaAutosize minRows={8} className='textArea'/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </FormControl>

                            <Box className="submitBtn">
                                <Typography component="a" type='submit'>Save</Typography>
                            </Box>

                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )

}
export default StudentService