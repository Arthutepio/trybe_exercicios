import pandas as pd


chuvas_regiao_morumbi = pd.read_csv("chuvas_morumbi.csv")
chuvas_regiao_morumbi.to_json("chuvas_morumbi.json")
