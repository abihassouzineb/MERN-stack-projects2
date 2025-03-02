# importing libraries
import requests
# importing a library to facilate the user's input process
import sys
# importing a library to pretify the terminal
import colorama

# defining the url
url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean"

# getting the data
response = requests.get(url)

# checking if the request was successful
if response.status_code == 200:
    data = response.json()
else:
    print("Error: ", response.status_code)  

def trivia_game():
    # defining the variables
    score = 0
    lives = 3
    # printing the welcome message (pretified with colorama)
    print(colorama.Fore.LIGHTGREEN_EX + "Welcome to the Trivia Game! You will be asked 10 questions. If you answer correctly, you will get 1 point. If you answer incorrectly, you will lose a life.")
    # printing the rules
    print(colorama.Fore.LIGHTGREEN_EX + "The rules are simple: you have 3 lives. If you answer incorrectly, you lose a life. If you answer correctly, you get 1 point. Good luck!")
    # printing the questions
    for question in data["results"]:
        print(colorama.Fore.LIGHTYELLOW_EX + question["question"])
        answer = input("True or False? ").lower()
        if answer == question["correct_answer"].lower():
            score += 1
        else:
            lives -= 1

        if lives == 0:
            print(colorama.Fore.RED + "You lost all your lives. Better luck next time!")
            break
        
    # printing the final score
    print(colorama.Fore.RED + "Your final score is: ", score)
    # printing the final lives
    print(colorama.Fore.RED + "Your final lives are: ", lives)

trivia_game()