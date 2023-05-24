# 🚀 Exercício 2:
# Transforme o algoritmo criado acima em recursivo.
def amount_of_pairs(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + amount_of_pairs(n - 1)
    else:
        return amount_of_pairs(n - 1)


amount_of_pairs(11)
