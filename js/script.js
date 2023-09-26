fetch("pokemons.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("pokemons", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const divPokemons = document.getElementById("containerPokemons");
  const datosPokemons = JSON.parse(localStorage.getItem("pokemons"));
  console.log(datosPokemons);
  if (datosPokemons) {
    datosPokemons.pokemons.forEach((pokemon) => {
      const divItem = document.createElement("div");
      divItem.classList.add("monstri");
      divItem.innerHTML = `
      <img src="${pokemon.spritefrontal}" alt="${pokemon.nombre}"></img>
      <p>Tamagotchi ${pokemon.nombre}</p>
      <button class="verMas" id="${pokemon.id}">Detalles</button>`;
      divItem.addEventListener("click", () => {
        mostrarDetallesPokemon(pokemon);
      });
      divPokemons.appendChild(divItem); 
    });
  }
});

function mostrarDetallesPokemon(pokemon) {
    window.location.href = `pokemon.html?id=${pokemon.id}`;
  }