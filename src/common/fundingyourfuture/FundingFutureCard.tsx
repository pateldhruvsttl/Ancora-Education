import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Style from './FundingFutureStyle'
import '../../components/ComponentStyle.scss'
import '../profile/ProfileHeading.scss'
import IcnYoutube from '../../assets/icons/IcnYoutube'

interface props {
    data: {}[]
}
export default function FundingFutureCard({ data }: props) {
    return (
        <>
            <Box style={Style.fundingFuture}>
                <Grid container spacing={4} >
                    {
                        data.map((item: any, index) => {
                            return (
                                <Grid item key={index} xs={12} sm={6} md={6} lg={4} sx={{maxHeight:'300px'}}>
                                    <Card sx={Style.futureCard}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={item.image}
                                                alt="green iguana"
                                            />
                                            <Typography sx={Style.youtubeCal}><IcnYoutube width={65} height={38}/></Typography>
                                            <CardContent sx={Style.futureContent}>
                                                <Typography sx={Style.cardLable} gutterBottom variant="h6" component="div">
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <div className='profile-hline enroll-top' />
        </>
    );
}
