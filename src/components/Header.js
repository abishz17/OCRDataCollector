// import * as React from "react";
// import AppBar from "@mui/material/AppBar";

// import Toolbar from "@mui/material/Toolbar";

// import Typography from "@mui/material/Typography";

// import Container from "@mui/material/Container";
// import { Link } from "react-router-dom";

// function ResponsiveAppBar() {
//   return (
//     <AppBar style={{ background: "#022C43" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Link to="/">
//             <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//               Home
//             </Typography>
//           </Link>
//           <Link to="/ocr">
//             <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//               OCR
//             </Typography>
//           </Link>

//           <Link to="/collect">
//             <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//               DataCollector
//             </Typography>
//           </Link>
//           <Typography
//             variant="h7"
//             component="div"
//             sx={{ flexGrow: 1 }}
//             align="right"
//           >
//             About US
//           </Typography>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="navdiv">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ocr">OCR</Link>
          </li>
          <li>
            <Link to="/collect">Dataset</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
