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

    // Replace 'YOUR_GOOGLE_SHEETS_API_ENDPOINT' with your actual endpoint
    const url = "YOUR_GOOGLE_SHEETS_API_ENDPOINT";

    // Send data to Google Sheets
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Clear form fields after successful submission
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          // Show success message (you can customize this)
          alert("Thank you for your feedback!");
        } else {
          // Handle error
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Show error message (you can customize this)
        console.error("Error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});
