import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Profile',
    'Enrollment',
    'Financial Aid & Funding',
];

export default function ProgressLine() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper
                activeStep={1}  // This is the active step number
                alternativeLabel>
                {steps.map((label) => (
                    <Step sx={{
                        '& .MuiStepLabel-root .Mui-completed': {
                            color: '#2DCC70', // circle color (COMPLETED)
                        },
                        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                        {
                            color: '#2DCC70', // Just text label (COMPLETED)
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                            color: '#FFB300', // circle color (ACTIVE)
                        },
                        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                        {
                            color: '#FFB300', // Just text label (ACTIVE)
                        },
                        '& .Mui-disabled .MuiStepIcon-root': {
                            color: '#A8A8A8', // circle color (DISABLED)
                        },
                        '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel': {
                            color: '#A8A8A8', // Just text label (DISABLED)
                        },
                    }} key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
