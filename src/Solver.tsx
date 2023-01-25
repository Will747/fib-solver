import { Grid, Paper, TextField, Typography, Box } from "@mui/material";
import Container from "@mui/system/Container";
import { useState } from "react";

export default function Solver() {
    const [startState, setStartState] = useState<string>('7');
    const [numOfBlanks, setNumOfBlanks] = useState<string>('3');
    const [endState, setEndState] = useState<string>('17');

    const getBlankSolution = () => {
        const sequence = [];
        for (let i = 0; i < parseInt(numOfBlanks); i++) {
            sequence.push('_, ')
        }

        return sequence;
    }

    const sqrtFive = Math.sqrt(5);

    const simpleFib = (n : number) => {
        const PHI = (1 + sqrtFive) / 2;
        return Math.round((Math.pow(PHI, n) - Math.pow((1 - PHI), n)) / sqrtFive);
    }

    const complexFib = (n0 : number, n : number) => {
        // https://math.stackexchange.com/a/2301162
        var numerator = ((2 * n0) + (n0 * (1 + sqrtFive))) * Math.pow((1 + sqrtFive), n - 1);
        numerator -= ((2 * n0) + n0 * (1 - sqrtFive)) * Math.pow(1 - sqrtFive, n - 1);

        return Math.round(numerator / (Math.pow(2, n) * sqrtFive));
    }

    const getSolution = () => {
        const start = parseInt(startState);
        const end = parseInt(endState);
        const numOfBlanksInt = parseInt(numOfBlanks);

        // a = The first blank value
        const a = (end - complexFib(start, numOfBlanksInt - 1)) / simpleFib(numOfBlanksInt + 1);

        const sequence: number[] = [start, a];
        for (let i = 0; i < numOfBlanksInt - 1; i++) {
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
        }

        return sequence;
    }

    return (
        <Container maxWidth="sm">
            <Paper className="equation-paper" elevation={5} >
                <Box sx={{ p: 2}}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField label="Start value" variant="outlined" value={startState}
                                onChange={e => setStartState(e.target.value)} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label="Num of blanks" variant="outlined" value={numOfBlanks}
                                onChange={e => setNumOfBlanks(e.target.value)} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label="Final value" variant="outlined" value={endState}
                                onChange={e => setEndState(e.target.value)} />
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="h6">
                                Problem:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {startState + ', '}
                                {getBlankSolution()}
                                {endState}
                            </Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="h6">
                                Solution:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {getSolution().map(e => e + ', ')}
                                {endState}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    )
}