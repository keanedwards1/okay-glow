// /js/subscribe-submit.js

document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterResponse = document.getElementById('newsletter-response');

    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get the email value
        const email = newsletterEmail.value.trim();

        // Simple email format validation (optional, as backend also validates)
        if (!validateEmail(email)) {
            displayResponse('Please enter a valid email address.', 'error');
            return;
        }

        try {
            // Send POST request to the /subscribe endpoint
            const response = await fetch('https://api.okayglow.co/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email }),
                credentials: 'include' // Include credentials if your backend uses them
            });

            // Parse the response
            const data = await response.json();

            if (response.ok) {
                // Success
                displayResponse(data, 'success'); // Assuming backend returns a simple message string
                newsletterForm.reset(); // Clear the form
            } else {
                // Handle errors (e.g., 409 Conflict)
                displayResponse(data, 'error'); // Assuming backend returns a simple error message string
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            displayResponse('An unexpected error occurred. Please try again later.', 'error');
        }
    });

    /**
     * Displays a response message to the user.
     * @param {string} message - The message to display.
     * @param {string} type - The type of message ('success' or 'error').
     */
    function displayResponse(message, type) {
        newsletterResponse.textContent = message;
        newsletterResponse.className = type === 'success' ? 'response-success' : 'response-error';
    }

    /**
     * Validates the email format using a regular expression.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - Returns true if valid, false otherwise.
     */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
