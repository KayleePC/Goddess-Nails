document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel_item");
    const buttonsHtml = Array.from(items, () => {
        return '<span class="carousel_button"></span>';
    });
carousel.insertAdjacentHTML("beforeend",
<div class="carousel_nav">
      ${ buttonsHtml.join("")}
      </div>
);
const buttons = carousel.querySelectorAll(".carousel_button");

buttons.forEach((button, i) => {
    // un-select all the items
    items.forEach((item) => item.classList.remove("carousel_select"));
    buttons.forEach((button) => button.classList.remove("carousel_select"));

    items[i].classList.add("carousel_button-select");
    button.classList.add("carousel_button");
     // select the first item on page load
    items[0].classList.add("carousel_button-select");
    button[0].classList.add("carousel_button");
});
    });
  