"use client";
import { Container ,Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function FormComponent() {
  return (
    <Container>
      <FormHeading heading1={"Ocean Freight margin"}></FormHeading>
      <RateEngineFormField></RateEngineFormField>
      <hr></hr>
      <FormHeading heading1={"Surcharges"} heading2={"ManiFest Adjustment"}></FormHeading>
      <RateEngineFormSurcharges></RateEngineFormSurcharges>
      <hr></hr>
      {/* <DetailsAutocompleteComponent></DetailsAutocompleteComponent> */}
    </Container>
  );
}
export function FormHeading({ heading1,heading2 }) {
  return (
    <Grid container>
      <Grid xs={4}>
        <h3>{heading1}</h3>
      </Grid>
      <Grid xs={4}>
        <h3>{heading2}</h3>
      </Grid>
    </Grid>
  );
}
const labels = ["$", "20", "40", "40HC"];

export function RateEngineFormField() {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{mb:2}}>
      {labels.map((label, index) => (
        <TextField
          key={index}
          id={`text-field-${index}`}
          label={label}
          variant="outlined"
          disabled={index < 3}
          defaultValue={index === 1 || index === 2 ? 0 : undefined}
          sx={{
            width: index === 0 ? "6ch" : "20ch",
            ml: 1,
          }}
        />
      ))}
    </Box>
  );
}

const Surchargeslabels = ["$", "Local surcharges","Manifest Adjustment"];
export function RateEngineFormSurcharges(){
  return(
<Grid container>
  <Grid xs={7}>
<Box component="form" noValidate autoComplete="off" sx={{mb:2}}>
      {Surchargeslabels.map((Surchargeslabels, index) => (
        <TextField
          key={index}
          id={`text-field-${index}`}
          label={Surchargeslabels}
          variant="outlined"
          disabled={index < 1}
          defaultValue={index === 1? 0 : undefined}   // || index === 2 
          sx={{
            width: index === 0 ? "6ch" : "20ch",
            ml: index===2?"10ch":"1ch",
          }}
        />
      ))}
    </Box>  
    </Grid>
    <Grid xs={5}>
      <Typography textAlign={"right"} sx={{fontWeight:"bold",mt:4}}>Total amount $800.00</Typography>
    </Grid>
    </Grid>
    );
}



// export function DetailsAutocompleteComponent(){
//   const {labelName} = props;
//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={CompanyTypes}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label={labelName} />}
//     />
//   );
// }

// const CompanyTypes = [
//   "test","kuulie"
// ];