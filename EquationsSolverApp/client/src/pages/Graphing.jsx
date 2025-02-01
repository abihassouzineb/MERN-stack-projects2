import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import * as math from "mathjs";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useUser } from "@clerk/clerk-react";
import { Typography } from "@mui/material";

export default function Graphing() {
  const [equation, setEquation] = useState("");
  const [data, setData] = useState([]);
  const [domain, setDomain] = useState("");

  const { user } = useUser();

  if (!user) {
    return (
      <section className="flex flex-col h-screen overflow-hidden justify-center items-center">
        <Typography variant="h6" component="h2" gutterBottom>
          Please sign in to access this page.
        </Typography>
      </section>
    );
  }

  const generateGraphData = (eq) => {
    const points = [];
    const cleanedEq = eq.trim();

    if (!cleanedEq) {
      setData(points);
      setDomain("");
      return;
    }

    // Parse the equation to find restrictions (e.g., division by zero)
    const node = math.parse(cleanedEq);
    const restrictions = [];

    // Traverse the parsed tree to find divisions and other restrictions
    node.traverse((node) => {
      if (node.type === "OperatorNode" && node.op === "/") {
        // For divisions, find where the denominator is zero
        const denominator = node.args[1].toString();
        restrictions.push(`${denominator} != 0`);
      }
      if (node.type === "FunctionNode" && node.fn.name === "sqrt") {
        // For square roots, ensure the argument is non-negative
        const arg = node.args[0].toString();
        restrictions.push(`${arg} >= 0`);
      }
      if (node.type === "FunctionNode" && node.fn.name === "log") {
        // For logarithms, ensure the argument is positive
        const arg = node.args[0].toString();
        restrictions.push(`${arg} > 0`);
      }
    });

    // replacing all strange characters, to make the domain more readable (e.g., pi -> \pi, sqrt(2) -> \sqrt{2}, etc.)
    restrictions.forEach((restriction, index) => {
      restrictions[index] = restriction
        .replace(/pi/g, "\\pi")
        .replace(/e/g, "e")
        .replace(/inf/g, "\\infty")
        .replace(/NaN/g, "\\text{undefined}")
        .replace(/sqrt\(([^)]+)\)/g, "\\sqrt{$1}")
        .replace(/\*\*/g, "^")
        .replace(/\*/g, " \\cdot ");
    });

    const formattedEquation = cleanedEq
      .replace(/pi/g, "\\pi")
      .replace(/e/g, "e")
      .replace(/inf/g, "\\infty")
      .replace(/NaN/g, "\\text{undefined}")
      .replace(/sqrt\(([^)]+)\)/g, "\\sqrt{$1}")
      .replace(/\*\*/g, "^")
      .replace(/\*/g, " \\cdot ");

    setEquation(formattedEquation);

    // Generate the domain description
    if (restrictions.length > 0) {
      setDomain(
        `Domain: \\( \\mathbb{R} \\setminus \\{${restrictions.join(
          ", "
        )} \\} \\)`
      );
    } else {
      setDomain("Domain: \\( \\mathbb{R} \\) (all real numbers)");
    }

    // Generate graph data
    for (let x = -10; x <= 10; x += 0.5) {
      try {
        const y = math.evaluate(cleanedEq, { x });
        if (Number.isFinite(y)) {
          points.push({ x, y });
        }
      } catch {
        // Skip points where the function is invalid
        continue;
      }
    }
    setData(points);
  };

  // Calculate omega point (minimum y-value)
  const omega = data.find(
    (point) => point.y === Math.min(...data.map((p) => p.y))
  );

  return (
    <MathJaxContext>
      <section className="flex flex-col h-screen overflow-auto pt-9 justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 border-b-2 border-pink-500 pb-2 px-14">
          Graphing
        </h1>
        <div className="flex flex-row justify-center items-center gap-4">
          <label htmlFor="equation" className="text-xl mt-2 font-bold">
            <MathJax>{"\\( f(x) = \\)"}</MathJax>
          </label>
          <input
            value={equation}
            type="text"
            placeholder="Enter equation (e.g., x^2 - 3*x + 2)"
            onChange={(e) => {
              setEquation(e.target.value);
              generateGraphData(e.target.value);
            }}
            className="text-black p-2 border border-gray-400 rounded-md"
          />
          {omega && (
            <p className="font-bold">
              Omega Point: ({omega.x.toFixed(2)}, {omega.y.toFixed(2)})
            </p>
          )}
        </div>

        {/* Display domain information using MathJax */}
        {domain && (
          <div className="mt-2 text-sm text-gray-600">
            <MathJax>{domain}</MathJax>
          </div>
        )}

        {/* Display the equation in MathJax */}
        {equation && (
          <div className="mt-4 text-xl font-bold">
            <MathJax>{`\\( f(x) = ${equation} \\)`}</MathJax>
          </div>
        )}

        {/* Only render chart when we have valid data */}
        {data.length > 0 ? (
          <LineChart
            series={[
              {
                dataKey: "y",
                valueFormatter: (v) => (v !== undefined ? v.toFixed(2) : ""),
              },
            ]}
            xAxis={[
              {
                dataKey: "x",
                valueFormatter: (v) => (v !== undefined ? v.toFixed(2) : ""),
              },
            ]}
            dataset={data}
            width={1000}
            height={500}
            grid={{ vertical: true, horizontal: true }}
            padding={{ top: 40, bottom: 40, left: 40, right: 40 }}
            className="mt-4"
          />
        ) : (
          <p className="mt-4">Enter a valid equation to see the graph</p>
        )}
      </section>
    </MathJaxContext>
  );
}
