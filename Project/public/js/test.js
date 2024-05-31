window.onload = function () {
  window.scrollTo(0, 0);
};

const logo = document.querySelector(".logo");
const spans = document.querySelectorAll(".logo > span");
const additionalTexts = document.querySelectorAll(".logo .additional-text");
const bg = document.querySelector(".bg");
const bgMask = document.querySelector(".bg_mask");
const introBox = document.querySelector(".introBox");
const scrollIndicator = document.querySelector(".scroll-indicator");

scrollIndicator.style.visibility = "hidden";

document.body.style.overflow = "hidden";

logo.addEventListener("mouseover", function () {
  logo.style.filter = "none";
  if (bg) bg.style.filter = "none";
  bgMask.style.filter = "none";
});

logo.addEventListener("mouseout", function () {
  if (!logo.classList.contains("clicked")) {
    logo.style.filter = "blur(8px)";
    if (bg) bg.style.filter = "blur(8px)";
    bgMask.style.filter = "blur(8px)";
  }
});

logo.addEventListener("click", function () {
  document.body.style.overflow = "auto";

  logo.style.filter = "none";
  if (bg) bg.style.filter = "none";
  bgMask.style.filter = "none";

  if (logo.classList.contains("clicked")) {
    spans.forEach((span, index) => {
      span.style.transform = `translateY(0)`;
    });
    additionalTexts.forEach((text) => (text.style.opacity = "0"));
  } else {
    spans.forEach((span, index) => {
      span.style.transform = `translateY(${index * 1.5}em)`;
    });
    additionalTexts.forEach((text) => (text.style.opacity = "1"));
  }

  logo.classList.toggle("clicked");
});

introBox.addEventListener("click", function () {
  this.classList.toggle("animate");

  if (
    scrollIndicator.style.visibility === "hidden" ||
    scrollIndicator.style.opacity === "0"
  ) {
    scrollIndicator.style.visibility = "visible";
    scrollIndicator.style.opacity = "1";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        content.classList.add("visible");
      }
    });
  });

  observer.observe(content);
});
