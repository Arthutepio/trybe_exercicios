import pandas as pd


primeira_nota = pd.DataFrame(
    {
        "nome": ["maria", "joão", "pedro", "ana"],
        "primeira_nota": [9, 8, 7, 8],
    }
)

segunda_nota = pd.DataFrame(
    {"nome": ["maria", "joão", "pedro", "ana"], "segunda_nota": [8, 7, 9, 3]}
)

par_de_notas = primeira_nota.merge(segunda_nota)
print(par_de_notas)
#     nome  primeira_nota  segunda_nota
# 0  maria              9             8
# 1   joão              8             7
# 2  pedro              7             9
# 3    ana              8             3
