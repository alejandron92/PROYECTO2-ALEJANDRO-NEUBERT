document.addEventListener("DOMContentLoaded", () => {
    const detallePokemon = document.getElementById("detallePokemon");
  
    const urlParams = new URLSearchParams(window.location.search);
    const idPokemon = urlParams.get("id");
  

    const datosPokemons = JSON.parse(localStorage.getItem("pokemons"));
  
    const pokemonSeleccionado = datosPokemons.pokemons.find(
      (pokemon) => pokemon.id == idPokemon
    );
  
    if (pokemonSeleccionado) {
      const contenedorDetallesPokemon = document.createElement("div");
      contenedorDetallesPokemon.classList.add("descripcionMonstri");
      contenedorDetallesPokemon.innerHTML = `
      <h2>${pokemonSeleccionado.nombre}</h2>
      <img src="${pokemonSeleccionado.spritefrontal}" alt="${pokemonSeleccionado.nombre}">
      <img src="${pokemonSeleccionado.spriteback}" alt="${pokemonSeleccionado.nombre}">
      <p class="parrafoProducto">${pokemonSeleccionado.descripcion}</p>
      <p class="precio">Precio: $${pokemonSeleccionado.precio}.</p>
      `;
      detallePokemon.appendChild(contenedorDetallesPokemon);
    }
})