
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".mySlides");

  if (slides.length === 0) return;

  let slideIndex = 0;

  // Display the first image
  slides[slideIndex].classList.add("active");

  function carousel() {
    // Fade out the current image
    slides[slideIndex].classList.remove("active");

    // Move to the next image
    slideIndex = (slideIndex + 1) % slides.length;

    // Fade in the next image
    slides[slideIndex].classList.add("active");
  }

  // Switch images every 4 seconds
  setInterval(carousel, 4000);
});


const sections = document.querySelectorAll(
    "#home, #gallery, #about, #contact"
);

const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        }
    });
}, {
    rootMargin: "-20% 0px -60% 0px"
});

sections.forEach(section => observer.observe(section));

