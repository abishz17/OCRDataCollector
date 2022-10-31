// import React, { Component, useState } from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { Button, TextareaAutosize, TextField } from "@mui/material";
// import axios from "axios";

// class Body extends Component {
//   state = {
//     images: [],
//   };

//   componentDidMount() {
//     axios.get("api/").then((res) => {
//       const images =
//         res.data[Math.floor(Math.random() * res.data.length)].image;
//       this.setState({ images });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Box
//           sx={{ height: "5vh", border: "1px dashed red" }}
//           mt={2}
//           textAlign="center"
//         >
//           <span>OCR |</span>
//           <span>Validate</span>
//         </Box>
//         <Box
//           sx={{ bgcolor: "#cfe8fc", height: "70vh", width: "80vw" }}
//           m="auto"
//           mt={2}
//           display="grid"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Box
//             sx={{ bgcolor: "#ffffff", height: "20vh", width: "60vw" }}
//             borderRadius={5}
//             mt={4}
//           >
//             {/* <img src={this.state.images} /> */}
//           </Box>

//           <TextField
//             id="outlined-basic"
//             label="Output"
//             variant="outlined"
//             placeholder="Type Here..."
//             multiline={true}
//             maxRows={5}
//           />

//           <Box textAlign="center">
//             <Button variant="contained">Submit</Button>
//           </Box>
//         </Box>
//       </div>
//     );
//   }
// }

// export default Body;
