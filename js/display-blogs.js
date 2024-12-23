document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".blog-category");
    const blogCards = document.querySelectorAll(".blog-card");

    categories.forEach(category => {
        category.addEventListener("click", event => {
            event.preventDefault();
            const selectedCategory = category.textContent.trim();

            // Update active class
            categories.forEach(cat => cat.classList.remove("active"));
            category.classList.add("active");

            // Show/hide blogs
            blogCards.forEach(card => {
                const blogCategories = card.getAttribute("data-category").split("|").map(cat => cat.trim());
                if (selectedCategory === "All" || blogCategories.includes(selectedCategory)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
