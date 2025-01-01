document.addEventListener('DOMContentLoaded', () => {
    /*** 1. Tab Navigation ***/
    const tabButtons = document.querySelectorAll('.tab-button');
    const artSections = document.querySelectorAll('.art-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Handle active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            artSections.forEach(s => s.classList.remove('active'));

            button.classList.add('active');
            const targetSection = document.getElementById(`${button.dataset.tab}-section`);
            if (targetSection) targetSection.classList.add('active');
        });
    });

    /*** 2. Authentication ***/
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const authButton = document.getElementById('auth-button');
    const userEmailSpan = document.getElementById('user-email');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    function showModal(modal) {
        if (modal) modal.style.display = 'block';
    }

    function hideModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    // Handle modal transitions
    document.getElementById('open-register')?.addEventListener('click', () => {
        hideModal(loginModal);
        showModal(registerModal);
    });

    document.getElementById('open-login')?.addEventListener('click', () => {
        hideModal(registerModal);
        showModal(loginModal);
    });

    document.getElementById('close-login')?.addEventListener('click', () => hideModal(loginModal));
    document.getElementById('close-register')?.addEventListener('click', () => hideModal(registerModal));

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) hideModal(loginModal);
        if (e.target === registerModal) hideModal(registerModal);
    });

    // Update login/logout button
    function updateAuthButton() {
        if (!authButton || !userEmailSpan) return; // Ensure elements exist
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
        localStorage.removeItem('jwt');
        updateAuthButton();
        const loginResponse = document.getElementById('login-response');
        if (loginResponse) {
            loginResponse.textContent = 'You have been logged out.';
        }
    }

    // Handle authentication form submissions
    async function handleAuthForm(e, url, form) {
        e.preventDefault();

        const email = form.querySelector('[name="email"]')?.value.trim();
        const password = form.querySelector('[name="password"]')?.value.trim();

        if (!email || !password) {
            displayResponse(form.querySelector('.response-message'), 'Please fill in all fields.', 'error');
            return;
        }

        try {
            const response = await fetch(`https://api.okayglow.co/${url}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('jwt', data.token);
                updateAuthButton();
                displayResponse(form.querySelector('.response-message'), `${url} successful!`, 'success');
                hideModal(loginModal);
                hideModal(registerModal);
            } else {
                displayResponse(form.querySelector('.response-message'), data.error || 'Error occurred.', 'error');
            }
        } catch (error) {
            displayResponse(form.querySelector('.response-message'), 'Unexpected error occurred.', 'error');
        }
    }

    // Add form listeners
    loginForm?.addEventListener('submit', (e) => handleAuthForm(e, 'login', loginForm));
    registerForm?.addEventListener('submit', (e) => handleAuthForm(e, 'register', registerForm));

    function displayResponse(element, message, type) {
        if (!element) return;
        element.textContent = message;
        element.className = type === 'success' ? 'response-success' : 'response-error';
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

    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'pixel') drawPixel(message.x, message.y, message.color);
        else if (message.type === 'user_count') userCountDisplay.textContent = message.count;
    });

    canvas?.addEventListener('click', (e) => {
        if (cooldown > 0) return;

        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / PIXEL_SIZE);
        const y = Math.floor((e.clientY - rect.top) / PIXEL_SIZE);
        const color = colorPicker.value;

        socket.send(JSON.stringify({ type: 'pixel', x, y, color }));

        cooldown = 5;
        updateCooldownDisplay();
        cooldownInterval = setInterval(() => {
            cooldown--;
            if (cooldown <= 0) clearInterval(cooldownInterval);
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
        }
    }

    /*** 4. Journal Integration ***/
    async function loadJournalEntries() {
        const token = localStorage.getItem('jwt');
        if (!token) return;

        try {
            const response = await fetch('https://api.okayglow.co/journal', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            });

            const data = await response.json();
            if (response.ok) {
                // Render entries (add your logic here)
            }
        } catch (error) {
            console.error('Error fetching journal entries:', error);
        }
    }

    loadJournalEntries();
});
