import { Grid, Typography } from "@mui/material";
import { ShipmentDetails } from "./rateEngineDetailsComponents";
import RateEngineContainerDetail from "./ContainerDetails";

export default function DetailsComponentMain() {
  const styles = {
    gridContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    quotationDetails: {
      color: "#f96332",
    },
    activeSpan: {
      color: "green",
    },
    shipmentDetails: {
      color: "#3f51b5",
      mt: 2,
      mb: 2,
      fontSize: "17px",
    },
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={styles.quotationDetails}>
            Quotation Details
          </Typography>
        </Grid>
        <Grid item xs={6} style={styles.gridContainer}>
          <Typography sx={{fontSize:'14px'}}>
            <span style={styles.activeSpan}>Active:</span> Valid till Oct 14,
            2022
          </Typography>
        </Grid>
      </Grid>

      <Typography sx={styles.shipmentDetails}>Shipment Details</Typography>

      <Grid container>
        <Grid item xs={9}>
          <ShipmentDetails />
        </Grid>
        <Grid item xs={3}>
          <RateEngineContainerDetail />
        </Grid>
      </Grid>
    </div>
  );
}
