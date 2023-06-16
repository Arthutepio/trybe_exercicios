import pandas as pd


data = {
    "comida": [
        "abacate",
        "requeijão",
        "margarina",
        "doce de leite",
        "abacaxi",
    ],
    "tipo": ["doce", "salgado", "salgado", "doce", "doce"],
}

df = pd.DataFrame(data)

# Aqui fazemos a filtragem pelo tipo "doce" passando a condição
# df["tipo"] == "doce" como índice do loc.
comidas_doces = df.loc[df["tipo"] == "doce"]

print(comidas_doces)
# print(comidas_doces.iloc[0])
# print(comidas_doces.iloc[1:3])
