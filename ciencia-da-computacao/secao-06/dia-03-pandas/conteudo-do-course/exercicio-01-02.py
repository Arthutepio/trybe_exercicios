import pandas as pd


# Exercício 1
# Crie um novo DataFrame a partir de um dicionário que contém três pares de
# chave-valor. O primeiro par terá os nomes de seus amigos mais próximos, já o
# segundo terá o prato preferido de cada amigo, o terceiro e último par terá a
# sobremesa preferida deles. Confira se a saída condiz com o resultado esperado
dic_my_friensds = {
    "friends": ["Euler", "Kened", "Victor", "Ryan"],
    "prato_preferido": ["pizza", "hamburguer", "salada", "churrasco"],
    "sobremesa_preferida": ["pudim", "acaí", "sorvete", "doce de leite"],
}

my_friends_dataframe = pd.DataFrame(dic_my_friensds)

print(my_friends_dataframe)

# Exercício 2
# A partir do dicionário criado no exercício 1, armazene os DataSeries
# referentes a cada uma das colunas em variáveis e imprima a saída.
name = pd.Series(dic_my_friensds["friends"])
prato_favorito = pd.Series(dic_my_friensds["prato_preferido"])
sobremesa_favorita = pd.Series(dic_my_friensds["sobremesa_preferida"])

print(name)
print(prato_favorito)
print(sobremesa_favorita)
