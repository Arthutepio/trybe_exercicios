# 🚀 Exercício 3:
# Crie um algoritmo recursivo que encontre, em uma lista, o maior número
# inteiro.
def higher_number(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maio_numero = higher_number(lista,  tamanho - 1)
        if maio_numero > lista[tamanho - 1]:
            return maio_numero
        else:
            return lista[tamanho - 1]


def maior_inteiro(lista):
    tamanho = len(lista)
    return higher_number(lista, tamanho)


print(maior_inteiro([1, 2, 5, 11, 9]))
