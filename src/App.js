import React, { Component } from "react"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SignIn from './SignIn'
import ApplicationViews from "./components/applicationViews"
import Navbar from "./components/navbar/navbar"

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Built with love by the '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {' team.'}
//     </Typography>
//   );
// }

// function Title() {
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Nutshell 2.0
//         </Typography>
//         <ApplicationViews />
//         <SignIn />
//         <MadeWithLove />
//       </Box>
//     </Container>
//   );
// }

class App extends Component {
  render() {
      return (
          <React.Fragment>
              <Navbar />
              <ApplicationViews />
          </React.Fragment>
      )
  }
}
export default App