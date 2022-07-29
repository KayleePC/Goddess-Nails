/*document.querySelectorAll(".carousel").forEach((carousel) => {
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
    });*/
/*const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset 
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIdex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})*/
