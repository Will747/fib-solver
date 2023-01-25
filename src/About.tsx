import { Paper, Table, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { InlineMath, BlockMath } from "react-katex";

export default function About() {
    return (
        <>
            <Container maxWidth="md">
                <Box component="span" m={1} />
                <Typography variant="body1" gutterBottom>
                    This site can be used to solve Fibonacci problems where an initial number and
                    final number is provided but there are many blank terms between the two. E.g. <InlineMath math='5' />, _, _, <InlineMath math='9' />.
                    The Fibonacci sequence works by adding the previous two numbers in the sequence.
                </Typography>
                <BlockMath math='f_n = f_{n-1} + f_{n-2}' />
                <Typography variant="body1" gutterBottom>
                    To solve this problem the first blank term must have a value that means the provided end term
                    makes sense. As with an initial two values all other terms in the sequence can be derived. This
                    first blank term can be solved with a simultaneous equation. For example:
                </Typography>
                <BlockMath math='5, a, b, 9' />
                <BlockMath math='9 = a + b' />
                <BlockMath math='b = 5 + a' />
                <BlockMath math='9 = 2a + 5' />
                <BlockMath math='a = 2,  b = 7' />
                <Typography variant="body1" gutterBottom>
                    This can be solved easily when there are only a few blank spaces but when there is a large number of
                    missing terms it can become quite a long process to find the value of <InlineMath math='a' />. As the number
                    of missing terms increases so does the number of ‘<InlineMath math='a' />’s in the final equation (<InlineMath math='9 = 2\pmb{a} + 5' />):
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableRow>
                            <TableCell><b>Number of missing terms</b></TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>6</TableCell>
                            <TableCell>7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Number of ‘<InlineMath math='a' />’s</b></TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>13</TableCell>
                            <TableCell>21</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
                <Typography variant="body1" mt={2} gutterBottom>
                    The number of ‘<InlineMath math='a' />’s increases based on the Fibonacci sequence. So, the number of
                    ‘<InlineMath math='a' />’s in the final equation can be found by finding the term in the Fibonacci sequence
                    that is one higher than the number of missing terms. If there are 2 missing terms, then the 3rd term in the
                    normal Fibonacci sequence would be the number of ‘<InlineMath math='a' />’s.
                </Typography>
                <Typography variant="body1" mt={2} gutterBottom>
                    A similar approach can be taken to finding the number on the right side of the equation (<InlineMath math='9 = 2a + \pmb{5}' />) only instead of using
                    the normal Fibonacci sequence, the first two values should be the initial provided value of the sequence being
                    solved. E.g. <InlineMath math='5, 5, 10, 15, 25' />. If there are 2 missing terms in the sequence then the 1st term would be the
                    additional number on the right side of the equation.
                </Typography>
                <BlockMath math='\phi = \frac{1 + \sqrt{5}}{2}' />
                <Typography variant="body1" mt={2}>
                    'Fib' finds the nth term in the normal Fibonacci sequence:
                </Typography>
                <BlockMath math='Fib(n) = \frac{\phi^n - (1 - \phi)^n}{\sqrt{5}}' />
                
                <Typography variant="body1" mt={2}>
                    'Fib2' contains an additional two parameters which are the initial two values in the sequence:
                </Typography>
                <BlockMath math='Fib2(n_0, n_1, n) = \frac{(2n_0 + n_1(1 + \sqrt{5}))(1 + \sqrt{5})^{n-1} - (2n_0 + n_1(1 - \sqrt{5}))(1 - \sqrt{5})^{n-1}}{2^n\sqrt{5}}' />
                <BlockMath math='a = \frac{y - Fib2(x, x, z - 1)}{Fib(z + 1)}' />
                <Typography variant="body1" mt={2}>
                    Where <InlineMath math='a'/> is the first blank term, <InlineMath math='x'/> is the first provided term, <InlineMath math='y'/> is the last provided term, <InlineMath math='z'/> is the number of missing terms.
                </Typography>
                <Typography variant="caption">
                    <p><a href="https://www.mathsisfun.com/numbers/fibonacci-sequence.html">https://www.mathsisfun.com/numbers/fibonacci-sequence.html</a></p>
                </Typography>
                <Typography variant="caption">
                    Jaume Oliver Lafont (<a href="https://math.stackexchange.com/users/134791/jaume-oliver-lafont">https://math.stackexchange.com/users/134791/jaume-oliver-lafont</a>), Fibonacci sequence starting with any pair of
                    numbers, URL (version: 2017-05-29): <a href="https://math.stackexchange.com/q/2301162">https://math.stackexchange.com/q/2301162</a>
                </Typography>
            </Container>
        </>
    )
}
