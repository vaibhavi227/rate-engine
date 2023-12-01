import { Grid, InputLabel, Typography } from "@mui/material";

const labelStyle = {
  fontSize: '12px',
};

const valueStyle = {
  fontSize: '12px',
};

export function ContainerDetails() {
  return (
    <>
      <InputLabel sx={{ fontSize: '14px' }}>Container Size and Units</InputLabel>
      <Grid container spacing={2}>
        {[1, 2, 3].map((index) => (
          <Grid item xs={4} key={index}>
            <InputLabel sx={labelStyle} htmlFor={`my-input-${index}`}>
              20GPX{index}
            </InputLabel>
          </Grid>
        ))}
      </Grid>
      <hr/>
      <Grid container spacing={2}>
        {['$475', 'N/A', 'N/A'].map((value, index) => (
          <Grid item xs={4} key={index}>
            <Typography sx={valueStyle}>{value}</Typography>
          </Grid>
        ))}
      </Grid>
      <hr />
    </>
  );
}