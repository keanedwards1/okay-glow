// Replace the existing displayResults function in quiz.js with this version to enable the paywall banana
function displayResults(recommendedProducts, routine) {
    let resultHtml = '<div class="results-container">';
    
    // Products section - only show first 2 products
    resultHtml += '<section class="recommended-products">';
    resultHtml += '<h2>Your Recommended Products</h2>';
    resultHtml += '<div class="products-container">';
    
    // Show only first 2 products
    recommendedProducts.slice(0, 2).forEach((product) => {
      resultHtml += `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <img src="${product.hoverImage}" alt="${product.name} - Hover" class="hover-image">
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Suitable for:</strong> ${product.suitableFor.join(', ')}</p>
            <p><strong>Concerns Addressed:</strong> ${product.concerns.join(', ')}</p>
            <p><strong>Price Range:</strong> ${product.budgetRange}</p>
            <a href="${product.url}" target="_blank" class="product-link">View Product</a>
          </div>
        </div>
      `;
    });
    
    resultHtml += '</div>';
    
    // Add the upgrade prompt
    resultHtml += `
      <div class="preview-prompt">
        <h3>Want to see your full personalized recommendations?</h3>
        <div class="preview-benefits">
          <p>✨ See 3 more recommended products perfectly matched to your skin</p>
          <p>📋 Get your complete morning and evening routines</p>
          <p>🔍 Learn how to layer products correctly</p>
          <p>💡 Receive personalized usage tips and warnings</p>
        </div>
        <div class="preview-cta">
          <input type="email" id="userEmail" placeholder="Enter your email" class="preview-email">
          <button onclick="handlePreviewSignup()" class="preview-button">Get Full Results ($5)</button>
        </div>
        <p class="preview-note">By continuing, you agree to participate in our early access program.</p>
      </div>
    </section>`;
    
    // Show limited routine preview
    resultHtml += '<section class="skincare-routine">';
    resultHtml += '<h2>Basic Routine Preview</h2>';
    
    // Show only morning routine with limited steps
    resultHtml += '<div class="routine-time-block">';
    resultHtml += '<h3>Morning Routine</h3>';
    resultHtml += '<ol class="routine-steps">';
    routine.morning.slice(0, 2).forEach(step => {
      resultHtml += `
        <li class="routine-step">
          <h4>${step.step}</h4>
          <p class="product-name">${step.product}</p>
          <p class="instructions">${step.instructions}</p>
        </li>
      `;
    });
    resultHtml += '</ol></div>';
    
    resultHtml += `
      <div class="routine-preview-note">
        <p>👆 This is a preview of your morning routine. Unlock your full personalized routine to see:</p>
        <ul>
          <li>Complete morning and evening routines</li>
          <li>Product application instructions</li>
          <li>Personalized tips and warnings</li>
        </ul>
      </div>
    `;
    
    resultHtml += '</section></div>';
    
    resultHtml += '<button class="start-over-btn" id="startOverBtn">Start Over</button>';
    
    quizContent.innerHTML = resultHtml;
    
    // Add event listeners
    const startOverBtn = document.getElementById('startOverBtn');
    startOverBtn.addEventListener('click', startOver);
    
    // Add this function to your JavaScript
    window.handlePreviewSignup = function() {
      const email = document.getElementById('userEmail').value;
      if (email) {
        // Store the email and quiz results
        localStorage.setItem('userEmail', email);
        localStorage.setItem('quizResults', JSON.stringify({
          recommendedProducts,
          routine
        }));
        
        // Show success message
        const promptDiv = document.querySelector('.preview-prompt');
        promptDiv.innerHTML = `
          <h3>Thank you for your interest!</h3>
          <p>We'll email you when the full version launches.</p>
          <p>Number of interested users: ${Math.floor(Math.random() * 50) + 150}</p>
        `;
        
        // Optional: Send to your backend or analytics
        console.log('User interested:', email);
      }
    };
    
    animateResults();
  }



  /* original function without paywall */
  function displayResults(recommendedProducts, routine) {
    let resultHtml = '<div class="results-container">';
    
    // Products section
    resultHtml += '<section class="recommended-products">';
    resultHtml += '<h2>Your Recommended Products</h2>';
    resultHtml += '<div class="products-container">';
    
    // Add the product cards HTML
    recommendedProducts.forEach((product) => {
      resultHtml += `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <img src="${product.hoverImage}" alt="${product.name} - Hover" class="hover-image">
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Suitable for:</strong> ${product.suitableFor.join(', ')}</p>
            <p><strong>Concerns Addressed:</strong> ${product.concerns.join(', ')}</p>
            <p><strong>Price Range:</strong> ${product.budgetRange}</p>
            <a href="${product.url}" target="_blank" class="product-link">View Product</a>
          </div>
        </div>
      `;
    });
    
    resultHtml += '</div></section>';
    
    // Routine section
    resultHtml += '<section class="skincare-routine">';
    resultHtml += '<h2>Your Personalized Routine</h2>';
    
    // Morning routine
    resultHtml += '<div class="routine-time-block">';
    resultHtml += '<h3>Morning Routine</h3>';
    resultHtml += '<ol class="routine-steps">';
    routine.morning.forEach(step => {
      resultHtml += `
        <li class="routine-step">
          <h4>${step.step}</h4>
          <p class="product-name">${step.product}</p>
          <p class="instructions">${step.instructions}</p>
        </li>
      `;
    });
    resultHtml += '</ol></div>';
    
    // Evening routine
    resultHtml += '<div class="routine-time-block">';
    resultHtml += '<h3>Evening Routine</h3>';
    resultHtml += '<ol class="routine-steps">';
    routine.evening.forEach(step => {
      resultHtml += `
        <li class="routine-step">
          <h4>${step.step}</h4>
          <p class="product-name">${step.product}</p>
          <p class="instructions">${step.instructions}</p>
        </li>
      `;
    });
    resultHtml += '</ol></div>';
    
    // Notes section
    if (routine.notes.length > 0) {
      resultHtml += '<div class="routine-notes">';
      resultHtml += '<h3>Important Notes</h3>';
      resultHtml += '<ul>';
      routine.notes.forEach(note => {
        resultHtml += `<li>${note}</li>`;
      });
      resultHtml += '</ul></div>';
    }
    
    resultHtml += '</section></div>';
    
    resultHtml += '<button class="start-over-btn" id="startOverBtn">Start Over</button>';
    
    quizContent.innerHTML = resultHtml;
    
    const startOverBtn = document.getElementById('startOverBtn');
    startOverBtn.addEventListener('click', startOver);
    
    animateResults();
  }


  /* most recent version */

  function displayResults(recommendedProducts, routine) {
    let resultHtml = '<div class="results-container">';
    
    // Full Products Section
    resultHtml += '<section class="recommended-products">';
    resultHtml += '<h2>Your Recommended Products</h2>';
    resultHtml += '<div class="products-container">';
    
    // Show all products
    recommendedProducts.forEach((product) => {
      resultHtml += `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <img src="${product.hoverImage}" alt="${product.name} - Hover" class="hover-image">
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Suitable for:</strong> ${product.suitableFor.join(', ')}</p>
            <p><strong>Concerns Addressed:</strong> ${product.concerns.join(', ')}</p>
            <p><strong>Price Range:</strong> ${product.budgetRange}</p>
            <a href="${product.url}" target="_blank" class="product-link">View Product</a>
          </div>
        </div>
      `;
    });
    
    resultHtml += '</div></section>';
    
    // Routine Preview Section with Upgrade Prompt
    resultHtml += `
    <section class="skincare-routine">
      <div class="routine-preview-header">
        <h2>Your Personalized Routine</h2>
        <span class="routine-preview-badge">Preview</span>
      </div>
      
      <div class="routine-time-block">
        <h3>Morning Routine</h3>
        <div class="routine-step">
          <h4>${routine.morning[0].step}</h4>
          <p class="product-name">${routine.morning[0].product}</p>
          <p class="instructions">${routine.morning[0].instructions}</p>
        </div>
      </div>
  
      <div class="routine-unlock-prompt">
        <div class="unlock-benefits">
          <h3>Get Your Full Personalized Routine</h3>
          
          <div class="benefits-list">
            <div class="benefit-item">
              <span class="benefit-icon">🎯</span>
              <p>Complete AM & PM routines with step-by-step instructions</p>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">⚡️</span>
              <p>Product order optimization to maximize effectiveness</p>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">⚠️</span>
              <p>Ingredient conflict warnings and timing recommendations</p>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">✨</span>
              <p>Personalized usage tips based on your skin profile</p>
            </div>
          </div>
  
          <div class="unlock-cta">
            <input type="email" id="userEmail" placeholder="Enter your email" class="preview-email">
            <button onclick="handleRoutineUnlock()" class="unlock-routine-btn">
              Unlock Full Routine ($5)
            </button>
          </div>
          
          <p class="preview-note">Join 300+ others who've optimized their skincare routine</p>
        </div>
      </div>
    </section>
  `;
    
    resultHtml += '<button class="start-over-btn" id="startOverBtn">Start Over</button>';
    
    quizContent.innerHTML = resultHtml;
    
    // Add event listeners
    const startOverBtn = document.getElementById('startOverBtn');
    startOverBtn.addEventListener('click', startOver);
    
    // Add this function to handle the unlock
    window.handleRoutineUnlock = function() {
      const email = document.getElementById('userEmail').value;
      if (email) {
        // Store the email and quiz results
        localStorage.setItem('userEmail', email);
        localStorage.setItem('quizResults', JSON.stringify({
          recommendedProducts,
          routine
        }));
        
        // Show success message
        const promptDiv = document.querySelector('.routine-unlock-prompt');
        promptDiv.innerHTML = `
          <div class="unlock-success">
            <h3>Thanks for your interest! 🎉</h3>
            <p>We're launching soon and you'll be the first to know.</p>
            <p>Current waitlist: ${Math.floor(Math.random() * 50) + 300} people</p>
          </div>
        `;
        
        // Log interest for tracking
        console.log('User interested in full routine:', email);
      }
    };
    
    animateResults();
  }