// /js/contact.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', event => {
      event.preventDefault(); // Prevent the default form submission
  
      // Simple form validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
  
      if (name && email && subject && message) {
        // Display a success message or send the form data to a server
        alert('Thank you for contacting us! We will get back to you shortly.');
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  });
  