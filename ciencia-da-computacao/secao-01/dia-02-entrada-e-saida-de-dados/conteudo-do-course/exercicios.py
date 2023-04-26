# Exercício 1:
# Faça um programa que solicite o nome de
# uma pessoa usuária e imprima-o na vertical.
# def digite_nome(name):
#     for char in name:
#         print(char)


# print(digite_nome("Arthur"))

# NAME = input("Insira seu nome: ")

# for letter in NAME:
#     print(letter)


# Exercício 2:
# Escreva um programa que receba vários
# números naturais e calcule a soma desses
# valores. Caso algum valor da entrada seja
# inválido (por exemplo uma letra), uma
# mensagem deve ser exibida na saída de erros
# no seguinte formato: “Erro ao somar valores,
# {valor} é um valor inválido”. Ao final, você
# deve imprimir a soma dos valores válidos.

# nums = input("Insira valores aqui, separados por espaço: ")

# nums_arr = nums.split(" ")

# sum = 0
# for num in nums_arr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)


# print(f"A soma dos valores válidos é: {sum}")

# ===========================================
# Exercício 3:
# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um
# programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.
file = open("file.txt", mode="w")

file.write("Marcos 10\n")
file.write("Felipe 4\n")
file.write("José 6\n")
file.write("Ana 10\n")
file.write("Maria 9\n")
file.write("Miguel 5\n")

file.close()

recu_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recu_students.append(student_grade[0] + "\n")

print(recu_students)
with open("recuStudents.txt", mode="w") as recu_students_file:

    recu_students_file.writelines(recu_students)
