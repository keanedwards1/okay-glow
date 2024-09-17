  // /js/quiz.js

  const questions = [
    {
      id: 1,
      text: "How would you describe your skin type?",
      type: "single",
      options: [
        { value: "Oily", text: "Oily: Shiny all over, prone to breakouts", image: "/oily.jpg" },
        { value: "Dry", text: "Dry: Tight, flaky, sometimes rough", image: "/dry.jpg" },
        { value: "Combination", text: "Combination: Oily T-zone, normal or dry cheeks", image: "/combination.jpg" },
        { value: "Sensitive", text: "Sensitive: Easily irritated, prone to redness", image: "/sensitive.jpg" },
        { value: "Normal", text: "Normal: Neither too oily nor too dry", image: "/normal.jpg" },
      ],
    },
    {
      id: 2,
      text: "What climate are you in?",
      type: "single",
      options: [
        { value: "Humid", text: "Humid", image: "/humid.jpg" },
        { value: "Dry", text: "Dry", image: "/dry.jpg" },
        { value: "Temperate", text: "Temperate", image: "/temperate.jpg" },
        { value: "Cold", text: "Cold", image: "/cold.jpg" },
        { value: "Tropical", text: "Tropical", image: "/tropical.jpg" },
      ],
    },
    {
      id: 3,
      text: "How old are you?",
      type: "single",
      options: [
        { value: "Under 18", text: "Under 18", image: "/under18.jpg" },
        { value: "18-24", text: "18-24", image: "/18-24.jpg" },
        { value: "25-34", text: "25-34", image: "/25-34.jpg" },
        { value: "35-44", text: "35-44", image: "/35-44.jpg" },
        { value: "45-54", text: "45-54", image: "/45-54.jpg" },
        { value: "55+", text: "55+", image: "/55plus.jpg" },
      ],
    },
    {
      id: 4,
      text: "What's your main skin concern right now?",
      type: "multiple",
      options: [
        { value: "Acne", text: "Acne or breakouts", image: "/acne.jpg" },
        { value: "Fine Lines", text: "Fine lines or wrinkles", image: "/wrinkles.jpg" },
        { value: "Uneven Skin Tone", text: "Uneven skin tone or dark spots", image: "/uneven.jpg" },
        { value: "Dryness", text: "Dryness or flakiness", image: "/dryness.jpg" },
        { value: "Excess Oil", text: "Excess oil or shine", image: "/oil.jpg" },
        { value: "Pores", text: "Large pores", image: "/pores.jpg" },
        { value: "Redness", text: "Redness or irritation", image: "/redness.jpg" },
        { value: "Dullness", text: "Dullness or lack of glow", image: "/dullness.jpg" },
      ],
    },
    {
      id: 5,
      text: "How much sun exposure does your skin typically get?",
      type: "single",
      options: [
        { value: "Minimal", text: "Minimal: Mostly indoors", image: "/indoors.jpg" },
        { value: "Low", text: "Low: Short periods outside", image: "/low.jpg" },
        { value: "Moderate", text: "Moderate: Regular outdoor activities", image: "/moderate.jpg" },
        { value: "High", text: "High: Outdoor job or hobby", image: "/high.jpg" },
      ],
    },
    {
      id: 6,
      text: "What products do you use right now?",
      type: "multiple",
      options: [
        { value: "Cleanser", text: "Cleanser", image: "/cleanser.jpg" },
        { value: "Toner", text: "Toner", image: "/toner.jpg" },
        { value: "Serum", text: "Serum", image: "/serum.jpg" },
        { value: "Moisturizer", text: "Moisturizer", image: "/moisturizer.jpg" },
        { value: "Sunscreen", text: "Sunscreen", image: "/sunscreen.jpg" },
        { value: "Acne Treatment", text: "Acne treatment", image: "/acne_treatment.jpg" },
        { value: "Retinoid", text: "Retinoid", image: "/retinoid.jpg" },
        { value: "Exfoliant", text: "Exfoliant", image: "/exfoliant.jpg" },
        { value: "Other", text: "Other (please specify)", image: "/other.jpg" },
      ],
    },
    {
      id: 7,
      text: "How often are you stressed out?",
      type: "single",
      options: [
        { value: "Rarely", text: "Rarely", image: "/rarely.jpg" },
        { value: "Sometimes", text: "Sometimes", image: "/sometimes.jpg" },
        { value: "Often", text: "Often", image: "/often.jpg" },
        { value: "Always", text: "Always", image: "/always.jpg" },
      ],
    },
    {
      id: 8,
      text: "How many hours of sleep do you get a night?",
      type: "single",
      options: [
        { value: "Less than 4 hours", text: "Less than 4 hours", image: "/less4.jpg" },
        { value: "4-6 hours", text: "4-6 hours", image: "/4-6.jpg" },
        { value: "6-8 hours", text: "6-8 hours", image: "/6-8.jpg" },
        { value: "More than 8 hours", text: "More than 8 hours", image: "/8plus.jpg" },
      ],
    },
    {
      id: 9,
      text: "Are you currently:",
      type: "multiple",
      options: [
        { value: "Pregnant", text: "Pregnant", image: "/pregnant.jpg" },
        { value: "Trying to get pregnant", text: "Trying to get pregnant", image: "/trying.jpg" },
        { value: "Recent birth", text: "Gave birth within the last 12 months", image: "/recent_birth.jpg" },
        { value: "Menopause", text: "Experiencing menopause, perimenopause, or andropause", image: "/menopause.jpg" },
        { value: "Diabetic", text: "Diabetic or hypoglycemic", image: "/diabetic.jpg" },
        { value: "None", text: "None of the above", image: "/none.jpg" },
      ],
    },
    {
      id: 10,
      text: "How does your skin feel in the morning before washing your face?",
      type: "single",
      options: [
        { value: "Oily", text: "Oily", image: "/oily.jpg" },
        { value: "Dry", text: "Dry", image: "/dry.jpg" },
        { value: "Normal", text: "Normal", image: "/normal.jpg" },
        { value: "Sensitive", text: "Sensitive", image: "/sensitive.jpg" },
        { value: "Combination", text: "Combination", image: "/combination.jpg" },
      ],
    },
    {
      id: 11,
      text: "How does your face feel right after you wash it?",
      type: "single",
      options: [
        { value: "Tight", text: "Tight", image: "/tight.jpg" },
        { value: "Smooth", text: "Smooth", image: "/smooth.jpg" },
        { value: "Dry", text: "Dry", image: "/dry.jpg" },
        { value: "Normal", text: "Normal", image: "/normal.jpg" },
        { value: "Oily", text: "Oily", image: "/oily.jpg" },
      ],
    },
    {
      id: 12,
      text: "How much time can you dedicate to your skincare routine?",
      type: "single",
      options: [
        { value: "1-2 minutes", text: "1-2 minutes: Quick and simple", image: "/quick.jpg" },
        { value: "5-10 minutes", text: "5-10 minutes: A bit more thorough", image: "/thorough.jpg" },
        { value: "15-20 minutes", text: "15-20 minutes: Enjoy a more extensive routine", image: "/extensive.jpg" },
        { value: "30+ minutes", text: "30+ minutes: Love to indulge in skincare", image: "/indulge.jpg" },
      ],
    },
    {
      id: 13,
      text: "Are there any ingredients your skin doesn't agree with?",
      type: "multiple",
      options: [
        { value: "Fragrance", text: "Fragrance", image: "/fragrance.jpg" },
        { value: "Essential Oils", text: "Essential oils", image: "/essential_oils.jpg" },
        { value: "Alcohol", text: "Alcohol", image: "/alcohol.jpg" },
        { value: "Silicones", text: "Silicones", image: "/silicones.jpg" },
        { value: "Sulfates", text: "Sulfates", image: "/sulfates.jpg" },
        { value: "Parabens", text: "Parabens", image: "/parabens.jpg" },
        { value: "Other", text: "Other (please specify)", image: "/other.jpg" },
        { value: "No known sensitivities", text: "No known sensitivities", image: "/no_sensitivities.jpg" },
      ],
    },
    {
      id: 14,
      text: "Have you used any of these active ingredients before?",
      type: "multiple",
      options: [
        { value: "Retinol", text: "Retinol", image: "/retinol.jpg" },
        { value: "Vitamin C", text: "Vitamin C", image: "/vitamin_c.jpg" },
        { value: "AHAs", text: "AHAs (like glycolic acid)", image: "/ahas.jpg" },
        { value: "BHAs", text: "BHAs (like salicylic acid)", image: "/bhas.jpg" },
        { value: "Niacinamide", text: "Niacinamide", image: "/niacinamide.jpg" },
        { value: "Hyaluronic acid", text: "Hyaluronic acid", image: "/hyaluronic_acid.jpg" },
        { value: "None", text: "None of these", image: "/none.jpg" },
      ],
    },
    {
      id: 15,
      text: "What's your skincare budget range (for a complete routine)?",
      type: "single",
      options: [
        { value: "Under $50", text: "Under $50", image: "/under50.jpg" },
        { value: "$50-$100", text: "$50-$100", image: "/50-100.jpg" },
        { value: "$100-$200", text: "$100-$200", image: "/100-200.jpg" },
        { value: "$200+", text: "$200+", image: "/200plus.jpg" },
      ],
    },
    {
      id: 16,
      text: "Which best describes your typical day?",
      type: "single",
      options: [
        { value: "Early riser", text: "Early riser, busy days", image: "/early_riser.jpg" },
        { value: "Standard 9-5 schedule", text: "Standard 9-5 schedule", image: "/9-5.jpg" },
        { value: "Night owl", text: "Night owl, late sleeper", image: "/night_owl.jpg" },
        { value: "Irregular schedule", text: "Irregular schedule, shift work", image: "/shift_work.jpg" },
      ],
    },
    {
      id: 17,
      text: "Are you currently using any of the following?",
      type: "multiple",
      options: [
        { value: "Acne medications", text: "Acne medications", image: "/acne_medications.jpg" },
        { value: "Prescription retinoids", text: "Prescription retinoids", image: "/prescription_retinoids.jpg" },
        { value: "Oral contraceptives", text: "Oral contraceptives", image: "/oral_contraceptives.jpg" },
        { value: "Hormone treatments", text: "Hormone treatments", image: "/hormone_treatments.jpg" },
        { value: "None", text: "None of the above", image: "/none.jpg" },
      ],
    },
    {
      id: 18,
      text: "What's your primary skincare goal?",
      type: "single",
      options: [
        { value: "Achieve a natural, healthy glow", text: "Achieve a natural, healthy glow", image: "/healthy_glow.jpg" },
        { value: "Reduce signs of aging", text: "Reduce signs of aging", image: "/reduce_aging.jpg" },
        { value: "Clear up acne or breakouts", text: "Clear up acne or breakouts", image: "/clear_acne.jpg" },
        { value: "Even out skin tone", text: "Even out skin tone", image: "/even_tone.jpg" },
        { value: "Hydrate and nourish dry skin", text: "Hydrate and nourish dry skin", image: "/hydrate.jpg" },
        { value: "Control oil and shine", text: "Control oil and shine", image: "/control_oil.jpg" },
      ],
    },
    {
      id: 19,
      text: "How do you feel about fragrances in your products?",
      type: "single",
      options: [
        { value: "Prefer fragranced products", text: "Prefer fragranced products", image: "/prefer_fragrance.jpg" },
        { value: "Enjoy light, natural scents", text: "Enjoy light, natural scents", image: "/light_scent.jpg" },
        { value: "Prefer unscented products", text: "Prefer unscented products", image: "/unscented.jpg" },
        { value: "No preference", text: "No preference", image: "/no_preference.jpg" },
      ],
    },
    {
      id: 20,
      text: "How important is using eco-friendly and sustainable products to you?",
      type: "single",
      options: [
        { value: "Very important", text: "Very important, it's a top priority", image: "/very_important.jpg" },
        { value: "Somewhat important", text: "Somewhat important, I consider it", image: "/somewhat_important.jpg" },
        { value: "Not a deciding factor", text: "Not a deciding factor for me", image: "/not_deciding.jpg" },
      ],
    },
    {
      id: 21,
      text: "Are there any specific areas of your face that need extra attention?",
      type: "multiple",
      options: [
        { value: "Forehead", text: "Forehead", image: "/forehead.jpg" },
        { value: "Nose and surrounding area", text: "Nose and surrounding area", image: "/nose.jpg" },
        { value: "Cheeks", text: "Cheeks", image: "/cheeks.jpg" },
        { value: "Chin and jawline", text: "Chin and jawline", image: "/chin_jawline.jpg" },
        { value: "Under-eye area", text: "Under-eye area", image: "/under_eye.jpg" },
        { value: "No specific areas", text: "No specific areas", image: "/none.jpg" },
      ],
    },
    {
      id: 22,
      text: "How does your skin react to changes in seasons or travel?",
      type: "multiple",
      options: [
        { value: "Becomes drier", text: "Becomes drier", image: "/drier.jpg" },
        { value: "Becomes oilier", text: "Becomes oilier", image: "/oilier.jpg" },
        { value: "More prone to breakouts", text: "More prone to breakouts", image: "/breakouts.jpg" },
        { value: "More sensitive or irritated", text: "More sensitive or irritated", image: "/sensitive_irritated.jpg" },
        { value: "No significant changes", text: "No significant changes", image: "/no_changes.jpg" },
      ],
    },
    {
      id: 23,
      text: "Are you interested in multi-use products that can simplify your routine?",
      type: "single",
      options: [
        { value: "Very interested", text: "Very interested, I love multitasking products", image: "/very_interested.jpg" },
        { value: "Somewhat interested", text: "Somewhat interested, depends on the product", image: "/somewhat_interested.jpg" },
        { value: "Prefer separate products", text: "Prefer separate products for each step", image: "/separate_products.jpg" },
      ],
    },
  ];
  

