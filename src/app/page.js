// 'use client'

// import { useState } from "react";
// import Stack from '@mui/material/Stack';

// import Button from '@mui/material/Button';
// // import '@fortawesome/fontawesome-free/css/all.css';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

export default function Home(){
  return(
    <main>
      <h1>Hello</h1>
    </main>
  )
}
// export default function Home() {

//   return (
//     <main>
//       <div>
        
//         <h2>Find the best quotes</h2>
//         <Stack spacing={2} direction="row">
//           <Button variant="contained">FCL</Button>
//           <Button variant="text">LCL</Button>
  
//         </Stack>
//         {/* this is checkbox */}
//         <div className="row">
//           <div className="column">

            
//           </div>
//           <div className="column">


//           </div>

//         </div>
//       </div>

//       <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           '& > :not(style)': {
//             m: 4,
//             width: 120,
//             height: 128,
//           },
//         }}
//       >

//       </Box>
//       <div className="row">
//         <div className="column">
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={originlocation}
//             sx={{ width: 250 }}
//             renderInput={(params) => <TextField {...params} label="Origin" />}
//           />
//         </div>
//         <div className="column">
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={originlocation}
//             sx={{ width: 250 }}
//             renderInput={(params) => <TextField {...params} label="Destination" />}
//           />
//         </div>
//         <div className="column mt">
//           <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ borderRadius: '7px' }} />
//         </div>
//         <div className="column mt">
//           <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ borderRadius: '7px' }} />
//         </div>
//         <div className="column margin-button">
//           <Button variant="" sx={{ width: 200, height: 52, marginTop: 0.5, bgcolor: 'orange', borderRadius: '7px' }} >Find Quotes</Button>

//         </div>
//         <div className="column margin-button">
//           <Button variant="" sx={{ width: 130, height: 52, marginTop: 0.5, bgcolor: 'whitesmoke', borderRadius: '7px' }}>Reset</Button>

//         </div>

//       </div>

//       <div>



//       </div>
//       {/* <h1>Hello</h1>
//       <Useevent/>
//       <User name="Vaibhavi"></User> */}
//       <div style={{ textAlign: 'center' }}>


//         <Box
//           component="div"
//           sx={{
//             width: '100%',
//             height: '230px',
//             outline: '2px solid whitesmoke',
//           }}
//         >

//           <div class="row">
//             <div class="column">
//               <Box
//                 component="div"
//                 sx={{
//                   width: '100px',
//                   height: '150px',
//                   // outline: '2px solid whitesmoke',
//                   // marginTop: '70px',
//                   // marginLeft: '25px',
//                 }}
//               > <div class="logo">
//                 <img class="img-size" src="data:image/png;base64,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"></img>
//               </div>
//                 <div class="bg-color" sx={{marginLeft:'30px'}} >
//                   <div class="box">
//                     <p sx={{ textAlign: 'center' }}>0</p>
//                   </div>
//                 </div>
//               </Box>
//             </div>

//             <div class="column">
//               <Box
//                 component="div"
//                 sx={{
//                   width: '300px',
//                   height: '35px',
//                   // outline: '2px solid whitesmoke',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 Shanghai, CN, CNSHA
//                 <p class="para-color">Contact Number</p>
//                 <p>NCPW52955000</p>
//                 <p class="para">Vessel name</p>
//               </Box>

//             </div>
//             <div class="column">
//               <Box
//                 component="div"
//                 sx={{
//                   width: '200px',
//                   height: '35px',
//                   // outline: '2px solid whitesmoke',
//                   // fontWeight:'bold',
//                 }}
//               >-------
//                 {/* <i class="fa-solid fa-arrow-right"></i> */}
//                 <p class="para-color para-color-bold">Valid till</p>
//                 <p>Nov 30,2023</p>
//                 <p class="para para-color-bold">Voyage Number</p>
//               </Box>

//             </div>
//             <div class="column">
//               <Box
//                 component="div"
//                 sx={{
//                   width: '300px',
//                   height: '35px',
//                   // outline: '2px solid whitesmoke',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 Rotterdam, NL, NLRTM
//                 <div class="row">
//                   <div class="column">
//                     <p class="para-margin">Type</p>
//                     <p>FAK</p>
//                     {/* <p class="para" >20GPx0</p> */}

//                   </div>
//                   <div class="column">
//                     <p class="para-margin">Contract Owner</p>
//                     <p>Luina lines</p>
//                     {/* <p class="para" >$0GPx0</p> */}

//                   </div>
//                 </div>
//                 <div class="row row-margin">
//                   <div class="column">
//                     <p class="para">20GPx0</p>
//                   </div>
//                   <div class="column">
//                     <p class="para">40GPx0</p>
//                   </div>
//                   <div class="column">
//                     <p class="para">40HCx1</p>
//                   </div>

//                 </div>

//                 <div class="row row-margin" style={{ borderTop: '1px solid black', marginLeft: '20px' }}>
//                   <div class="column column-margin">
//                     <p class="para-color-bold">N/A</p>
//                   </div>
//                   <div class="column column-margin">
//                     <p class="para-color-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N/A</p>
//                   </div>
//                   <div class="column column-margin">
//                     <p class="para-color-bold">&nbsp;&nbsp;&nbsp;$1000</p>
//                   </div>

//                 </div>

//               </Box>

//             </div>
//             <div class="column">
//               <Box
//                 component="div"
//                 sx={{
//                   width: '300px',
//                   height: '35px',
//                   // outline: '2px solid whitesmoke',
//                 }}
//               >
//                 <p class=" " style={{ fontSize: '18px' ,color:'orange',marginTop:'30px',fontWeight:'bold'}}>$1000</p>
//                 <p style={{ fontSize: '18px' }} >$1000.00</p>
//                 <p class="para" >(incl local charge)</p>
//                 <Button variant="" sx={{ width: 130, height: 35, marginTop: 0.5, bgcolor: '#3085C3', borderRadius: '6px' }}>Proceed</Button>

//               </Box>

//             </div>
//           </div>

//         </Box>



//       </div>

//     </main>
//   )
// }



// const originlocation = [
//   { label: 'China' },
//   { label: 'US' },
//   { label: 'Shanghai' },
//   { label: 'Rotterdam' },
//   { label: 'China' },
//   { label: 'India' },
//   { label: 'Pakistan' },
//   { label: 'Hong kong' },
//   { label: 'China' },
//   { label: 'Canada' },
//   { label: 'China' },
//   { label: 'mexico' },
//   { label: 'brazil' },
//   { label: 'Russia' },
//   { label: 'North Korea' },
//   { label: 'South Korea' },
//   { label: 'Australia' },
//   { label: 'China' },
//   { label: 'Argentina' },
//   { label: 'peru' },
//   { label: 'chile' },

// ];
















// // const User=(yourName)=>{
// //   return(
// //     <div>
// //       <h2>My name is {yourName.name}</h2>
// //     </div>
// //   )
// // }

// // const Useevent=()=>{
// //   const color=(item)=>{
// //     alert(item);
// //   }

// //   const [name, setName]=useState("vaibhavi")
// //   const addName=()=>{
// //      setName("pranali");
// //   }
// //   return(
// //     <div>
// //     <h1>Hello my name is {name}</h1>
// //     <h1>Use Event</h1>
// //     <button onClick={()=>addName()}>Click Me</button>
// //     </div>
// //   )
// // }