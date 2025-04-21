// Optional: Enhance scroll with JS (not needed if using CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });  
if (window.innerWidth <= 768) {
  const video = document.querySelector('.fullscreen-video');
  video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.play();
  });
}

  }
  // Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Carousel Functionality
const carousel = document.querySelector('.carousel-single');
const images = document.querySelectorAll('.carousel-single img');
const total = images.length;
let index = 0;

// If no arrows are available, don't apply functionality
if (document.querySelector('.arrow.left') && document.querySelector('.arrow.right')) {
  // Left arrow functionality
  document.querySelector('.arrow.left').onclick = () => {
    index = (index - 1 + total) % total;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };

  // Right arrow functionality
  document.querySelector('.arrow.right').onclick = () => {
    index = (index + 1) % total;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };
}

// For mobile-specific behavior, we might want to limit the number of images or make adjustments here
// You can also change the logic to dynamically control visibility of arrows based on the number of slides
if (window.innerWidth <= 768) {
  // Optionally add more mobile-specific features here, such as hiding arrows when not necessary
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach(arrow => {
    // Show or hide arrows based on the number of slides
    if (total <= 1) {
      arrow.style.display = 'none';
    }
  });
}