// Variables to store the current question index and answers
let currentQuestionIndex = 0;
let answers = {};

// DOM elements
const introContainer = document.getElementById('introContainer');
const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quizContainer');

const quizContent = document.getElementById("quizContent");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progress");
let nextBtn = document.getElementById("nextBtn");  // Changed to 'let' for reassignment
const prevBtn = document.getElementById("prevBtn");

// Start button event listener
startBtn.addEventListener('click', () => {
    introContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    document.body.classList.remove('intro-active'); // Remove overflow hidden
    renderQuestion();
    updateProgress(); // Initialize the progress bar
});

// Define the handleEnterKey function outside renderQuestion
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission behavior
        if (!isOptionSelected()) {
            showToast('Please select an option');
            return;
        }
        nextBtn.click();
    }
}

// Handle Next button click
function handleNextButtonClick() {
    if (!isOptionSelected()) {
        showToast('Please select an option');
        return;
    }

    // Save the user's answers for the current question
    saveAnswer();

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateProgress();
        renderQuestion();
    } else {
        // Finish the quiz
        submitQuiz();
    }
}

// Attach the click event listener to the Next button
nextBtn.addEventListener('click', handleNextButtonClick);

// Previous button event listener
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateProgress();
        renderQuestion();
    } else {
        // Show the intro view and hide the quiz
        quizContainer.style.display = 'none';
        introContainer.style.display = 'flex';
        document.body.classList.add('intro-active'); // Add back the intro-active class
    }
});

