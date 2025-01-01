// /js/art-corner-backend.js

document.addEventListener('DOMContentLoaded', () => {
    /*** 1. Tab Navigation ***/
    const tabButtons = document.querySelectorAll('.tab-button');
    const artSections = document.querySelectorAll('.art-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            tabButtons.forEach(b => b.classList.remove('active'));
            artSections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            const targetSection = document.getElementById(`${button.dataset.tab}-section`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    /*** 2. User Authentication Handling ***/
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const openRegisterLink = document.getElementById('open-register');
    const openLoginLink = document.getElementById('open-login');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginResponse = document.getElementById('login-response');
    const registerResponse = document.getElementById('register-response');
    const authButton = document.getElementById('auth-button'); // Login/Logout button
    const userEmailSpan = document.getElementById('user-email'); // User email display

    // Select spinner elements
    const loginSpinner = document.getElementById('login-spinner');
    const registerSpinner = document.getElementById('register-spinner');

    // Open Register Modal from Login Modal
    openRegisterLink.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    // Open Login Modal from Register Modal
    openLoginLink.addEventListener('click', () => {
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // Close Modals
    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    closeRegister.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });

    // Close Modals when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Basic Validation
        if (!email || !password) {
            displayResponse(loginResponse, 'Please fill in all required fields.', 'error');
            return;
        }

        try {
            loginSpinner.style.display = 'block'; // Show spinner
            const response = await fetch('https://api.okayglow.co/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            loginSpinner.style.display = 'none'; // Hide spinner

            if (response.ok) {
                // Store JWT in localStorage
                localStorage.setItem('jwt', data.token);
                displayResponse(loginResponse, 'Login successful!', 'success');
                loginForm.reset();
                loginModal.style.display = 'none';
                updateAuthButton(); // Update the Login/Logout button
                loadJournalEntries(); // Fetch journal entries after login
            } else {
                displayResponse(loginResponse, data.error || 'Login failed. Please try again.', 'error');
            }
        } catch (error) {
            loginSpinner.style.display = 'none'; // Hide spinner
            console.error('Error during login:', error);
            displayResponse(loginResponse, 'An unexpected error occurred. Please try again later.', 'error');
        }
    });

    // Handle Register Form Submission
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();

        // Basic Validation
        if (!name || !email || !password) {
            displayResponse(registerResponse, 'Please fill in all required fields.', 'error');
            return;
        }

        try {
            registerSpinner.style.display = 'block'; // Show spinner
            const response = await fetch('https://api.okayglow.co/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            registerSpinner.style.display = 'none'; // Hide spinner

            if (response.ok) {
                // Store JWT in localStorage
                localStorage.setItem('jwt', data.token);
                displayResponse(registerResponse, 'Registration successful!', 'success');
                registerForm.reset();
                registerModal.style.display = 'none';
                updateAuthButton(); // Update the Login/Logout button
                loadJournalEntries(); // Fetch journal entries after registration
            } else {
                displayResponse(registerResponse, data.error || 'Registration failed. Please try again.', 'error');
            }
        } catch (error) {
            registerSpinner.style.display = 'none'; // Hide spinner
            console.error('Error during registration:', error);
            displayResponse(registerResponse, 'An unexpected error occurred. Please try again later.', 'error');
        }
    });

    /**
     * Displays a response message to the user.
     * @param {HTMLElement} element - The HTML element to display the message in.
     * @param {string} message - The message to display.
     * @param {string} type - The type of message ('success' or 'error').
     */
    function displayResponse(element, message, type) {
        element.textContent = message;
        element.className = type === 'success' ? 'response-success' : 'response-error';
    }

    /*** 3. Pixel Canvas Integration ***/
    const canvas = document.getElementById('pixel-canvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('pixel-color');
    const cooldownDisplay = document.querySelector('.cooldown span');
    const userCountDisplay = document.querySelector('.user-count');

    const PIXEL_SIZE = 10; // Ensure consistency with backend
    let cooldown = 0;
    let cooldownInterval;

    // Initialize WebSocket connection
    const socket = new WebSocket('wss://api.okayglow.co/ws');

    socket.addEventListener('open', () => {
        console.log('Connected to Pixel Canvas WebSocket');
    });

    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'pixel') {
            drawPixel(message.x, message.y, message.color);
        } else if (message.type === 'user_count') {
            userCountDisplay.textContent = message.count;
        }
    });

    socket.addEventListener('close', () => {
        console.log('Disconnected from WebSocket');
    });

    // Initialize canvas with existing pixels if necessary
    // This requires the backend to send initial canvas state upon connection
    // Implement as needed based on backend capabilities

    // Handle Canvas Clicks
    canvas.addEventListener('click', (e) => {
        if (cooldown > 0) {
            alert(`Please wait ${cooldown} seconds before placing another pixel.`);
            return;
        }

        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / PIXEL_SIZE);
        const y = Math.floor((e.clientY - rect.top) / PIXEL_SIZE);
        const color = colorPicker.value;

        // Send pixel data to the backend via WebSocket
        socket.send(JSON.stringify({
            type: 'pixel',
            x,
            y,
            color
        }));

        // Start cooldown
        cooldown = 5; // 5 seconds cooldown
        updateCooldownDisplay();
        cooldownInterval = setInterval(() => {
            cooldown--;
            if (cooldown <= 0) {
                clearInterval(cooldownInterval);
            }
            updateCooldownDisplay();
        }, 1000);
    });

    /**
     * Updates the cooldown display timer.
     */
    function updateCooldownDisplay() {
        cooldownDisplay.textContent = cooldown > 0 ? `${cooldown}s` : '0s';
    }

    /**
     * Draws a pixel on the canvas.
     * @param {number} x - The x-coordinate (in pixels) on the canvas.
     * @param {number} y - The y-coordinate (in pixels) on the canvas.
     * @param {string} color - The color of the pixel.
     */
    function drawPixel(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    }

    /*** 4. Gratitude Journal Integration ***/
    const saveEntryBtn = document.querySelector('.save-entry-btn');
    const entryDate = document.getElementById('entry-date');
    const entryContent = document.getElementById('entry-content');
    const journalEntries = document.querySelector('.journal-entries');
    const moodButtons = document.querySelectorAll('.mood-btn');
    let selectedMood = null;

    // Handle Mood Selection
    moodButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            moodButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMood = btn.textContent;
        });
    });

    // Handle Saving Journal Entry
    saveEntryBtn.addEventListener('click', async () => {
        const date = entryDate.value;
        const content = entryContent.value.trim();

        if (!date || !content) {
            alert('Please fill in all required fields.');
            return;
        }

        const token = localStorage.getItem('jwt');
        if (!token) {
            // Prompt the login modal instead of alerting
            loginModal.style.display = 'block';
            return;
        }

        const payload = {
            date,
            content,
            mood: selectedMood
        };

        try {
            const response = await fetch('https://api.okayglow.co/journal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                // Display the new entry
                displayJournalEntry(data);
                // Reset the form
                entryDate.value = '';
                entryContent.value = '';
                moodButtons.forEach(b => b.classList.remove('active'));
                selectedMood = null;
            } else {
                alert(data.error || 'There was an issue saving your entry. Please try again.');
            }
        } catch (error) {
            console.error('Error saving journal entry:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    });

    /**
     * Displays a journal entry on the page.
     * @param {Object} entry - The journal entry object.
     */
    function displayJournalEntry(entry) {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('journal-entry');

        entryDiv.innerHTML = `
            <h3>${entry.date}</h3>
            <p>${entry.content}</p>
            ${entry.mood ? `<span class="mood">${entry.mood}</span>` : ''}
        `;

        journalEntries.prepend(entryDiv);
    }

    /**
     * Fetches and displays all journal entries for the authenticated user.
     */
    async function loadJournalEntries() {
        const token = localStorage.getItem('jwt');
        if (!token) {
            // Optionally, display a prompt or message to log in
            return;
        }

        try {
            const response = await fetch('https://api.okayglow.co/journal', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                data.entries.forEach(entry => displayJournalEntry(entry));
            } else {
                console.error('Failed to load journal entries:', data.error);
            }
        } catch (error) {
            console.error('Error fetching journal entries:', error);
        }
    }

    // Load journal entries on page load if user is authenticated
    loadJournalEntries();

    /*** 5. Breathing Exercise ***/
    const breathingCircle = document.querySelector('.breathing-circle');
    const breathingButton = document.querySelector('.start-breathing');
    
    let isBreathing = false;
    let animationFrame;
    let currentScale = 1; // Keeps track of the current scale

    const easeOutQuad = (t) => t * (2 - t); // Quadratic easing for smooth transitions

    const resetBreathingCircle = () => {
        const targetScale = 1; // Reset to the original size
        const scaleDiff = currentScale - targetScale;

        // Smooth transition back
        const duration = 1400; // 1400ms for a smooth reset
        const stepTime = 16; // Roughly matches 60 FPS
        const steps = duration / stepTime;
        let currentStep = 0;

        const smoothStep = () => {
            currentStep++;
            const progress = easeOutQuad(currentStep / steps); // Apply easing function
            currentScale = targetScale + scaleDiff * (1 - progress); // Calculate eased scale
            breathingCircle.style.transform = `scale(${currentScale})`;

            if (currentStep < steps) {
                animationFrame = requestAnimationFrame(smoothStep);
            } else {
                breathingCircle.style.transform = `scale(${targetScale})`;
                cancelAnimationFrame(animationFrame);
            }
        };

        animationFrame = requestAnimationFrame(smoothStep);
    };

    breathingButton.addEventListener('click', () => {
        if (!isBreathing) {
            // Start the breathing animation
            breathingCircle.style.animation = "breathe 8s infinite ease-in-out";
            breathingButton.textContent = "Stop";
        } else {
            // Stop the animation and smoothly return to the default state
            const computedStyle = window.getComputedStyle(breathingCircle);
            const transformMatrix = computedStyle.transform;

            // Extract current scale from the transform matrix
            if (transformMatrix !== "none") {
                const matrixValues = transformMatrix.match(/matrix.*\((.+)\)/)[1].split(", ");
                currentScale = parseFloat(matrixValues[0]); // Scale is the first value
            } else {
                currentScale = 1; // Default scale
            }

            breathingCircle.style.animation = "none"; // Stop animation
            resetBreathingCircle(); // Smoothly return to default state
            breathingButton.textContent = "Start";
        }

        isBreathing = !isBreathing;
    });

    /*** 6. Affirmations ***/
    const affirmations = [
        "I am grateful for my unique journey",
        "I radiate peace and positivity",
        "My creativity flows freely and effortlessly",
        "I am strong, capable, and confident",
        "I attract only good things into my life",
        "My inner light shines brightly",
        "I deserve love, happiness, and abundance",
        "I release all negativity and embrace joy",
        "Every day, I am becoming the best version of myself",
        "I choose to focus on the good in every situation",
        "My heart is full of gratitude and peace",
        "I trust the process of life and embrace change",
        "I am proud of how far I have come",
        "I have the power to create the life I want",
        "I am calm, centered, and in control",
        "I love and accept myself unconditionally",
        "I see beauty and goodness in the world around me",
        "I am resilient, and I overcome challenges with ease",
        "My mind is filled with positive and nourishing thoughts",
        "I am surrounded by love and support",
        "I deserve to take care of myself and my needs",
        "Happiness is my natural state",
        "I am grateful for the simple joys in life",
        "I am at peace with who I am",
        "I choose to let go of what no longer serves me",
        "I welcome opportunities for growth and learning",
        "I am worthy of all the good that life has to offer",
        "My dreams and goals are within reach",
        "I approach life with curiosity and wonder",
        "I am a beacon of light and positivity"
    ];

    const affirmationText = document.querySelector('.affirmation-text');
    const newAffirmationBtn = document.querySelector('.new-affirmation');

    newAffirmationBtn.addEventListener('click', () => {
        const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        affirmationText.textContent = `"${newAffirmation}"`;
    });

    /*** 7. Login/Logout Button Functionality ***/

    /**
     * Decodes a JWT token and returns the payload.
     * @param {string} token - The JWT token.
     * @returns {Object|null} - The decoded payload or null if invalid.
     */
    function decodeJWT(token) {
        try {
            const payload = token.split('.')[1];
            const decoded = atob(payload);
            return JSON.parse(decoded);
        } catch (e) {
            console.error('Failed to decode JWT:', e);
            return null;
        }
    }

    /**
     * Updates the user email display based on the JWT token.
     */
    function updateUserEmail() {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decoded = decodeJWT(token);
            if (decoded && decoded.sub) {
                // Assuming 'sub' contains the user ID. Fetch user info from the backend if needed.
                // For simplicity, display the email if stored in the token.
                // Modify this based on your JWT payload structure.
                userEmailSpan.textContent = 'User'; // Replace with actual user info if available
                userEmailSpan.style.display = 'inline';
            }
        } else {
            userEmailSpan.textContent = '';
            userEmailSpan.style.display = 'none';
        }
    }

    /**
     * Updates the authentication button based on the user's login status.
     */
    function updateAuthButton() {
        const token = localStorage.getItem('jwt');
        if (token) {
            authButton.textContent = 'Logout';
            authButton.removeEventListener('click', showLoginModal);
            authButton.addEventListener('click', logout);
            userEmailSpan.style.display = 'inline';
            updateUserEmail();
        } else {
            authButton.textContent = 'Login';
            authButton.removeEventListener('click', logout);
            authButton.addEventListener('click', showLoginModal);
            userEmailSpan.style.display = 'none';
        }
    }

    /**
     * Shows the login modal.
     */
    function showLoginModal() {
        loginModal.style.display = 'block';
    }

    /**
     * Handles the logout process.
     */
    function logout() {
        localStorage.removeItem('jwt');
        displayResponse(loginResponse, 'You have been logged out.', 'success');
        updateAuthButton();
        journalEntries.innerHTML = ''; // Optionally clear journal entries
    }

    // Initial update of the auth button on page load
    updateAuthButton();
});
