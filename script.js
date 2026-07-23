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