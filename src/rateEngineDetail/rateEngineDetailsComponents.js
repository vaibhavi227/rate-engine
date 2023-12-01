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

const labelStyle = {
  fontSize: "14px", 
};

const valueStyle = {
  fontSize: "12px", 
};
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
          <Grid item xs={4} key={index}>
            <InputLabel sx={labelStyle}>{field.labelName}</InputLabel>
            <Typography sx={valueStyle}>{field.labelValue}</Typography>
          </Grid>
        ))}
      </Grid>

    </div>
  );
}

