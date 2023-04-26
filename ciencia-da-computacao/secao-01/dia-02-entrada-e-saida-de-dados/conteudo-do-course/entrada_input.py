import random

random_number = random.randint(1, 2)
guess = ""

while guess != random_number:
    guess = int(input("digíte um número de 1 a 5 "))

print("O númer sorteado foi: ", guess)
