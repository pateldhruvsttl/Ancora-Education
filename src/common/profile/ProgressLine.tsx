import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ThemeProvider, createTheme } from '@mui/material/styles';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
</style>

const steps = [
    'Profile',
    'Enrollment',
    'Financial Aid & Funding',
];

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: `'Roboto', sans-serif`,
            letterSpacing: '0.3px'
        },
    },
})
export default function ProgressLine() {
    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ width: '100%' }} className='timeline-title'>
                <Stepper
                    activeStep={1}  // This is the active step number
                    alternativeLabel>
                    {steps.map((label) => (
                        <Step sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                                color: '#2DCC70', // circle color (COMPLETED)
                                fontWeight: '500',
                            },
                            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                            {
                                color: '#2DCC70', // Just text label (COMPLETED)
                                fontWeight: '500',
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                                color: '#FFB300', // circle color (ACTIVE)
                                fontWeight: '500',
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                            {
                                color: '#FFB300', // Just text label (ACTIVE)
                                fontWeight: '500',
                            },
                            '& .Mui-disabled .MuiStepIcon-root': {
                                color: '#A8A8A8', // circle color (DISABLED)
                                fontWeight: '500',
                            },
                            '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel': {
                                color: '#A8A8A8', // Just text label (DISABLED)
                                fontWeight: '500',
                            },
                        }} key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </ThemeProvider>
    );
}
