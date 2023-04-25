vogais = "aeiou"
frase = "O galo é o time da virada, o galo é o time do amor"
letra_v = []
letra_c = []
# for letra in frase:
#     if letra in vogais:
#         letra_v.append(letra)

# print(letra_v)


# for letra in frase:
#     if letra not in vogais:
#         letra_c.append(letra)

# print(letra_c)
lista_v = [letra for letra in frase if letra in vogais]
print(lista_v)
print([letra for letra in frase if letra not in vogais])
