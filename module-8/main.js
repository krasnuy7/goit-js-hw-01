import array from "./gallery-items.js";
const ul = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
let lightbox__content = document.querySelector(".lightbox__content");
let btnClose = document.querySelector(".lightbox__button");
array.forEach((element) => {
  ul.innerHTML += `<li><img class='gallery__image' data-src='${element.original}' src='${element.preview}' alt='${element.description}'></li>`;
});

ul.addEventListener("click", showModal);

function showModal(e) {
  modal.classList.add("is-open");
  lightbox__content.innerHTML = `<img class="lightbox__image" src="${
    e.target.dataset.src
  }" alt="${e.target.getAttribute("alt")}" />`;
}
btnClose.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("is-open");
}
