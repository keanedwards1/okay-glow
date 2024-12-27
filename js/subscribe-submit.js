document.getElementById("newsletter-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("newsletter-email").value;

    try {
        const response = await fetch("http://localhost:8080/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert("Subscription successful! Thank you for subscribing.");
            document.getElementById("newsletter-form").reset();
        } else {
            alert("Error subscribing. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
