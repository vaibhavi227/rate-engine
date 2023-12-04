"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { RateEngineDemurge } from "@/DemurrageAndDetentionRateEngine/RateEngineDemurgeComponent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
      <Paper elevation={0}>
        <Grid
          container
          display="flex"
          flexDirection="row"
          mx={5}
          sx={{ mb: 1 }} 
        >
          <Grid item xs={10}>
            <Typography sx={{ color: "#362FD9", fontWeight: "bold" }}>
              Find the best Quotes
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="" color="primary" sx={{ textTransform: "none" }}>
              Filters<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
          </Grid>
        </Grid>
        <Box mx={5}>
          <RateEngineFilter></RateEngineFilter>
        </Box>
      </Paper>
    </Container>
  );
}
export function RateEngineFilter() {
  const autocompleteData = [
    { labelName: "Origin", options: ["Rotterdam", "Shanghai"] },
    { labelName: "Destination", options: ["Rotterdam", "Shanghai"] },
    { labelName: "Load", options: ["20STDX1,40STDX1"] },
    { labelName: "Shipment", options: ["pharma,2000kg"] },
  ];
  return (
    <Grid container spacing={2}>
      <Grid container item xs={10} spacing={2}>
        {autocompleteData.map((data, index) => (
          <Grid item xs={3} key={index}>
            <Autocompletecomponentorigin
              labelName={data.labelName}
              options={data.options}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container item xs={2} spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF5B22",
              mt: "10px",
              textTransform: "none",
            }}
          >
            Find Quotes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function Autocompletecomponentorigin(props) {
  const { labelName, options } = props;

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{
        width: 220,
        marginBottom: "10px",
        "& fieldset": {
          borderWidth: "2px",
          borderRadius:"7px",
        },
        "&:hover fieldset": {
          borderColor: "grey !important",
        },
      }}
      renderInput={(params) => <TextField {...params} label={labelName} />}
    />
  );
}

export function RateEngineChild() {
  return (
    <Container>
      <Papercomponent></Papercomponent>
    </Container>
  );
}
const data = [
  {
    service: "CEM",
    directButtonText: "Direct",
    directButtonColor: "#FF5B22",
    voyageNumber: "435W",
    contractType: "",
    contractOwner: "online",
  },
  {
    service: "NE 3",
    directButtonText: "Contacts",
    directButtonColor: "#667dff",
    voyageNumber: "-",
    contractType: "FAK",
    contractOwner: "Samule paul",
  },
];
const buttonData = [
  { onlineButton: "Online", onlineButtonColor: "#2ab930" },
  { onlineButton: "Contract", onlineButtonColor: "#e4505c" },
];

export function Papercomponent() {
  return (
    <div>
      {data.map((item, index) => (
        <PaperComponent
          key={index}
          data={item}
          buttonData={buttonData[index]}
          
        />
      ))}
    </div>
  );
}
export function PaperComponent({ data, buttonData }) {
  return (
    <Paper sx={{ m: "10px" }} variant="outlined">
      <Grid container>
        <Grid container xs={2} spacing={1} sx={{ textAlign: "center" }}>
          <FirstGrid
            onlineButton={buttonData.onlineButton}
            onlineButtonColor={buttonData.onlineButtonColor}
          ></FirstGrid>
        </Grid>
        <Grid item xs={8} spacing={1}>
          <DetailsGrid
            service={data.service}
            directButtonText={data.directButtonText}
            directButtonColor={data.directButtonColor}
            voyageNumber={data.voyageNumber}
            contractType={data.contractType}
            contractOwner={data.contractOwner}
          />
        </Grid>
        <Grid xs={2} spacing={1}>
          <FinalGrid></FinalGrid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export function FirstGrid({ onlineButton, onlineButtonColor }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: onlineButtonColor,
            borderRadius: "0 0 6px 6px",
            height: "22px",
            width: "40px",
            textTransform: "none",
            mt: "8px",
          }}
        >
          {onlineButton}
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
            backgroundColor: "#dadada",
            borderRadius: "8px",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
            p: 1,
          }}
        >
          CY-CY
        </Button>
      </Grid>
    </Grid>
  );
}

const typographyStyles = {
  fontSize: "12px",
};

