import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from "@mui/material";

export function RateEngineDemurge(){
    return(
        <Paper elevation={1} sx={{height:"250px"}}>
            <RenderedCards></RenderedCards>
        </Paper>
    );
}
  
export function DemmurgeCard({ demurgeTitle, numberOfDays, usageContainer }) {
    return (
      <Card display="flex" flexDirection="column" alignItems="center" sx={{ width: "250px", backgroundColor: "#eff5fa",mt:4,mx:1 ,borderRadius:5}} spacing={2}>
        <CardContent>
          <Box>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" >
              {demurgeTitle}
            </Typography>
            <Grid container sx={{ mb: 1,mt:1 }}>
              <Grid item xs={1} sx={{color:"#3f51b5",fontSize:'28px'}}>
              {numberOfDays}
              </Grid>
              <Grid item xs={11}>
                <Typography sx={{fontSize:'14px',marginTop:'14px',fontWeight:'bold'}}>Days</Typography>
              
              </Grid>
            </Grid>
            
            <Typography sx={{ fontSize: 13,fontWeight:'bold' }}>
              {usageContainer}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }


  const cardsData = [
    { demurgeTitle:"Free Time at Origin Per Container is",
      numberOfDays:"7 ",
      usageContainer:"CONTAINER USAGE",
    },
    {
      demurgeTitle:"Free Time at Destination Per Container",
      numberOfDays:"0 ",
      usageContainer:"CONTAINER DEMRRAGE",
     
    },
    {
        demurgeTitle:"Free Time at Destination Per Container",
        numberOfDays:"0 ",
        usageContainer:"CONTAINER DETENTION",
    },
    {
        demurgeTitle:"Free Time at Destination Per Container",
        numberOfDays:"0 ",
        usageContainer:"COMBINED",
    },
  ];

  export const RenderedCards = () => {
    return (
        <Box display="flex" gap={2} flexDirection="row">
        {cardsData.map((data, index) => (
          <DemmurgeCard
            key={index}
            demurgeTitle={data.demurgeTitle}
            numberOfDays={data.numberOfDays}
            usageContainer={data.usageContainer}
          />
        ))}
      </Box>
    );
  };

  