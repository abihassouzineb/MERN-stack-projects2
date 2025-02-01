import { useState } from "react";
import axios from "axios";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUser } from "@clerk/clerk-react";

export default function Equations() {
  const [equation, setEquation] = useState("");
  const [solutions, setSolutions] = useState([]);

  const [inequality, setInequality] = useState("");

  const [inequalitySolutions, setInequalitySolutions] = useState("");

  const {user} = useUser();

  if (!user) {
    return (
      <section className="flex flex-col h-screen overflow-hidden justify-center items-center">
        <Typography variant="h6" component="h2" gutterBottom>
          Please sign in to access this page.
        </Typography>
      </section>
    )
  }

  const formatSolution = (solution) => {
    if (typeof solution !== "string") {
      solution = String(solution);
    }
    let formatted = solution
      .replace(/I/g, "i")
      .replace(/pi/g, "\\pi")
      .replace(/e/g, "e")
      .replace(/inf/g, "\\infty")
      .replace(/NaN/g, "\\text{undefined}")
      .replace(/sqrt\(([^)]+)\)/g, "\\sqrt{$1}")
      .replace(/\*\*/g, "^")
      .replace(/\*/g, " \\cdot ");
    return formatted;
  };

  const solve = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/solve/${encodeURIComponent(equation)}`
      );
      const rawSolutions = response.data.solutions || [];
      const formattedSolutions = rawSolutions.map((solution) =>
        formatSolution(solution)
      );
      setSolutions(formattedSolutions);
    } catch (error) {
      console.error("Error solving the equation:", error);
    }
  };

  const solveInequalities = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/solve_inequation/${encodeURIComponent(
          inequality
        )}`
      );

      console.log(response.data);
      setInequalitySolutions(response.data.solution);

      return response.data;
    } catch (error) {
      console.error("Error solving the inequality:", error);
    }
  };

  return (
    <MathJaxContext>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
          height: "100vh",
          backgroundColor: "#f0f4f8",
          paddingX: "20px",
          paddingTop: "100px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Equation Solver Section */}
        <Stack spacing={3} alignItems="center" sx={{ maxWidth: "500px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              paddingBottom: "5px",
              borderBottom: "2px solid #1976d2",
              paddingX: "30px",
            }}
          >
            Equation Solver
          </Typography>
          <Paper
            elevation={7}
            sx={{
              padding: "20px",
              flexDirection: "column",
              gap: "20px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1976d2",
                borderBottom: "2px solid #1976d2",
                paddingBottom: "5px",
                textAlign: "center",
              }}
            >
              Enter Equation
            </Typography>
            <TextField
              onChange={(e) => setEquation(e.target.value)}
              label="Equation"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ paddingX: "30px", fontWeight: "bold" }}
              onClick={solve}
            >
              Solve
            </Button>
          </Paper>

          {solutions.length > 0 && (
            <Paper
              elevation={7}
              sx={{
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "#ffffff",
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#1976d2",
                  borderBottom: "2px solid #1976d2",
                  paddingBottom: "5px",
                  textAlign: "center",
                }}
              >
                Solutions
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {solutions.map((solution, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">
                          <MathJax>{`\\(${solution}\\)`}</MathJax>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </Stack>

        {/* Inequalities Solver Section */}
        <Stack spacing={3} alignItems="center" sx={{ maxWidth: "500px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              paddingBottom: "5px",
              borderBottom: "2px solid #1976d2",
              paddingX: "30px",
            }}
          >
            Inequalities Solver
          </Typography>
          <Paper
            elevation={7}
            sx={{
              padding: "20px",
              flexDirection: "column",
              gap: "20px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1976d2",
                borderBottom: "2px solid #1976d2",
                paddingBottom: "5px",
                textAlign: "center",
              }}
            >
              Enter Inequalities
            </Typography>
            <TextField
              onChange={(e) => setInequality(e.target.value)}
              label="Inequalities"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ paddingX: "30px", fontWeight: "bold" }}
              onClick={solveInequalities}
            >
              Solve
            </Button>
          </Paper>

          {inequalitySolutions && (
            <Paper
              elevation={7}
              sx={{
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "#ffffff",
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#1976d2",
                  borderBottom: "2px solid #1976d2",
                  paddingBottom: "5px",
                  textAlign: "center",
                }}
              >
                Solutions
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <MathJax>{`\\(${inequalitySolutions}\\)`}</MathJax>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </Stack>
      </Box>
    </MathJaxContext>
  );
}
