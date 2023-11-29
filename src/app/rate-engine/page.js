import * as React from "react";
import { RateEngine, RateEngineChild, BasicTabs } from "@/page";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  return (
    <main>
      <div>
        <Box sx={{marginBottom:"20px"}}>
        <RateEngine></RateEngine>
        </Box>
        <Container>
          <Accordion
  
          >
          
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-header"
             sx={{
              '.MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-o4b71y-MuiAccordionSummary-content'
              :{
               width:"100%" 
              },
             
              flexDirection:"column"
             }}
            
            >
             <RateEngineChild></RateEngineChild>
            </AccordionSummary>
            <AccordionDetails>
            <BasicTabs></BasicTabs>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div>
    </main>
  );
}
