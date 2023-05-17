# Exercício 2:
# Faça uma requisição ao recurso usuários da API do Github
# (https://api.github.com/users), exibindo o username e url de todos os
# usuários retornados.
import requests


URL = "https://api.github.com/users"

response = requests.get(URL)
users = response.json()

for user in users:
    print(f"user: {user['login']} link: {user['url']}")
