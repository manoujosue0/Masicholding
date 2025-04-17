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
if (window.innerWidth <= 768) {  // Targeting mobile devices (below 768px width)
  const video = document.querySelector('.fullscreen-video');
  
  video.addEventListener('ended', function () {
    video.currentTime = 0;  // Restart video immediately
    video.play();  // Play again
  });
}
if (window.innerWidth <= 768) {  // Targeting mobile devices
  const video = document.querySelector('.fullscreen-video');
  
  video.addEventListener('ended', function () {
    video.load();  // Reload video to ensure smooth loop
    video.play();  // Start playing immediately
  });
}
