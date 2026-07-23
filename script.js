document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-btn");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Links to the top, stopping exactly at your scroll-margin-top boundary
      });
    }
  });
});
