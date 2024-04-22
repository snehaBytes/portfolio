const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", () => {
  // Navigation links
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = event.target.getAttribute("href").slice(1);
      scrollToSection(sectionId);
    });
  });

  // Contact Me button
  const contactButton = document.querySelector(".contact");
  contactButton.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").slice(1);
    scrollToSection(sectionId);
  });

  // Form submission
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct the data object
    const data = {
      name: name,
      email: email,
      message: message,
    };
  });
});
