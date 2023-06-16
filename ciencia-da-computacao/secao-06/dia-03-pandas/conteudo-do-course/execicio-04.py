import pandas as pd


# Exercício 4
# A lanchonete Pão na Chapa está pensando em expandir o seu negócio. Mas, para
# garantir a saúde financeira do empreendimento, ela resolveu consultar vários
# fornecedores, e assim, estabelecer a melhor relação entre custo x benefício
# para os principais ingredientes usados na sua cozinha. A pesquisa se deu ao
# longo de 7 dias, com objetivo de identificar qual dos fornecedores possuía a
# melhor relação de custo x benefício para os principais ingredientes usados.

df = pd.read_csv("pesquisa_pao_na_chapa.csv")
# print(df)

# 1. Qual o dia da semana em que o queijo muçarela está com o menor preço?
menor_valor = df["preco_reais"].loc[df["produto"] == "queijo muçarela"].min()

dia = df["dia_da_semana"].loc[
    (df["preco_reais"] == menor_valor) & (df["produto"] == "queijo muçarela")
]

print(dia)

# 2. Qual o nome do fornecedor onde o tomate esteve com o maior preço
# histórico?
maior_valor = df["preco_reais"].loc[df["produto"] == "tomate"].max()

fornecedor = df["nome_do_fornecedor"].loc[
    (df["preco_reais"] == maior_valor) & (df["produto"] == "tomate")
]

print(fornecedor)

# 3. Em qual/quais dia/dias da semana o fornecedor soma pão aparentemente não
# abriu as portas?
fechado = df["dia_da_semana"].loc[
    df["preco_reais"].isnull() & (df["nome_do_fornecedor"] == "soma pão")
]

print(fechado)

# De olho na dica 🖊: Confira os dias em que há valores nulos para o preço do
# pão francês.

# Crie um novo DataFrame com o preço médio de cada produto pesquisado.
new_df = (
    df.groupby(by="produto")
    .mean(numeric_only=True)
    .rename(columns={"preco_reais": "preco_medio"})
)

print(f"{new_df}")
