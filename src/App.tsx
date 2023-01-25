import Solver from "./Solver";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
    return(
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="" >
                    Fibonacci Fill In The Blanks Solver
                </Typography>
            </Toolbar>
        </AppBar>

        <Box component="span" m={1}/>
        <About/>
        <Box component="span" m={1}/>
        <Solver/>
        <Box component="span" m={1}/>
        </>
  );
}

function About() {
    return(
        <>
            <Container maxWidth="sm">
                <Box component="span" m={1}/>
                <Typography variant="h4" gutterBottom>Fibonacci Sequence</Typography>
                <Typography variant="body1" gutterBottom>
                </Typography>
            </Container>
        </>
    )
}

export default App;