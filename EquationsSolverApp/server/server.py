from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sympy as sp
from sympy.solvers.inequalities import reduce_inequalities
import uvicorn

# Initialize FastAPI app
app = FastAPI()

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (adjust for security as needed)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the symbol for solving equations and inequalities
x = sp.Symbol('x')

@app.get("/solve/{expression}")
async def solve(expression: str):
    """
    Solve the given algebraic equation for 'x'.
    Example: http://localhost:8000/solve/x**2+2*x-3
    """
    try:
        # Parse the input expression safely
        parsed_expression = sp.sympify(expression)
        
        # Solve the equation
        solutions = sp.solve(parsed_expression, x)
        
        # Convert solutions to Python-native types: float or str
        solutions_as_python = [
            float(sol.evalf()) if sol.is_real else str(sol)
            for sol in solutions
        ]
        
        # Return the solutions
        return {"expression": expression, "solutions": solutions_as_python}
    
    except sp.SympifyError:
        raise HTTPException(status_code=400, detail="Invalid mathematical expression.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")


@app.get("/solve_inequation/{inequation}")
async def solve_inequation(inequation: str):
    """
    Solve the given inequality for 'x' and return the solution as an interval.
    Example: http://localhost:8000/solve_inequation/(x**2 - 2*x + 1) >= 0
    """
    try:
        # Parse the input inequality safely
        parsed_inequation = sp.sympify(inequation)
        
        # Solve the inequality
        solution = reduce_inequalities(parsed_inequation, x)
        
        # Convert the solution to interval notation
        interval_solution = _format_interval(solution)
        
        # Return the solution as an interval
        return {"inequation": inequation, "solution": interval_solution}
    
    except sp.SympifyError:
        raise HTTPException(status_code=400, detail="Invalid mathematical expression.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")


def _format_interval(solution):
    """
    Helper function to format the solution into interval notation.
    """
    if isinstance(solution, sp.And):
        # Handle compound inequalities (e.g., x > 1 and x < 3)
        intervals = []
        for arg in solution.args:
            if isinstance(arg, sp.LessThan):
                intervals.append(f"(-∞, {arg.args[1]}]")
            elif isinstance(arg, sp.StrictLessThan):
                intervals.append(f"(-∞, {arg.args[1]})")
            elif isinstance(arg, sp.GreaterThan):
                intervals.append(f"[{arg.args[1]}, ∞)")
            elif isinstance(arg, sp.StrictGreaterThan):
                intervals.append(f"({arg.args[1]}, ∞)")
        return " ∩ ".join(intervals)
    elif isinstance(solution, sp.Or):
        # Handle multiple intervals (e.g., x < 1 or x > 3)
        intervals = []
        for arg in solution.args:
            if isinstance(arg, sp.LessThan):
                intervals.append(f"(-∞, {arg.args[1]}]")
            elif isinstance(arg, sp.StrictLessThan):
                intervals.append(f"(-∞, {arg.args[1]})")
            elif isinstance(arg, sp.GreaterThan):
                intervals.append(f"[{arg.args[1]}, ∞)")
            elif isinstance(arg, sp.StrictGreaterThan):
                intervals.append(f"({arg.args[1]}, ∞)")
        return " ∪ ".join(intervals)
    elif isinstance(solution, sp.LessThan):
        return f"(-∞, {solution.args[1]}]"
    elif isinstance(solution, sp.StrictLessThan):
        return f"(-∞, {solution.args[1]})"
    elif isinstance(solution, sp.GreaterThan):
        return f"[{solution.args[1]}, ∞)"
    elif isinstance(solution, sp.StrictGreaterThan):
        return f"({solution.args[1]}, ∞)"
    else:
        return str(solution)


# BMI Calculator
@app.get("/bmi/{height}/{weight}")
async def bmi(height: float, weight: float):
    try:
        bmi = weight / (height ** 2)
        return {"bmi": bmi}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")
    



# Entry point for running the app
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)