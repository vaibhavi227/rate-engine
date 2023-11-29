import {
    FormControl,
    Grid,
    Input,
    InputLabel,
    Typography,
  } from "@mui/material";
export function ShipmentDetails() {
  return (
    <div>
      <FormFieldDetails></FormFieldDetails>
    </div>
  );
}

export function FormField({ labelName, labelValue }) {
  return (
    <Grid item xs={4}>
    <div>
      <InputLabel htmlFor="my-input">{labelName}</InputLabel>
      <Typography>{labelValue}</Typography>
    </div>
  </Grid>
  );
}

export function FormFieldDetails() {
  const fieldsArray = [
    { labelName: 'Origin', labelValue: 'Shanghai, CN, CNSHA' },
    { labelName: 'Destination', labelValue: 'Rotterdam, NL, NLRTM' },
    { labelName: 'Freight Type', labelValue: 'FCL' },
  ];

  return (
    <div>
      <Grid container>
      {fieldsArray.map((field, index) => (
        <FormField key={index} labelName={field.labelName} labelValue={field.labelValue} />
      ))}
    </Grid>
    </div>
  );
}

