import pandas as pd


def calcula_situacao(media):
    return "Aprovado" if media >= 7 else "Reprovado"


notas = pd.DataFrame(
    {
        "nome": ["maria", "joão", "pedro", "ana"],
        "primeira_nota": [9, 8, 7, 8],
        "segunda_nota": [8, 7, 9, 3],
    }
)

# Cria uma nova coluna chamada media
notas["media"] = (notas["primeira_nota"] + notas["segunda_nota"]) / 2

# Cria uma nova coluna chamada situacao no DataFrame com Aprovado ou Reprovado
# com base na média
notas["situacao"] = notas["media"].apply(calcula_situacao)

print(notas)