export function DetailsGrid({
  service,
  directButtonText,
  directButtonColor,
  voyageNumber,
  contractType,
  contractOwner,
}) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3} sx={{ mt: 4 }}>
        <InputLabel
          htmlFor="my-input"
          sx={{ fontSize: "14px", fontWeight: "bold" }}
        >
          ETD: 19/11
        </InputLabel>
        <Typography sx={{ ...typographyStyles, fontWeight: "bold" }}>
          Port 1, INPNQ, India
        </Typography>
        <InputLabel sx={{ ...typographyStyles, mt: "5px" }} htmlFor="my-input">
          Contract number
        </InputLabel>
        <Typography sx={typographyStyles}>12312312312</Typography>
        <InputLabel sx={{ ...typographyStyles, mt: "5px" }} htmlFor="my-input">
          Vessel Name
        </InputLabel>
        <Typography sx={typographyStyles}>CMA CMG ZHENG HE</Typography>
      </Grid>

      <Grid item xs={5} sx={{textAlign:'center'}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: directButtonColor,
            borderRadius: "0 0 6px 6px",
            height: "22px",
            width: "40px",
            textTransform: "none",
          }}
        >
          {directButtonText}
        </Button>

        <InputLabel sx={{ ...typographyStyles, mt: 1, }}>32 days</InputLabel>

        <Typography>
          <svg
            fill="none"
            width="192"
            height="16"
            viewBox="0 0 192 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M191.707 8.70709C192.098 8.31657 192.098 7.6834 191.707 7.29288L185.343 0.928916C184.953 0.538392 184.319 0.538392 183.929 0.928916C183.538 1.31944 183.538 1.95261 183.929 2.34313L189.586 7.99998L183.929 13.6568C183.538 14.0474 183.538 14.6805 183.929 15.0711C184.319 15.4616 184.953 15.4616 185.343 15.0711L191.707 8.70709ZM8.74228e-08 9L191 8.99998L191 6.99998L-8.74228e-08 7L8.74228e-08 9Z"
              fill="#A4A6B3"
            ></path>
          </svg>
        </Typography>
        <Grid container>
          <Grid xs={4}>

          </Grid>
          <Grid xs={8}>
          <Box textAlign={"left"}>
        <InputLabel sx={typographyStyles} htmlFor="my-input">
          Service
        </InputLabel>
        <Typography sx={typographyStyles}>{service}</Typography>
        <InputLabel sx={{ ...typographyStyles, pt: "5px" }} htmlFor="my-input">
          Voyage Number
        </InputLabel>
        <Typography sx={typographyStyles}>{voyageNumber}</Typography>
        </Box>
          </Grid>
        </Grid>
       
      </Grid>

      <Grid item xs={4} sx={{ mt: 4 }}>
        <InputLabel sx={{ fontSize: "14px", fontWeight: "bold" }}>
          ETA: 21/12
        </InputLabel>
        <Typography sx={{ ...typographyStyles, fontWeight: "bold" }}>
          PortLand, USPDX, USA
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              Type
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <InputLabel sx={{ fontSize: "12px" }} htmlFor="my-input">
              Contract owner
            </InputLabel>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: "12px" }}>{contractType}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontSize: "12px" }}>{contractOwner}</Typography>
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
      <Grid item sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e1edfc",
            borderRadius: "8px",
            height: "10px",
            textTransform: "none",
            color: "black",
            fontSize: "10px",
            textAlign: "center",
            mb: "10px",
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
            mb: 2,
          }}
        >
          (incl local charges)
        </Typography>
        <Button
          href="/rate-engine-details"
          variant="contained"
          sx={{
            backgroundColor: "#3f51b5",
            color: "white",
            px: 4,
            textTransform: "none",
          }}
        >
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
            <Tab sx={{ fontSize: "12px" }} label="Charges" {...a11yProps(0)} />
            <Tab
              sx={{ fontSize: "12px" }}
              label="Demurrage and Detention"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ width: "100%", fontSize: "12px" }}>
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
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <RateEngineDemurge></RateEngineDemurge>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

// export function CustomTabPanelNew() {
//   return (
//     <>
//       <CustomTabPanel value={value} index={0}>
//         <Box sx={{ width: "100%", fontSize: "12px" }}>
//           <CustomTabPanel value={value} index={0}>
//             {chargesData.map((data, index) => (
//               <RateEngineCharges
//                 key={index}
//                 chargesTitle={data.title}
//                 actionText={data.actionText}
//                 icon={data.icon}
//               />
//             ))}
//           </CustomTabPanel>
//         </Box>
//       </CustomTabPanel>

//       <CustomTabPanel value={value} index={1}>
//         <RateEngineDemurge></RateEngineDemurge>
//       </CustomTabPanel>
//     </>
//   );
// }
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
        sx={{
          backgroundColor: "#eff5fa",
          mt: 3,
          "& .borderBottom": {
            borderBottom: "1px solid #e0e0e0",
          },
        }}
      >
        <Grid item xs={6} className="borderBottom">
          {chargesTitle}
        </Grid>
        <Grid item xs={2} className="borderBottom">
          Charge Code
        </Grid>
        <Grid item xs={2} className="borderBottom">
          Currency
        </Grid>
        <Grid item xs={1} className="borderBottom">
          Tarriff
        </Grid>
        <Grid item xs={1} className="borderBottom">
          {actionText}
        </Grid>

        <Grid item xs={10} className="borderBottom"></Grid>
        <Grid item xs={2}>
          40HG
        </Grid>
        <Grid item xs={11} className="borderBottom"></Grid>
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
