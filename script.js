// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Loop video properly on mobile devices
if (window.innerWidth <= 768) {
  const video = document.querySelector('.fullscreen-video');
  if (video) {
    video.addEventListener('ended', function () {
      video.currentTime = 0;
      video.play();
    });
  }
}

// Carousel functionality
const carousel = document.querySelector('.carousel-single');
const images = document.querySelectorAll('.carousel-single img');
const total = images.length;
let index = 0;

if (document.querySelector('.arrow.left') && document.querySelector('.arrow.right')) {
  document.querySelector('.arrow.left').onclick = () => {
    index = (index - 1 + total) % total;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };

  document.querySelector('.arrow.right').onclick = () => {
    index = (index + 1) % total;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };
}

if (window.innerWidth <= 768) {
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach(arrow => {
    if (total <= 1) {
      arrow.style.display = 'none';
    }
  });
}
  
<script>
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
</script>
