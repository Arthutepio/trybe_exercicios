# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares existem em
# uma sequência numérica (1 a n).
def amount_of_pairs(n):
    count = 0
    for i in range(n + 1):
        if i % 2 == 0:
            count += 1
    print(count - 1)
    return count - 1


amount_of_pairs(12)
