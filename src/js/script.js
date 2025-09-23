document.addEventListener('DOMContentLoaded', function() {
  const imgBox = document.querySelector('.img-box');
  const images = imgBox.querySelectorAll('img');
  let currentIndex = 0;
  
  // Mostra a primeira imagem
  images[currentIndex].classList.add('active');
  
  // Troca de imagem a cada 2 segundos
  setInterval(() => {
    // Esconde a imagem atual
    images[currentIndex].classList.remove('active');
    
    // Avança para a próxima imagem (ou volta para a primeira)
    currentIndex = (currentIndex + 1) % images.length;
    
    // Mostra a nova imagem
    images[currentIndex].classList.add('active');
  }, 2000); // 2000ms = 2 segundos
});