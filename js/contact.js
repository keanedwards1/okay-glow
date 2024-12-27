// /js/contact.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Collect form data
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      // Simple form validation
      if (!name || !email || !subject || !message) {
          alert('Please fill in all required fields.');
          return;
      }

      // Prepare form data for the backend
      const formData = { name, email, subject, message };

      try {
          // Send form data to the backend
          const response = await fetch("http://localhost:8080/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          });

          if (response.ok) {
              alert("Thank you for contacting us! We will get back to you shortly.");
              form.reset(); // Clear the form
          } else {
              alert("Error sending message. Please try again.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
      }
  });
});
