file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria\n")
file.write("Miguel\n")

print("Arthur 36", file=file)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)


file.close()