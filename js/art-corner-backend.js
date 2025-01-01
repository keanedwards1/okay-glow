// /js/art-corner-enhanced.js

document.addEventListener('DOMContentLoaded', () => {
    /*** User Authentication Handling ***/
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
            const response = await fetch('https://api.okayglow.co/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Store JWT in localStorage
                localStorage.setItem('jwt', data.token);
                displayResponse(loginResponse, 'Login successful!', 'success');
                loginForm.reset();
                loginModal.style.display = 'none';
                loadJournalEntries(); // Fetch journal entries after login
            } else {
                displayResponse(loginResponse, data.error || 'Login failed. Please try again.', 'error');
            }
        } catch (error) {
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
            const response = await fetch('https://api.okayglow.co/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Store JWT in localStorage
                localStorage.setItem('jwt', data.token);
                displayResponse(registerResponse, 'Registration successful!', 'success');
                registerForm.reset();
                registerModal.style.display = 'none';
                loadJournalEntries(); // Fetch journal entries after registration
            } else {
                displayResponse(registerResponse, data.error || 'Registration failed. Please try again.', 'error');
            }
        } catch (error) {
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

    /*** Pixel Canvas Integration ***/
    const canvas = document.getElementById('pixel-canvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('pixel-color');
    const cooldownDisplay = document.querySelector('.cooldown span');
    const userCountDisplay = document.querySelector('.user-count');

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

    // Handle Canvas Clicks
    canvas.addEventListener('click', (e) => {
        if (cooldown > 0) {
            alert(`Please wait ${cooldown} seconds before placing another pixel.`);
            return;
        }

        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / 10); // Assuming each pixel is 10x10
        const y = Math.floor((e.clientY - rect.top) / 10);
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
        ctx.fillRect(x * 10, y * 10, 10, 10); // Assuming each pixel is 10x10
    }

    /*** Gratitude Journal Integration ***/
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
            alert('Please log in to submit journal entries.');
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
            // Optionally, you can display a prompt to log in
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
});
