import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './Confirmation.scss'
import Style from './ConfirmationStyle';
import Dimention from '../../utils/Dimention';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface data {
    data: {}[]
}
export default function CommonSubInformation({ data }: data) {
    const { width, height } = Dimention()
    return (

        <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
            <Grid sx={{ boxShadow: 0 }}  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                {data?.map((item: any, index) => (
                    <>
                        <Grid item xs={6} sm={4} md={2.4} >
                            <Item sx={{ boxShadow: 0, textAlign: 'left', padding: 0 }}>
                                <Typography sx={width <= 499 ? Style.fnameConfir : Style.fnameConfirOther}>{item.title}</Typography>
                                <Typography sx={width <= 499 ? Style.lnameConfir : Style.lnameConfirOther}>{item.subTitle}</Typography>
                            </Item>
                        </Grid>
                    </>
                ))}
            </Grid>
        </Box>
    );
}
