import 'katex/dist/katex.min.css';

import Solver from "./Solver";
import About from "./About";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
        <Solver/>
        <Box component="span" m={1}/>
        <About/>
        <Box component="span" m={1}/>
        </>
  );
}

export default App;