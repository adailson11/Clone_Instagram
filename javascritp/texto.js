
var slideIndex = 0;
showSlides();

function showSlides() {
  var i; 
  var slides = document.getElementsByClassName("slider_show"); // variavél que busca a tag dentro do HTML
  for (i = 0; i < slides.length; i++) { //Laço para trocar as imagens automatico
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Tempo para troca das imagens
}