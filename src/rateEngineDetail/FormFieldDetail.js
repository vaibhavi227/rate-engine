import { Grid, InputLabel, Typography } from "@mui/material";
import { FormField } from "./rateEngineDetailsComponents";

export default function RateEngineFormAndLogo(){
    return(
        <Grid container >
            <Grid item xs={9}>
                 <FormFieldDetailsNext></FormFieldDetailsNext>
                 </Grid>
            <Grid item xs={3}>
                <img src="https://demo.kuulie.com/static/media/logo-cos.e72cdee2.jpg" height={90} width={130}></img>
            </Grid>
        </Grid>
    );
}
export function FormFieldDetailsNext(){
    const fieldsArray1 = [
      { labelName: 'Commodity', labelValue: 'FREIGHT ALL KINDS' },
      { labelName: 'Incoterm', labelValue: 'FOB' },
      { labelName: 'Weight', labelValue: '0 KGS' },
    ];
    return(
        <>
       <Grid container>
      {fieldsArray1.map((field, index) => (
        <Grid item xs={4} key={index}>
          <FormField
            labelName={field.labelName}
            labelValue={field.labelValue}
          />
        </Grid>
      ))}
    </Grid>
        </>
    );
  }


  export function FormFieldDetailSellingSchedule(){
    const fieldsArrays = [
        [
          { labelName: 'Cargo Ready Date', labelValue: 'FREIGHT ALL KINDS' },
          { labelName: 'Gate in Date', labelValue: 'FOB' },
          { labelName: 'Place of Receipt', labelValue: '0 KGS' },
          { labelName: 'Port of Loading', labelValue: '0 KGS' },
        ],[
        { labelName: 'Port of Discharge', labelValue: 'Rotterdam, NL, NLRTM' },
        { labelName: 'Final Destination', labelValue: 'Rotterdam, NL, NLRTM' },
        { labelName: 'Vessel Name', labelValue: '' },
        { labelName: 'Voyage Number', labelValue: '' },],[
            { labelName: 'ETD', labelValue: 'Sep 30, 2023' },
            { labelName: 'ETA', labelValue: 'Oct 31, 2023' },
            { labelName: 'Transit Time', labelValue: '40 Days' },
            { labelName: 'Document Cut Off', labelValue: '-' },]
      ];
   
    return(
        <>
       <Grid container>
      
       {fieldsArrays.map((fieldsArray, arrayIndex) => (
        <Grid container spacing={2} key={arrayIndex}>
          {fieldsArray.map((field, index) => (
            <Grid item xs={3} key={index}  sx={{mt:3,mb:2}}>
              <InputLabel>{field.labelName}</InputLabel>
              <Typography>{field.labelValue}</Typography>
            </Grid>
          ))}
        </Grid>
      ))}

    </Grid>
        </>
    );
  }