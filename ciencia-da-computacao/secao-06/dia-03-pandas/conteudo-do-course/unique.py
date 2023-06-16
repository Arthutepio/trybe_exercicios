import pandas as pd


primeira_nota = pd.DataFrame(
    {
        "nome": ["maria", "joão", "joão", "joão", "pedro", "ana"],
        "primeira_nota": [9, 8, None, None, 7, 8],
    }
)

print(primeira_nota["nome"].unique())
# Saída ['maria' 'joão' 'pedro' 'ana']
