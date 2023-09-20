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
      <img src="${pokemonSeleccionado.spritefrontal}">
      <img src="${pokemonSeleccionado.spriteback}">
      <h2>${pokemonSeleccionado.nombre}</h2>
      <p class="parrafoProducto">${pokemonSeleccionado.descripcion}</p>
      <p class="parrafoProducto">Precio: $${pokemonSeleccionado.precio}.</p>
      `;
      detallePokemon.appendChild(contenedorDetallesPokemon);
    }
})