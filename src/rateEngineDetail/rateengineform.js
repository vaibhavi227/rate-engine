"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { Container ,Grid, InputLabel, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import DetailsComponentMain from '@/rateEngineDetail/rateEngineDetails'
import RateEngineFormAndLogo, { FormFieldDetailSellingSchedule } from './FormFieldDetail';
export default function FormComponent() {
  return (
    <Container sx={{backgroundColor:"white"}}>

      <DetailsComponentMain></DetailsComponentMain>
      <RateEngineFormAndLogo></RateEngineFormAndLogo>
       <hr></hr>
       <FormFieldDetailSellingSchedule></FormFieldDetailSellingSchedule>
       <hr></hr>

      <FormHeading heading1={"Ocean Freight margin"}></FormHeading>
      <RateEngineFormField></RateEngineFormField>
      <hr></hr>
      <FormHeading heading1={"Surcharges"} heading2={"ManiFest Adjustment"}></FormHeading>
      <RateEngineFormSurcharges></RateEngineFormSurcharges>
      <hr></hr>
      <FormHeading heading1={"Details"}></FormHeading>
      <ParentDetails></ParentDetails>
      <InputLabel sx={{ color: "black"}}>
         Remark if any
        </InputLabel>
      <EmptyTextarea></EmptyTextarea>
      <CheckboxExample></CheckboxExample>
     <MyButtonComponent></MyButtonComponent>
    </Container>
  );
}
export function FormHeading({ heading1,heading2 }) {
  const headingStyle = {
    color: "#3f51b5", // Set your desired color here
  };
  return (
    <Grid container>
      <Grid xs={4}>
        <h3 style={headingStyle}>{heading1}</h3>
      </Grid>
      <Grid xs={4}>
        <h3 style={headingStyle}>{heading2}</h3>
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
export function ParentDetails(){
  return(
    <Grid container>
    <Grid item xs={8}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ParentComponent />
        </Grid>
        <Grid item xs={12}>
        <ParentCustomerTextField></ParentCustomerTextField>
        </Grid>

      </Grid>
    </Grid>
    <Grid item xs={4}>
      <ParentTextField></ParentTextField>
    </Grid>
    
  </Grid>
  );
}

const DetailsAutocompleteComponent = (props) => {
  const { labelName, companyDetails } = props;

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={companyDetails}
      sx={{ width: 300 ,ml:1}}
      
      renderInput={(params) => <TextField {...params} label={labelName} />}
    />
  );
};


export const ParentComponent = () => {
  const configurations = [
    { labelName: "Company Type", companyDetails: ["it services", "finance", "test", "kuulie"] },
    { labelName: "Contact Name", companyDetails: ["Person1", "Person2", "Person3"] },
  
  ];
return (
  <Grid container spacing={2}>
  {configurations.map((config, index) => (
    <Grid item key={index} xs={6}>
      <DetailsAutocompleteComponent
        labelName={config.labelName}
        companyDetails={config.companyDetails}
      />
    </Grid>
    
  ))}
  </Grid>
  );
};
 const CustomerDetailsTextField = (props) => {
  const { labelName ,width} = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: width||300 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={labelName} variant="outlined" />
    </Box>
  );
};


const ParentCustomerTextField = () => {
  const labelNames = ["Contact Number", "Email", "Country", "City"];

  return (
    <Grid container spacing={2}>
      {labelNames.map((labelName, index) => (
        <Grid item key={index} xs={6}>
          <CustomerDetailsTextField labelName={labelName} />
        </Grid>
      ))}
    </Grid>
  );
};

const ParentTextField = () => {
  const labelNames = ["Tier", "Tier Field"];

  return (
    <Grid container spacing={2}>
      {labelNames.map((labelName, index) => (
        <Grid item key={index} xs={6}>
          <CustomerDetailsTextField labelName={labelName}  width="150px"/>
        </Grid>
      ))}
    </Grid>
  );
};

export function EmptyTextarea() {
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 1100px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[0] : '0'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

   

    &:focus {
      outline: 0;
      border-color: ${grey[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return <Textarea aria-label="empty textarea" placeholder="Empty" />;
}
const CheckboxExample = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label="I agree with terms and condition"
    />
  );
};

export function ButtonDetails({buttonName, isGrey, isDisabled }) {
  return (
    <Button variant="contained" sx={{
      backgroundColor: isGrey ? "#d5d5d5" : "blue",
      color: isGrey ? "orange" : "white",
        }}
    disabled={isDisabled}>
      {buttonName}
    </Button>
  );
}

export function ButtonList({ buttonNames }) {
  return (
    <Grid container justifyContent="flex-end" spacing={2}>
    {buttonNames.map((buttonName, index) => (
      <Grid item key={index}>
        <ButtonDetails
          buttonName={buttonName}
          isGrey={index === 0} // First button is grey
          isDisabled={index === 1} // Second button is disabled
        />
      </Grid>
    ))}
  </Grid>
  );
}

// Usage in MyComponent
export function MyButtonComponent() {
  const buttonNames = ["CANCEL", "SHARE"];

  return (
    <div>
      <ButtonList buttonNames={buttonNames} />
    </div>
  );
};





