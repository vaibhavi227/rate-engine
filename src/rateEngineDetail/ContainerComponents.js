import { Grid, InputLabel, Typography } from "@mui/material";

export function ContainerDetails(){
    return(
       <>
       <InputLabel>Container Size and Units</InputLabel>
       <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              20GPX1
            </InputLabel>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              20GPX1
            </InputLabel>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              20GPX1
            </InputLabel>
          </Grid>
        </Grid>
        <hr></hr>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: "12px" }}>$475</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: "12px" }}>N/A</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: "12px" }}>N/A</Typography>
          </Grid>
        </Grid>
        <hr></hr>
       </>
    );
}