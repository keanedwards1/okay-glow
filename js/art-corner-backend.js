// /js/art-corner-backend.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed"); // Debugging

    /*** 1. Tab Navigation ***/
    const tabButtons = document.querySelectorAll('.tab-button');
    const artSections = document.querySelectorAll('.art-section');

    if (tabButtons.length === 0 || artSections.length === 0) {
        console.error("Tab navigation elements are missing");
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Debugging
            console.log(`Tab clicked: ${button.dataset.tab}`);

            // Handle active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            artSections.forEach(s => s.classList.remove('active'));

            button.classList.add('active');
            const targetSection = document.getElementById(`${button.dataset.tab}-section`);
            if (targetSection) {
                targetSection.classList.add('active');
            } else {
                console.error(`Section with ID ${button.dataset.tab}-section not found`);
            }
        });
    });

    /*** 2. Authentication ***/
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const authButton = document.getElementById('auth-button');
    const userEmailSpan = document.getElementById('user-email');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Response message elements
    const loginResponse = document.getElementById('login-response');
    const registerResponse = document.getElementById('register-response');

    function showModal(modal) {
        if (!modal) {
            console.error("Modal element is missing");
            return;
        }
        modal.style.display = 'block';
    }

    function hideModal(modal) {
        if (!modal) {
            console.error("Modal element is missing");
            return;
        }
        modal.style.display = 'none';
    }

    // Handle modal transitions
    const openRegister = document.getElementById('open-register');
    const openLogin = document.getElementById('open-login');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');

    if (openRegister) {
        openRegister.addEventListener('click', () => {
            hideModal(loginModal);
            showModal(registerModal);
        });
    } else {
        console.error("Open Register button is missing");
    }

    if (openLogin) {
        openLogin.addEventListener('click', () => {
            hideModal(registerModal);
            showModal(loginModal);
        });
    } else {
        console.error("Open Login button is missing");
    }

    if (closeLogin) {
        closeLogin.addEventListener('click', () => hideModal(loginModal));
    } else {
        console.error("Close Login button is missing");
    }

    if (closeRegister) {
        closeRegister.addEventListener('click', () => hideModal(registerModal));
    } else {
        console.error("Close Register button is missing");
    }

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) hideModal(loginModal);
        if (e.target === registerModal) hideModal(registerModal);
    });

    // Update login/logout button
    function updateAuthButton() {
        if (!authButton || !userEmailSpan) {
            console.error("Auth button or user email span is missing");
            return;
        }

        const token = localStorage.getItem('jwt');
        if (token) {
            authButton.textContent = 'Logout';
            authButton.onclick = logout;
            userEmailSpan.style.display = 'inline';
            userEmailSpan.textContent = 'User'; // Replace with actual user email if needed
        } else {
            authButton.textContent = 'Login';
            authButton.onclick = () => showModal(loginModal);
            userEmailSpan.style.display = 'none';
        }
    }

    // Logout functionality
    function logout() {
        console.log("Logging out");
        localStorage.removeItem('jwt');
        updateAuthButton();
        if (loginResponse) {
            loginResponse.textContent = 'You have been logged out.';
            loginResponse.className = 'response-success';
        }
        if (registerResponse) {
            registerResponse.textContent = '';
            registerResponse.className = '';
        }
        // Optionally, clear journal entries or other user-specific data
    }

    // Handle authentication form submissions
    async function handleAuthForm(e, url, form) {
        e.preventDefault();

        const email = form.querySelector('[name="email"]')?.value.trim();
        const password = form.querySelector('[name="password"]')?.value.trim();
        const name = form.querySelector('[name="name"]')?.value.trim(); // For registration

        if (url === 'register' && !name) {
            displayResponse(registerResponse, 'Please enter your name.', 'error');
            return;
        }

        if (!email || !password) {
            const responseElement = (url === 'login') ? loginResponse : registerResponse;
            displayResponse(responseElement, 'Please fill in all required fields.', 'error');
            return;
        }

        try {
            const payload = (url === 'register') ? { name, email, password } : { email, password };

            // Show spinner
            const spinner = (url === 'login') ? document.getElementById('login-spinner') : document.getElementById('register-spinner');
            if (spinner) spinner.style.display = 'block';

            const response = await fetch(`https://api.okayglow.co/${url}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // Hide spinner
            if (spinner) spinner.style.display = 'none';

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('jwt', data.token);
                updateAuthButton();
                const responseElement = (url === 'login') ? loginResponse : registerResponse;
                displayResponse(responseElement, `${capitalizeFirstLetter(url)} successful!`, 'success');
                hideModal(loginModal);
                hideModal(registerModal);
                loadJournalEntries(); // Fetch journal entries after login/register
            } else {
                const responseElement = (url === 'login') ? loginResponse : registerResponse;
                displayResponse(responseElement, data.error || 'An error occurred.', 'error');
            }
        } catch (error) {
            console.error(`Error during ${url}:`, error);
            const responseElement = (url === 'login') ? loginResponse : registerResponse;
            displayResponse(responseElement, 'Unexpected error occurred.', 'error');
        }
    }

    // Add form listeners
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => handleAuthForm(e, 'login', loginForm));
    } else {
        console.error("Login form is missing");
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => handleAuthForm(e, 'register', registerForm));
    } else {
        console.error("Register form is missing");
    }

    function displayResponse(element, message, type) {
        if (!element) {
            console.error("Response element is missing");
            return;
        }
        element.textContent = message;
        element.className = type === 'success' ? 'response-success' : 'response-error';
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Initial button update
    updateAuthButton();

    /*** 3. Pixel Canvas ***/
    const canvas = document.getElementById('pixel-canvas');
    const ctx = canvas?.getContext('2d');
    const colorPicker = document.getElementById('pixel-color');
    const cooldownDisplay = document.querySelector('.cooldown span');
    const userCountDisplay = document.querySelector('.user-count');

    const PIXEL_SIZE = 10;
    let cooldown = 0;
    let cooldownInterval;

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

    // Handle Canvas Clicks
    canvas?.addEventListener('click', (e) => {
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

    function updateCooldownDisplay() {
        if (cooldownDisplay) {
            cooldownDisplay.textContent = cooldown > 0 ? `${cooldown}s` : '0s';
        }
    }

    function drawPixel(x, y, color) {
        if (ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        } else {
            console.error("Canvas context not available");
        }
    }

    /*** 4. Journal Integration ***/
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
    saveEntryBtn?.addEventListener('click', async () => {
        const date = entryDate.value;
        const content = entryContent.value.trim();

        if (!date || !content) {
            alert('Please fill in all required fields.');
            return;
        }

        const token = localStorage.getItem('jwt');
        if (!token) {
            // Prompt the login modal instead of alerting
            showModal(loginModal);
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
                if (Array.isArray(data.entries)) {
                    data.entries.forEach(entry => displayJournalEntry(entry));
                } else {
                    console.error('Failed to load journal entries: entries is not an array');
                }
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

    breathingButton?.addEventListener('click', () => {
        if (!breathingCircle) {
            console.error("Breathing circle element is missing");
            return;
        }

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

    newAffirmationBtn?.addEventListener('click', () => {
        const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        if (affirmationText) {
            affirmationText.textContent = `"${newAffirmation}"`;
        } else {
            console.error("Affirmation text element is missing");
        }
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
        if (token && userEmailSpan) {
            const decoded = decodeJWT(token);
            if (decoded && decoded.sub) {
                // Assuming 'sub' contains the user ID. Modify as needed.
                userEmailSpan.textContent = 'User'; // Replace with actual user info if available
                userEmailSpan.style.display = 'inline';
            }
        } else {
            if (userEmailSpan) {
                userEmailSpan.textContent = '';
                userEmailSpan.style.display = 'none';
            }
        }
    }

    // Initial update of the auth button on page load
    updateAuthButton();
});
