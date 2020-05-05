let items = document.querySelectorAll("#categories>li");
[...items].forEach((element) => {
  console.log(
    `Категория ${element.children[0].textContent}; Количество елементов ${element.children[1].children.length}`
  );
});
