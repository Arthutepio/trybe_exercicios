import sys


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)

x = 5
print(f"{x:*^5}")
# * é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 5 são o número de caracteres exibidos
# saída **5**
