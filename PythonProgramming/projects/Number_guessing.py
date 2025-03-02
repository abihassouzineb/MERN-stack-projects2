# importing libraries
import random


def Number_guessing_game():
    print("Welcome to the Number guessing game! The computer will choose a random number between selected range! ")

    lives = 5

    while lives > 0:
        min = int(input("Enter the minimum number: "))
        max = int(input("Enter the maximum number: "))
        number = random.randint(min,max)
        guess = int(input("Enter your guess: "))
        if guess == number:
            print("You won!")
            break
        elif guess > number:
            print("Too high!")
            lives -= 1
        else:
            print("Too low!")
            lives -= 1
    if lives == 0:
        print("You lost!")
    


Number_guessing_game()