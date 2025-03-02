# importing libraries
import random
import string

# preferences
# length of the password
# whether to include uppercase letters
# whether to include lowercase letters
# whether to include numbers
# whether to include special characters

# generating the password
def generate_password() -> str:
    print("Welcome to the password generator!")
    length = int(input("Enter password's length: "))
    inc_upper = str(input("Include uppercase letters? (y/n): "))
    inc_lower = str(input("Include lowercase letters? (y/n): "))
    inc_num = str(input("Include numbers? (y/n): "))
    inc_special = str(input("Include special characters? (y/n): "))
    password = ""
    if length < 4:
        print("Password must be at least 4 characters long.")
        return
    if inc_upper == "y":
        password += string.ascii_uppercase
    if inc_lower == "y":
        password += string.ascii_lowercase
    if inc_num == "y":
        password += string.digits
    if inc_special == "y":
        password += string.punctuation
    password = "".join(random.sample(password, length))
    random.shuffle(password)
    return password

# printing the password
password = generate_password()
print("Your password is: " + password)