// Function to render the current question
function renderQuestion() {
    // Remove existing event listeners to prevent stacking
    document.removeEventListener('keydown', handleEnterKey);

    // Fade out the content
    quizContent.classList.add('fade-out');

    quizContent.addEventListener('transitionend', function handler() {
        // Remove the event listener to prevent stacking
        quizContent.removeEventListener('transitionend', handler);

        // Update the content after fade-out
        const question = questions[currentQuestionIndex];

        // Build the new content
        let quizHtml = `<h2>${question.text}</h2>`;

        question.options.forEach((option) => {
            quizHtml += `
                <label class="option">
                    <input type="${question.type === 'multiple' ? 'checkbox' : 'radio'}" name="question-${question.id}" value="${option.value}">
                    <span class="option-text">${option.text}</span>
                </label>`;
        });

        // Update the quiz content
        quizContent.innerHTML = quizHtml;

        // Disable or enable the "Previous" button
        if (currentQuestionIndex === 0) {
            prevBtn.disabled = true;
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.disabled = false;
            prevBtn.classList.remove('disabled');
        }

        // Change "Next" button to "Finish" on the last question
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Continue';

        // Add tooltip to the Next button
        addTooltipToNextButton();

        // Reassign nextBtn after DOM manipulation
        nextBtn = document.getElementById('nextBtn');

        // Reattach the click event listener to the Next button
        nextBtn.removeEventListener('click', handleNextButtonClick); // Remove any existing listener
        nextBtn.addEventListener('click', handleNextButtonClick);

        // Add event listeners to inputs
        const inputs = document.querySelectorAll(`input[name="question-${question.id}"]`);
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                // Visually indicate selection if needed
            });
        });

        // Add event listener to detect Enter key
        document.addEventListener('keydown', handleEnterKey);

        // Force reflow to restart the animation
        void quizContent.offsetWidth;

        // Fade in the content
        quizContent.classList.remove('fade-out');
    });
}

