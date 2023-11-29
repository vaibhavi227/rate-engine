import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";

export function RateEngineDemurge(){
    return(
        <Paper elevation={1} sx={{height:"250px"}}>
            <RenderedCards></RenderedCards>
        </Paper>
    );
}
  
export function DemmurgeCard({ demurgeTitle, numberOfDays, usageContainer }) {
    return (
      <Card display="flex" flexDirection="column" alignItems="center" sx={{ width: "250px", backgroundColor: "#eff5fa", mt: 2,mx:2 }} spacing={2}>
        <CardContent>
          <Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" >
              {demurgeTitle}
            </Typography>
            <Typography sx={{ mb: 1.5,mt:3 }} color="text.secondary">
              {numberOfDays} Days
            </Typography>
            <Typography>
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

  