//🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, name) => acc + name.split('').reduce((acumulador, letra) => {
        if (letra === 'A' || letra === 'a') return acumulador +1;
        return acumulador;
    }, 0), 0);

  }
  console.log(containsA());