function addTooltipToNextButton() {
  // Retrieve the tooltip display count from sessionStorage, defaulting to 0 if not set
  let tooltipDisplayCount = parseInt(sessionStorage.getItem('tooltipDisplayCount')) || 0;

  if (tooltipDisplayCount < 2) {
      // Wrap the Next button in a tooltip container if not already done
      if (!nextBtn.parentElement.classList.contains('tooltip-container')) {
          // Create the tooltip container
          const tooltipContainer = document.createElement('div');
          tooltipContainer.classList.add('tooltip-container');

          // Create the tooltip text element
          const tooltipText = document.createElement('div');
          tooltipText.classList.add('tooltip-text');
          tooltipText.textContent = 'Or press enter';

          // Replace the Next button with the tooltip container
          nextBtn.parentElement.replaceChild(tooltipContainer, nextBtn);
          tooltipContainer.appendChild(nextBtn);
          tooltipContainer.appendChild(tooltipText);
      }

      // Increment and store the tooltip display count
      tooltipDisplayCount++;
      sessionStorage.setItem('tooltipDisplayCount', tooltipDisplayCount);
  } else {
      // Remove the tooltip if it exists
      if (nextBtn.parentElement.classList.contains('tooltip-container')) {
          // Remove the tooltip-container and replace it with nextBtn
          const tooltipContainer = nextBtn.parentElement;
          const parent = tooltipContainer.parentElement;
          parent.replaceChild(nextBtn, tooltipContainer);
      }
  }

  // After DOM manipulation, reassign nextBtn
  nextBtn = document.getElementById('nextBtn');
}


