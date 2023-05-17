# Exercício 8: Agora um desafio! Vá ao site
# https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as
# imagens de todas as bandeiras.
import requests
from parsel import Selector


BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(BASE_URL)
selector = Selector(response.text)
flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
for img_url in flags_url:
    filename = img_url.split("/")[-1]
    image_content = requests.get("https:" + img_url).content
    with open("./country_flags/" + filename, "wb") as file:
        file.write(image_content)


# Não consegui testar
# Não consegui testar
# Não consegui testar
# Não consegui testar
# Não consegui testar
