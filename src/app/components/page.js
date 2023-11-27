"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { RateEngineDemurge } from "../components/DemurrageAndDetentionRateEngine/RateEngineDemurgeComponent";




import {
  Autocomplete,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  InputLabel,
  Box,
} from "@mui/material";

export function RateEngine() {
  return (
    <Container>
      <Paper elevation={1}>
        <Grid container display="flex" flexDirection="row">
          <Grid item xs={11}>
            <Typography
              sx={{ color: "#362FD9", fontWeight: "bold", p: "10px" }}
            >
              Find the best Quotes
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography sx={{ fontSize: "16px", m: "10px" }}>
              Filters
            </Typography>
          </Grid>
        </Grid>
        <RateEngineFilter></RateEngineFilter>
      </Paper>
    </Container>
  );
}
export function RateEngineFilter() {
  return (
    <Grid container spacing={2}>
      {/* First section with 10 columns */}
      <Grid container item xs={10} spacing={2}>
        <Grid item xs={3}>
          <Autocompletecomponentorigin></Autocompletecomponentorigin>
        </Grid>
        <Grid item xs={3}>
          <Autocompletecomponentorigin></Autocompletecomponentorigin>
        </Grid>
        <Grid item xs={3}>
          <Autocompletecomponentorigin></Autocompletecomponentorigin>
        </Grid>
        <Grid item xs={3}>
          <Autocompletecomponentorigin></Autocompletecomponentorigin>
        </Grid>
      </Grid>

      <Grid container item xs={2} spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF5B22", mt: "10px" }}
          >
            Find Quotes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
export function Autocompletecomponentorigin(props) {
  const location = [
    { label: "China" },
    { label: "US" },
    { label: "Shanghai" },
    { label: "Rotterdam" },
    { label: "China" },
    { label: "India" },
    { label: "Pakistan" },
    { label: "Hong kong" },
    { label: "China" },
    { label: "Canada" },
    { label: "China" },
    { label: "mexico" },
    { label: "brazil" },
    { label: "Russia" },
    { label: "North Korea" },
    { label: "South Korea" },
    { label: "Australia" },
    { label: "China" },
    { label: "Argentina" },
    { label: "peru" },
    { label: "chile" },
  ];
  return (
    <Autocomplete
      id="combo-box-demo"
      sx={{
        mb: "10px",
        ml: "10px",
        // border: "2px solid #B4B4B3",
        borderRadius: "5px",
      }}
      options={location}
      renderInput={(params) => <TextField {...params} label="Origin" />}
    ></Autocomplete>
  );
}

export function RateEngineChild() {
  return (
    <Container sx={{ mt: "20px" }}>
      <Paper elevation={1} sx={{ background: "#F3F3F3", height: "400px" }}>
        <Papercomponent></Papercomponent>
        <Papercomponent sx={{ mt: "50px" }}></Papercomponent>
      </Paper>
    </Container>
  );
}
export function Papercomponent() {
  return (
    <Paper sx={{ m: "10px" }}>
      <Grid container>
        <Grid container xs={2} spacing={1} sx={{ textAlign: "center" }}>
          <FirstGrid></FirstGrid>
        </Grid>
        <Grid xs={8} spacing={1}>
          <DetailsGrid></DetailsGrid>
        </Grid>
        <Grid xs={2} spacing={1}>
          <FinalGrid></FinalGrid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export function FirstGrid() {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            borderRadius: "0 0 6px 6px",
            height: "22px",
            width: "40px",
            textTransform: "lowercase",
            mt: "8px",
          }}
        >
          Online
        </Button>
      </Grid>
      <Grid item xs={12}>
        <img
          src="https://api.asm.skype.com/v1/objects/0-sa-d2-d62a96614e57c374638da4d911551561/views/imgpsh_fullsize_anim"
          height={120}
          width={150}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DBDFEA",
            borderRadius: "8px",
            height: "30px",
            width: "60px",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          cy-cy
        </Button>
      </Grid>
    </Grid>
  );
}

export function DetailsGrid() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} sx={{ mt: "21px" }}>
        <InputLabel
          htmlFor="my-input"
          sx={{ fontSize: "14px", fontWeight: "bold" }}
        >
          ETD: 19/11
        </InputLabel>
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          Port 1,INPNQ, India
        </Typography>
        <InputLabel sx={{ fontSize: "12px", mt: "5px" }} htmlFor="my-input">
          Contract number
        </InputLabel>
        <Typography sx={{ fontSize: "12px" }}>12312312312</Typography>
        <InputLabel sx={{ fontSize: "12px", mt: "5px" }} htmlFor="my-input">
          Vessel Name
        </InputLabel>
        <Typography sx={{ fontSize: "12px" }}>CMA CMG ZHENG HE</Typography>{" "}
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            borderRadius: "0 0 6px 6px",
            height: "22px",
            width: "40px",
            textTransform: "lowercase",
            backgroundColor: "#FF5B22",
          }}
        >
          Direct
        </Button>

        <InputLabel sx={{ fontSize: "12px" }}>32 days</InputLabel>
        <Typography>
          <svg
            fill="none"
            width="77"
            height="16"
            viewBox="0 0 77 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m76.707 8.7071c0.3905-0.39052 0.3905-1.0237 0-1.4142l-6.364-6.364c-0.3905-0.39052-1.0236-0.39052-1.4142 0-0.3905 0.39052-0.3905 1.0237 0 1.4142l5.6569 5.6569-5.6569 5.6569c-0.3905 0.3905-0.3905 1.0236 0 1.4142 0.3906 0.3905 1.0237 0.3905 1.4142 0l6.364-6.364zm-76.707 0.29289 76 1e-5v-2l-76-1e-5 -1.7485e-7 2z"
              fill="#A4A6B3"
            ></path>
          </svg>
        </Typography>
        <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
          Service
        </InputLabel>
        <Typography sx={{ fontSize: "12px" }}>CEM</Typography>
        <InputLabel sx={{ fontSize: "12px", pt: "5px" }} htmlFor="my-input">
          Voyage Number
        </InputLabel>
        <Typography sx={{ fontSize: "12px" }}>435W</Typography>
      </Grid>
      <Grid item xs={4} sx={{ mt: "21px" }}>
        <InputLabel sx={{ fontSize: "14px", fontWeight: "bold" }}>
          ETA: 21/12
        </InputLabel>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "bold" }}
          htmlFor="my-input"
        >
          PortLand, USPDX, USA
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              Type
            </InputLabel>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              Contract owner
            </InputLabel>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: "12px" }}>Online</Typography>
          </Grid>
        </Grid>

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
      </Grid>
    </Grid>
  );
}