// Function to update progress bar and question counter
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Function to check if at least one option is selected
function isOptionSelected() {
    const question = questions[currentQuestionIndex];
    const inputs = document.querySelectorAll(`input[name="question-${question.id}"]`);

    if (question.type === 'multiple') {
        return Array.from(inputs).some(i => i.checked);
    } else {
        return Array.from(inputs).some(i => i.checked);
    }
}

// Function to save the user's answers
function saveAnswer() {
    const question = questions[currentQuestionIndex];
    const inputs = document.querySelectorAll(`input[name="question-${question.id}"]`);

    if (question.type === 'multiple') {
        const selectedOptions = [];
        inputs.forEach((input) => {
            if (input.checked) {
                selectedOptions.push(input.value);
            }
        });
        answers[question.id] = selectedOptions;
    } else {
        inputs.forEach((input) => {
            if (input.checked) {
                answers[question.id] = input.value;
            }
        });
    }
}

// Function to show a toast message
function showToast(message) {
    // Create the toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // Append the toast to the body
    document.body.appendChild(toast);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 1000);
}


const products = [
  {
    id: 1,
    name: "Sulwhasoo Gentle Cleansing Oil",
    category: "Cleanser",
    suitableFor: ["Sensitive", "Dry"],
    concerns: ["Dullness", "Uneven Skin Tone"],
    budgetRange: "$50-$100",
    climate: ["Dry", "Cold"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/Sulwhasoo-Cleansing-Lightweight-texture-Waterproof/dp/B09NY7SY7C",
  },
  {
    id: 2,
    name: "Innisfree Apple Seed Cleansing Oil",
    category: "Cleanser",
    suitableFor: ["Oily", "Combination"],
    concerns: ["Excess Oil", "Pores"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://us.innisfree.com/products/apple-seed-cleansing-oil",
  },
  {
    id: 3,
    name: "Beauty of Joseon Glow Serum",
    category: "Serum",
    suitableFor: ["Dry", "Sensitive"],
    concerns: ["Dullness", "Redness"],
    budgetRange: "$50-$100",
    climate: ["Dry", "Cold"],
    ageGroup: ["25-34", "35-44"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/deal-beauty-of-joseon-glow-serum-propolis-niacinamide-30ml.html",
  },
  {
    id: 4,
    name: "The Face Shop Rice Water Bright Light Cleansing Oil",
    category: "Cleanser",
    suitableFor: ["Sensitive", "All Skin Types"],
    concerns: ["Dullness", "Uneven Skin Tone"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/Face-Shop-Cleansing-Brightening-K-Beauty/dp/B00809ERAM",
  },
  {
    id: 5,
    name: "Etude House Real Art Cleansing Oil",
    category: "Cleanser",
    suitableFor: ["Oily", "Combination", "Normal"],
    concerns: ["Excess Oil", "Acne", "Pores"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/Etude-House-Cleansing-Moisture-milliliters/dp/B00965M61G",
  },
  {
    id: 6,
    name: "Banila Co Clean It Zero Cleansing Balm",
    category: "Cleanser",
    suitableFor: ["All Skin Types"],
    concerns: ["Makeup Removal"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/BANILA-CO-Clean-Original-Cleansing/dp/B0CW7LGBB6",
  },
  {
    id: 7,
    name: "Heimish All Clean Balm",
    category: "Cleanser",
    suitableFor: ["All Skin Types"],
    concerns: ["Makeup Removal", "Sensitive Skin"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance", "Essential Oils"],
    url: "https://www.amazon.com/heimish-Clean-4-0fl-oz-120ml-Balm/dp/B01CJ639SM",
  },
  {
    id: 8,
    name: "Beauty of Joseon Radiance Cleansing Balm",
    category: "Cleanser",
    suitableFor: ["All Skin Types"],
    concerns: ["Dullness", "Uneven Skin Tone"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/Beauty-Joseon-Radiance-Cleansing-Balm/dp/B07ZDQG9FJ",
  },
  {
    id: 9,
    name: "COSRX Low pH Good Morning Gel Cleanser",
    category: "Cleanser",
    suitableFor: ["All Skin Types"],
    concerns: ["Sensitive Skin", "Acne"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["Under 18", "18-24", "25-34"],
    sensitivities: ["Fragrance"],
    url: "https://www.amazon.com/dp/B08Y4N16PC",
  },
  {
    id: 10,
    name: "Krave Beauty Matcha Hemp Hydrating Cleanser",
    category: "Cleanser",
    suitableFor: ["Dry", "Sensitive", "Combination"],
    concerns: ["Dryness", "Redness"],
    budgetRange: "Under $50",
    climate: ["Dry", "Temperate"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance"],
    url: "https://www.amazon.com/dp/B08N335GXN",
  },
  {
    id: 11,
    name: "Etude House Soon Jung pH 6.5 Whip Cleanser",
    category: "Cleanser",
    suitableFor: ["Dry", "Sensitive"],
    concerns: ["Irritation", "Dryness"],
    budgetRange: "Under $50",
    climate: ["Dry", "Cold"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance", "Essential Oils"],
    url: "https://www.amazon.com/dp/B092Q3YB34",
  },
  {
    id: 12,
    name: "SKINFOOD Black Sugar Mask Wash Off",
    category: "Exfoliator",
    suitableFor: ["All Skin Types"],
    concerns: ["Dullness", "Uneven Texture"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["Sulfates", "Parabens"],
    url: "https://www.amazon.com/SKIN-FOOD-Black-Sugar-Perfect/dp/B01828IP7G",
  },
  {
    id: 13,
    name: "COSRX AHA/BHA Clarifying Treatment Toner",
    category: "Toner",
    suitableFor: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne", "Pores", "Uneven Skin Tone"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["Under 18", "18-24"],
    sensitivities: ["Alcohol"],
    url: "https://www.amazon.com/Cosrx-Clarifying-Treatment-3-38oz-100ml/dp/B014SAAW3W",
  },
  {
    id: 14,
    name: "Pyunkang Yul Essence Toner",
    category: "Toner",
    suitableFor: ["Dry", "Sensitive", "Oily"],
    concerns: ["Dryness", "Irritation"],
    budgetRange: "Under $50",
    climate: ["Dry", "Cold"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance", "Essential Oils"],
    url: "https://www.yesstyle.com/en/pyunkang-yul-essence-toner-200ml-200ml/info.html/pid.1060395495",
  },
  {
    id: 15,
    name: "COSRX Advanced Snail 96 Mucin Power Essence",
    category: "Essence",
    suitableFor: ["All Skin Types"],
    concerns: ["Dryness", "Uneven Texture"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/deal-cosrx-advanced-snail-96-mucin-power-essence-100ml.html",
  },
  {
    id: 16,
    name: "Neogen Real Ferment Micro Essence",
    category: "Essence",
    suitableFor: ["All Skin Types"],
    concerns: ["Dullness", "Uneven Skin Tone"],
    budgetRange: "$50-$100",
    climate: ["All"],
    ageGroup: ["25-34", "35-44"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/deal-neogen-dermalogy-dermalogy-real-ferment-micro-essence-150ml.html",
  },
  {
    id: 17,
    name: "Peach & Lily Glass Skin Refining Serum",
    category: "Serum",
    suitableFor: ["All Skin Types"],
    concerns: ["Dullness", "Uneven Skin Tone"],
    budgetRange: "$50-$100",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance"],
    url: "https://www.ulta.com/p/glass-skin-refining-serum-xlsImpprod18971035",
  },
  {
    id: 18,
    name: "Some By Mi AHA BHA PHA 30 Days Miracle Toner",
    category: "Toner",
    suitableFor: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne", "Pores", "Excess Oil"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["Under 18", "18-24"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/some-by-mi-aha-bha-pha-30-days-miracle-toner-150ml.html",
  },
  {
    id: 19,
    name: "Sulwhasoo First Care Activating Serum",
    category: "Serum",
    suitableFor: ["All Skin Types"],
    concerns: ["Reduce signs of aging", "Uneven Texture"],
    budgetRange: "$100-$200",
    climate: ["All"],
    ageGroup: ["35-44", "45-54", "55+"],
    sensitivities: ["None"],
    url: "https://skinlovecream.com/products/sulwhasoo-first-care-activating-serum-mini",
  },
  {
    id: 20,
    name: "Missha Time Revolution Night Repair Ampoule",
    category: "Ampoule",
    suitableFor: ["All Skin Types"],
    concerns: ["Fine Lines", "Reduce signs of aging"],
    budgetRange: "$50-$100",
    climate: ["All"],
    ageGroup: ["35-44", "45-54", "55+"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/MISSHA-Revolution-Night-Repair-Ampoule/dp/B09648RPKJ",
  },
  {
    id: 21,
    name: "Innisfree Jeju Orchid Eye Cream",
    category: "Eye Cream",
    suitableFor: ["All Skin Types"],
    concerns: ["Fine Lines", "Dark Circles"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["25-34", "35-44", "45-54", "55+"],
    sensitivities: ["None"],
    url: "https://holiholic.com/products/innisfree-new-jeju-orchid-eye-cream-30ml",
  },
  {
    id: 22,
    name: "Mizon Snail Repair Eye Cream",
    category: "Eye Cream",
    suitableFor: ["All Skin Types"],
    concerns: ["Dark Circles", "Puffiness"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/MIZON-natural-treatment-hydrating-skincare/dp/B00AFLSE7U",
  },
  {
    id: 23,
    name: "Belif The True Cream Moisturizing Bomb",
    category: "Moisturizer",
    suitableFor: ["Dry", "Normal"],
    concerns: ["Dryness"],
    budgetRange: "$50-$100",
    climate: ["Dry", "Cold"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.avon.com/product/belif-the-true-cream-moisturizing-bomb-71506",
  },
  {
    id: 24,
    name: "COSRX Oil-Free Ultra-Moisturizing Lotion",
    category: "Moisturizer",
    suitableFor: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne", "Excess Oil"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["Under 18", "18-24"],
    sensitivities: ["Fragrance"],
    url: "https://www.ulta.com/p/oil-free-ultra-moisturizing-lotion-with-birch-sap-pimprod2035883",
  },
  {
    id: 25,
    name: "Innisfree Green Tea Seed Hyaluronic Cream",
    category: "Moisturizer",
    suitableFor: ["Combination", "Normal"],
    concerns: ["Hydration", "Antioxidants"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/innisfree-green-tea-seed-hyaluronic-cream-50ml.html",
  },
  {
    id: 26,
    name: "Beauty of Joseon Relief Sun Rice Probiotics SPF50+",
    category: "Sunscreen",
    suitableFor: ["All Skin Types"],
    concerns: ["Sun Protection"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/top-pick-beauty-of-joseon-relief-sun-rice-probiotic-spf50-pa-50ml.html",
  },
  {
    id: 27,
    name: "COSRX Aloe Soothing Sun Cream SPF50",
    category: "Sunscreen",
    suitableFor: ["Oily", "Combination", "Sensitive"],
    concerns: ["Sun Protection", "Sensitive Skin"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://beautynetkorea.com/product/cosrx-aloe-soothing-sun-cream-spf50pa-50ml-weight-79g/8467",
  },
  {
    id: 28,
    name: "Laneige Water Sleeping Mask",
    category: "Sleeping Mask",
    suitableFor: ["Dry", "Normal"],
    concerns: ["Dryness", "Dullness"],
    budgetRange: "$50-$100",
    climate: ["Dry", "Cold"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/deal-laneige-water-sleeping-mask-ex-70ml.html",
  },
  {
    id: 29,
    name: "COSRX Ultimate Nourishing Rice Overnight Spa Mask",
    category: "Sleeping Mask",
    suitableFor: ["All Skin Types"],
    concerns: ["Dullness", "Dryness"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.amazon.com/COSRX-Ultimate-Nourishing-Rice-Overnight/dp/B01N13W31F",
  },
  {
    id: 30,
    name: "Innisfree Jeju Volcanic Pore Clay Mask",
    category: "Mask",
    suitableFor: ["Oily", "Combination"],
    concerns: ["Pores", "Excess Oil"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://www.stylevana.com/en_US/deal-innisfree-jeju-volcanic-pore-clay-mask-original-100ml.html",
  },
  // Continue adding products as needed, ensuring values match those in questions
];

// Function to filter products based on user's answers
function getRecommendedProducts(userAnswers) {
  const scoredProducts = products.map((product) => {
    let score = 0;

    // Check each criterion and increment score accordingly

    // Skin Type
    if (product.suitableFor.includes(userAnswers.skinType)) {
      score += 2; // Assign higher weight if desired
    }

    // Concerns
    const concernMatches = product.concerns.filter((concern) =>
      userAnswers.concerns.includes(concern)
    ).length;
    score += concernMatches * 3; // Assign higher weight to concern matches

    // Budget Range
    if (product.budgetRange === userAnswers.budget) {
      score += 1;
    }

    // Age Group
    if (
      product.ageGroup.includes(userAnswers.ageGroup) ||
      product.ageGroup.includes("All")
    ) {
      score += 1;
    }

    // Climate
    if (
      product.climate.includes(userAnswers.climate) ||
      product.climate.includes("All")
    ) {
      score += 1;
    }

    // Sensitivities
    const sensitivityMatches = product.sensitivities.filter((sensitivity) =>
      userAnswers.sensitivities.includes(sensitivity)
    ).length;
    if (sensitivityMatches > 0) {
      // If the product contains ingredients the user is sensitive to, penalize the score
      score -= sensitivityMatches * 5;
    } else {
      // If no sensitivities match, increment the score
      score += 1;
    }

    // Add other criteria as needed...

    // Attach the score to the product
    return { ...product, score };
  });

  // Sort products by score in descending order
  const sortedProducts = scoredProducts.sort((a, b) => b.score - a.score);

  // Return the top 5 products
  return sortedProducts.slice(0, 5);
}

// Function to display recommended products
function displayRecommendedProducts(recommendedProducts) {
  let resultHtml = '<h2>Your Recommended Products</h2>';
  recommendedProducts.forEach(product => {
      resultHtml += `
        <div class="product">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Suitable for: ${product.suitableFor.join(', ')}</p>
          <p>Concerns Addressed: ${product.concerns.join(', ')}</p>
          <p>Price Range: ${product.budgetRange}</p>
          <a href="${product.url}" target="_blank">View Product</a>
        </div>
      `;
  });

  // Add Start Over button
  resultHtml += '<button class="start-over-btn" id="startOverBtn">Start Over</button>';

  // Replace the quiz content with the results
  quizContent.innerHTML = resultHtml;

  // Hide the navigation buttons
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';

  // Update the question counter and progress bar to indicate completion
  questionCounter.textContent = 'Quiz Completed';
  progressBar.style.width = '100%';

  // Add event listener for start over button
  const startOverBtn = document.getElementById('startOverBtn');
  startOverBtn.addEventListener('click', startOver);
}

function startOver() {
  // Reset quiz data
  currentQuestionIndex = 0;
  answers = {};

  // Hide the product recommendations and show the intro again
  quizContainer.style.display = 'none';
  introContainer.style.display = 'flex';
  document.body.classList.add('intro-active'); // Add back the intro-active class

  // Reset progress bar and buttons
  progressBar.style.width = '0%';
  questionCounter.textContent = '';

  // Show navigation buttons again
  nextBtn.style.display = 'inline-block';
  prevBtn.style.display = 'inline-block';
}

// Function to submit the quiz
function submitQuiz() {
  saveAnswer(); // Collect the final answers

  const userAnswers = {
      skinType: answers[1],         // String (single choice)
      climate: answers[2],          // String (single choice)
      ageGroup: answers[3],         // String (single choice)
      concerns: answers[4],         // Array (multiple choice)
      sunExposure: answers[5],      // String (single choice)
      currentProducts: answers[6],  // Array (multiple choice)
      stressLevel: answers[7],      // String (single choice)
      sleepHours: answers[8],       // String (single choice)
      lifeStage: answers[9],        // Array (multiple choice)
      morningSkinFeel: answers[10], // String (single choice)
      afterWashFeel: answers[11],   // String (single choice)
      routineTime: answers[12],     // String (single choice)
      sensitivities: answers[13],   // Array (multiple choice)
      usedIngredients: answers[14], // Array (multiple choice)
      budget: answers[15],          // String (single choice)
      dailyRoutine: answers[16],    // String (single choice)
      medications: answers[17],     // Array (multiple choice)
      skincareGoal: answers[18],    // String (single choice)
      fragrancePreference: answers[19], // String (single choice)
      ecoPreference: answers[20],       // String (single choice)
      focusAreas: answers[21],      // Array (multiple choice)
      skinReaction: answers[22],    // Array (multiple choice)
      multiUseInterest: answers[23], // String (single choice)
  };

  console.log("User Answers:", userAnswers);

  // Handle cases where no sensitivities are selected or "No known sensitivities" is selected
  if (!userAnswers.sensitivities || userAnswers.sensitivities.includes("No known sensitivities")) {
      userAnswers.sensitivities = [];
  }

  const recommendedProducts = getRecommendedProducts(userAnswers);
  if (recommendedProducts.length > 0) {
      displayRecommendedProducts(recommendedProducts);
  } else {
      quizContent.innerHTML = '<h2>No products found matching your criteria.</h2><p>Please adjust your answers or check back later.</p>';
      nextBtn.style.display = 'none';
      prevBtn.style.display = 'none';
  }
}