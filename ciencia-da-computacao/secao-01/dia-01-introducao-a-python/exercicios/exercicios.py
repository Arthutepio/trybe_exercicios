# 🚀 Exercício 1: Crie uma função que receba dois números e retorne
# o maior deles.
# def higher_number(a, b):
#     return max(a, b)


# print(higher_number(13, 10))
# Gabarito
# def bigger(number, other):
#     if other > number:
#         return other
#     return number


# print(bigger(13, 10))
# ============================================================


# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
# list = [2, 5, 8, 45, 60, 0]
# media = 0
# for i in list:
#     media += i

# print(int(media / len(list)))
# Gabarito
# def mean(numbers):
#     total = 0
#     for number in numbers:
#         total += number
#     return total / len(numbers)


# print(mean([2, 5, 8, 45, 60, 0]))


# ============================================================
# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# def asteriscos(n):
#     for i in range(n):
#         print(n * "*")


# print(asteriscos(5))

# ============================================================
# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e
# retorne o nome com a maior quantidade de caracteres. Por exemplo,
# para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o
# retorno deve ser "Fernanda".
# list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
# max_length = list[0]
# for name in list:
#     if len(name) > len(max_length):
#         max_length = name


# print(max_length)

# ============================================================
# Exercício 5: Considere que a cobertura da tinta é de 1 litro para
# cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma
# tupla contendo a quantidade de latas de tinta a serem compradas e o
# preço total a partir do tamanho de uma parede (em m²).
# def calculate_ink_quantity(m):
#     latas = (m / 3) / 18
#     return (latas, int(latas * 18))


# print(calculate_ink_quantity(54))

# Gabarito
# import math


# def paint_costs(area):
#     can_price = 80
#     required_liters = area / 3
#     required_cans = math.ceil(required_liters / 18)
#     return required_cans, required_cans * can_price


# print(paint_costs(55))

# ============================================================
# Exercício 6: Crie uma função que receba os três lado de
# um triângulo e informe qual o tipo de triângulo formado ou
# "não é triangulo", caso não seja possível formar um triângulo.
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(type_of_triangle(50, 50, 50))
