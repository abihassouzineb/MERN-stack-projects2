from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Add middleware for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the Student model
class Student(BaseModel):
    name: str
    age: int
    grade: int

# Create the database table if it doesn't exist
def create_table():
    try:
        with sqlite3.connect("Students_db.db") as conn:
            cursor = conn.cursor()
            cursor.execute("""CREATE TABLE IF NOT EXISTS Students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                age INTEGER,
                grade INTEGER
            )""")
            conn.commit()
    except sqlite3.Error as e:
        print("Error creating table:", e)

# Call the create_table function on startup
create_table()

# Define routes
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/students")
async def get_students():
    try:
        with sqlite3.connect("Students_db.db") as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM Students")
            rows = cursor.fetchall()
            return {"students": rows}
    except sqlite3.Error as e:
        return {"error": str(e)}

@app.post("/students")
async def add_student(student: Student):
    try:
        with sqlite3.connect("Students_db.db") as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO Students (name, age, grade) VALUES (?, ?, ?)",
                (student.name, student.age, student.grade)
            )
            conn.commit()
            return {"message": "Student added successfully", "student": student}
    except sqlite3.Error as e:
        return {"error": str(e)}

@app.put("/students/{id}")
async def update_student(id: int, student: Student):
    try:
        with sqlite3.connect("Students_db.db") as conn:
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE Students SET name = ?, age = ?, grade = ? WHERE id = ?",
                (student.name, student.age, student.grade, id)
            )
            conn.commit()
            return {"message": "Student updated successfully"}
    except sqlite3.Error as e:
        return {"error": str(e)}

@app.delete("/students/{id}")
async def delete_student(id: int):
    try:
        with sqlite3.connect("Students_db.db") as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Students WHERE id = ?", (id,))
            conn.commit()
            return {"message": "Student deleted successfully"}
    except sqlite3.Error as e:
        return {"error": str(e)}

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