export function FinalGrid() {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <Grid item sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E0F4FF",
            borderRadius: "8px",
            height: "10px",
            textTransform: "lowercase",
            color: "black",
            fontSize: "10px",
            textAlign: "center",
            mb: '10px',
          }}
        >
          Best Value
        </Button>
        <Typography sx={{ color: "#00A9FF", p: "5px" }}>
          Valid till: 21 Nov 2021
        </Typography>
        <InputLabel sx={{ color: "#FF5B22", fontWeight: "bold" }}>
          $23,032
        </InputLabel>
        <InputLabel sx={{ color: "#7D7C7C", fontWeight: "bold" }}>
          $436.00
        </InputLabel>
        <Typography
          sx={{
            color: "#7D7C7C",
            fontSize: "12px",
            mt: "5px",
          }}
        >
          (incl local charges)
        </Typography>
        <Button src="">
          Proceed
        </Button>
        
      </Grid>
    </Grid>
  );
}



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{fontSize:"12px"}} label="Charges" {...a11yProps(0)} />
            <Tab sx={{fontSize:"12px"}} label="Demurrage and Detention" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>

          <Box sx={{ width: "100%" ,fontSize:"12px"}}>
              <CustomTabPanel value={value} index={0}>
              {chargesData.map((data, index) => (
                <RateEngineCharges
                  key={index}
                  chargesTitle={data.title}
                  actionText={data.actionText}
                  icon={data.icon}
                />
              ))}
            </CustomTabPanel>
            {/* ... (other code) */}
          </Box>
        </CustomTabPanel>
        
        <CustomTabPanel value={value} index={1}>
          <RateEngineDemurge></RateEngineDemurge>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

const chargesData = [
  { title: "Ocean freight Charges" },
  {
    title: "Origin Mandatory Charges",
    actionText: "Action",
    icon: <AddCircleIcon />,
  },
  {
    title: "Destination Mandatory Charges",
    actionText: "Action",
    icon: <AddCircleIcon />,
  },
  {
    title: "Origin Optional Charges",
    actionText: "Action",
    icon: <AddCircleIcon />,
  },
];

export function RateEngineCharges(props) {
  const { actionText, icon, chargesTitle } = props;

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#D8D9DA", p: "5px", mt: "10px" }}
      >
        <Grid item xs={6}>
          {chargesTitle}
        </Grid>
        <Grid item xs={2}>
          Charge Code
        </Grid>
        <Grid item xs={2}>
          Currency
        </Grid>
        <Grid item xs={1}>
          Tarriff
        </Grid>
        <Grid item xs={1}>
          {actionText}
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2} sx={{ backgroundColor: "#D8D9DA", p: "5px" }}>
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          40HG
        </Grid>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          {icon &&
            React.cloneElement(icon, {
              sx: { color: "#2B3499", fontSize: "40px" },
            })}
        </Grid>
      </Grid>
    </div>
  );
}   

