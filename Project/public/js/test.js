function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
    document.querySelector("footer").style.bottom = "0px";
  } else {
    document.querySelector("footer").style.bottom = "-" + heightFooter + "px";
  }
}

// 페이지 로드 완료 시 실행되는 함수
window.onload = function () {
  var windowHeight = window.innerHeight,
    footerHeight = document.querySelector("footer").offsetHeight,
    heightDocument =
      windowHeight +
      document.querySelector(".content").offsetHeight +
      footerHeight -
      20;

  // Definindo o tamanho do elemento pra animar
  document.querySelector(".scroll-animate").style.height =
    heightDocument + "px";
  document.querySelector(".scroll-animate-main").style.height =
    heightDocument + "px";

  // Definindo o tamanho dos elementos header e conteúdo
  document.querySelector(".jumbo").style.height = windowHeight + "px";
  document.querySelector(".jumbo").style.lineHeight = windowHeight + "px";

  document.querySelector(".wrapper-parallax").style.marginTop =
    windowHeight + "px";

  scrollFooter(window.scrollY, footerHeight);

  // ao dar rolagem
  window.onscroll = function () {
    var scroll = window.scrollY;

    document.querySelector(".scroll-animate-main").style.top =
      "-" + scroll + "px";

    document.querySelector(".jumbo").style.backgroundPositionY =
      50 - (scroll * 100) / heightDocument + "%";

    scrollFooter(scroll, footerHeight);
  };
};
