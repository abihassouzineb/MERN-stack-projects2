# importing a library that takes a function, and gives its line in the chart
import matplotlib.pyplot as plt
import numpy as np


def f(x: int) -> int:
    return (2 * x - 1) / (x + 1)

def line(x: np.ndarray, y: np.ndarray) -> None:
    plt.plot(x, y, label = "Line")
    plt.xlabel("x")
    plt.ylabel("y")
    plt.legend()
    plt.grid()
    plt.show()

# explanation of the line 17 : x = np.linspace(start, end, number_of_points) : number_of_points is the number of points between start and end, and the points are equally spaced
x = np.linspace(-4, 4)

y = f(x)

line(x, y)

print(f"The maximum value of the function: {max(y)}")


print({f(0)})
print({f(1)})
print({f(2)})
print({f(3)})
print({f(4)})
print({f(5)})


print(f"The minimum value of the function: {min(y)}")

# ########################################################

