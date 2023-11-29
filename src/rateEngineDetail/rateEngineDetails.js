import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { ShipmentDetails } from "./rateEngineDetailsComponents";
import RateEngineContainerDetail from "./ContainerDetails";
export default function DetailsComponentMain() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{ color: "#f96332" }}>
            Quotation Details
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Typography>Active: Valid till Oct 14, 2022</Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ color: "#3f51b5", mt: 2}}>
        Shipment Details
      </Typography>
      <Grid container >
        <Grid item xs={9}>
        <ShipmentDetails></ShipmentDetails>
        </Grid>
        <Grid item xs={3}>
        <RateEngineContainerDetail></RateEngineContainerDetail>
        </Grid>
      
      </Grid>
      
    </div>
  );
}


