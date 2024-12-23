 // /js/art-corner.js      
       
       // Tab Navigation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and sections
                document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.art-section').forEach(s => s.classList.remove('active'));

                // Add active class to clicked button and corresponding section
                button.classList.add('active');
                document.getElementById(`${button.dataset.tab}-section`).classList.add('active');
            });
        });

        // Pixel Canvas WebSocket Setup
        const canvas = document.getElementById('pixel-canvas');
        const ctx = canvas.getContext('2d');
        const ws = new WebSocket('ws://your-websocket-server');
        const PIXEL_SIZE = 10;
        let cooldown = false;

        // Initialize canvas
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // WebSocket event handlers
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'pixel') {
                drawPixel(data.x, data.y, data.color);
            } else if (data.type === 'users') {
                updateUserCount(data.count);
            }
        };

        // Canvas click handler
        canvas.addEventListener('click', (e) => {
            if (cooldown) return;

            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / PIXEL_SIZE) * PIXEL_SIZE;
            const y = Math.floor((e.clientY - rect.top) / PIXEL_SIZE) * PIXEL_SIZE;
            const color = document.getElementById('pixel-color').value;

            ws.send(JSON.stringify({
                type: 'pixel',
                x: x,
                y: y,
                color: color
            }));

            // Start cooldown
            cooldown = true;
            startCooldown();
        });

        // Breathing Exercise
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
            const duration = 1400; // 500ms
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


        // Affirmations
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

        document.querySelector('.new-affirmation').addEventListener('click', () => {
            const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
            document.querySelector('.affirmation-text').textContent = `"${newAffirmation}"`;
        });