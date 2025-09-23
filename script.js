document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ver-mas");
  const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
  const modalImg = document.getElementById("modalImg");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalDescripcion = document.getElementById("modalDescripcion");

  botones.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      const img = card.querySelector("img").src;
      const titulo = card.querySelector(".card-title").textContent;
      const descripcion = card.querySelector(".card-text").textContent;

      modalImg.src = img;
      modalTitulo.textContent = titulo;
      modalDescripcion.textContent = descripcion;

      modal.show();
    });
  });
});
