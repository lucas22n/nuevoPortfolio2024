// Efectos para la barra de navegación lateral:
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});
// Fin de efectos para la barra de navegación lateral:

// Comienzo de carrito de compras: 

// Al hacer click en un boton, me trae los datos, incluido el data-id y me crea un nuevo arreglo.
let carrito = [];

document.querySelectorAll(".comprar-curso").forEach(boton => {
  boton.addEventListener("click", () => {
    const id = boton.getAttribute("data-id");
    const imagen = document.querySelector(`#tarjeta${id} img`);
    const titulo = document.querySelector(`#tarjeta${id} .card-title`);
    const descripcion = document.querySelector(`#tarjeta${id} .card-text`);
    const precio = document.querySelector(`#tarjeta${id} .text-muted`);

    const cursoComprado = {
      imagen: imagen.src,
      titulo: titulo.textContent,
      descripcion: descripcion.textContent,
      precio: precio.textContent
    };

    carrito.push(cursoComprado);
    mostrarCompras(); // Llamar a mostrarCompras aquí
  });
});

function mostrarCompras() {
  const container = document.getElementById("compras-container");
  container.innerHTML = ''; // Limpiar contenido anterior

  carrito.forEach(curso => {
    container.innerHTML += `
      <div class="card">
        <img class="card-img-top" src="${curso.imagen}" alt="${curso.titulo}">
        <div class="card-body">
          <h5 class="card-title">${curso.titulo}</h5>
        </div>
      </div>
    `;
  });
}
