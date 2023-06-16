import pandas as pd


# Exercício 3
# Construa um novo DataFrame a partir do seguinte conjunto de dados:

dados_ipea = pd.DataFrame(
    {
        "Grande Região": [
            "Norte",
            "Nordeste",
            "Sudeste",
            "Sul",
            "Centro-Oeste",
        ],
        "Número de Municípios": [450, 1794, 1668, 1191, 467],
        "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
        "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
        "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62],
    }
)

df = pd.DataFrame(dados_ipea)

# Dados IPEA(2015)

# Agora, responda aos seguintes questionamentos:

# 1. Quantas linhas e colunas possui o nosso conjunto de dados?
print(f"linhas, colunas = {df.shape}")

# 2. Há valores nulos no DataFrame?
print(f"valores nulos = {df.info()}")

# 3. Qual o número médio de pessoas em situação de rua por região do Brasil em
# nosso DataFrame?
print(f"média de pessoas = {df.describe()}")

# Qual região tem proporcionalmente a maior quantidade de pessoas nessa
# situação? E qual tem menos?
print(f"média de pessoas = {df.describe()}")
