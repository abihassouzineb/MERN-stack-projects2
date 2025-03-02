# importing sqlite3
import sqlite3

# creating a database
conn = sqlite3.connect("to_do_list.db")

# creating a cursor
cursor = conn.cursor()

# creating a table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS to_do_list (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL
    )
""")

# committing the changes
conn.commit()

# closing the connection
conn.close()

def add_task(task):
    conn = sqlite3.connect("to_do_list.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO to_do_list (task) VALUES (?)", (task,))
    conn.commit()
    conn.close()

def get_tasks():
    conn = sqlite3.connect("to_do_list.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM to_do_list")
    tasks = cursor.fetchall()
    conn.close()
    return tasks

def delete_task(task_id):
    conn = sqlite3.connect("to_do_list.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM to_do_list WHERE id=?", (task_id,))
    conn.commit()
    conn.close()

# main function
def main():
    while True:
        print("1. Add task")
        print("2. Get tasks")
        print("3. Delete task")
        print("4. Exit")

        choice = int(input("Enter your choice: "))
        print("#" * 20)

        if choice == 1:
            task = input("Enter task: ")
            add_task(task)
        elif choice == 2:
            tasks = get_tasks()
            for task in tasks:
                print(task)
        elif choice == 3:
            task_id = int(input("Enter task id: "))
            delete_task(task_id)
        elif choice == 4:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":  
    main()