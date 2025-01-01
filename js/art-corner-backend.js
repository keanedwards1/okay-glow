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
                console.log(`${url} successful`);
                localStorage.setItem('jwt', data.token);
                updateAuthButton();
                displayResponse(form.querySelector('.response-message'), `${url} successful!`, 'success');
                hideModal(loginModal);
                hideModal(registerModal);
            } else {
                displayResponse(form.querySelector('.response-message'), data.error || 'Error occurred.', 'error');
            }
        } catch (error) {
            console.error("Authentication error", error);
            displayResponse(form.querySelector('.response-message'), 'Unexpected error occurred.', 'error');
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

    // Initial button update
    updateAuthButton();
});
