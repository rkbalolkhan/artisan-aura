function homeBannerSlider() {
  let currentIndex = 0;

  function showSlide() {
    const slider = document.querySelector(".banner-img-slider");
    const slideWidth = document.querySelector(".banner-slide").offsetWidth;
    const newPosition = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
  }

  function nextSlide() {
    currentIndex =
      (currentIndex + 1) % document.querySelectorAll(".banner-slide").length;
    showSlide();
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1) % document.querySelectorAll(".banner-slide").length;
    showSlide();
  }

  showSlide();

  document
    .querySelector(".slider-prev-btn")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".slider-next-btn")
    .addEventListener("click", nextSlide);

  setInterval(nextSlide, 5000);
}

homeBannerSlider();
