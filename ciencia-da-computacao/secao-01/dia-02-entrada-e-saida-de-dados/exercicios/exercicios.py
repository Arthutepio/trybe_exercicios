# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida.
# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)


# ======================================================
# Exercício 2:
# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# import random

# WORDS = [
#     "cat",
#     "elephant",
#     "dog",
#     "monkey",
#     "duck",
#     "chameleon",
#     "bear",
#     "moose",
#     "rooster",
# ]
# MAX_ATTEMPTS = 3


# def draw_secret_word(words):
#     secret_word = random.choice(words)
#     scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
#     return secret_word, scrambled_word


# def collect_guesses():
#     guesses = []
#     for attempt in range(MAX_ATTEMPTS):
#         guess = input("Guess the word: ")
#         guesses.append(guess)
#     return guesses


# def check_game_result(secret_word, guesses):
#     if secret_word in guesses:
#         print(f"You win: {secret_word}")
#     else:
#         print(f"You lose: {secret_word}")


# if __name__ == "__main__":
#     secret_word, scrambled_word = draw_secret_word(WORDS)
#     print(f"Scrambled word is {scrambled_word}")
#     guesses = collect_guesses()
#     check_game_result(secret_word, guesses)


# ==================================================
# Exercício 3:
# Modifique o exercício anterior para que as palavras sejam lidas de um
# arquivo. Considere que o arquivo terá cada palavra em uma linha.
# import random


# MAX_ATTEMPTS = 3


# def retrieve_words(file):
#     return [word.strip() for word in file]


# def draw_secret_word(words):
#     secret_word = random.choice(words)
#     scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
#     return secret_word, scrambled_word


# def collect_guesses():
#     guesses = []
#     for attempt in range(MAX_ATTEMPTS):
#         guess = input("Guess the word: ")
#         guesses.append(guess)
#     return guesses


# def check_game_result(secret_word, guesses):
#     if secret_word in guesses:
#         print(f"You win: the secret word is {secret_word}")
#     else:
#         print(f"You lose: the secret word is {secret_word}")


# if __name__ == "__main__":
#     with open("words.txt") as file:
#         words = retrieve_words(file)
#     secret_word, scrambled_word = draw_secret_word(words)
#     print(f"Scrambled word is {scrambled_word}")
#     guesses = collect_guesses()
#     check_game_result(secret_word, guesses)


# ===================================================
# 🚀 Exercício 4:
# Dado o arquivo.json, leia seu conteúdo e calcule a
# porcentagem de livros em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato CSV
import json
import csv


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)

