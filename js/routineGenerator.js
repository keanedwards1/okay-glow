// Create a new file: /js/routineGenerator.js

// Define the routine slots and their order
const routineSteps = {
    morning: [
      'first_cleanser',
      'second_cleanser',
      'toner',
      'essence',
      'treatment',
      'serum',
      'eye_cream',
      'moisturizer',
      'sunscreen'
    ],
    evening: [
      'first_cleanser',
      'second_cleanser',
      'exfoliant', // Only on specific days
      'toner',
      'essence',
      'treatment',
      'serum',
      'eye_cream',
      'moisturizer',
      'sleeping_mask' // Only if needed
    ]
  };
  
  // Define product combinations that shouldn't be used together
  const conflictingIngredients = {
    'Retinol': ['Vitamin C', 'AHA', 'BHA'],
    'AHA': ['BHA', 'Retinol', 'Vitamin C'],
    'BHA': ['AHA', 'Retinol', 'Vitamin C'],
    'Vitamin C': ['Retinol', 'AHA', 'BHA']
  };
  
  function generateRoutine(userAnswers, recommendedProducts) {
    const routine = {
      morning: {},
      evening: {},
      weekly: {},
      notes: []
    };
  
    // Helper function to categorize skin type and concerns
    function analyzeSkinProfile(answers) {
      const profile = {
        type: answers.skinType,
        sensitivity: answers.sensitivities?.length > 0,
        dehydrated: answers.afterWashFeel === 'Tight',
        concerns: answers.concerns || [],
        climate: answers.climate,
        timeAvailable: answers.routineTime
      };
  
      return profile;
    }
  
    // Helper function to determine routine complexity
    function determineRoutineComplexity(profile, answers) {
      const timeMap = {
        '1-2 minutes': 'minimal',
        '5-10 minutes': 'basic',
        '15-20 minutes': 'moderate',
        '30+ minutes': 'extensive'
      };
  
      const baseComplexity = timeMap[answers.routineTime];
      
      // Adjust based on user experience
      const hasExperience = answers.usedIngredients?.length > 2;
      const wantsMultiUse = answers.multiUseInterest === 'Very interested';
  
      return {
        complexity: hasExperience ? baseComplexity : 'basic',
        preferMultiUse: wantsMultiUse
      };
    }
  
    // Helper function to schedule active ingredients
    function scheduleActives(profile, complexity) {
      const schedule = {
        retinol: false,
        vitaminC: false,
        exfoliant: false,
        frequency: {}
      };
  
      if (complexity.complexity === 'minimal') {
        return schedule;
      }
  
      // Schedule based on concerns and experience
      if (profile.concerns.includes('Fine Lines') || profile.concerns.includes('Uneven Skin Tone')) {
        schedule.retinol = true;
        schedule.frequency.retinol = 'evening';
      }
  
      if (profile.concerns.includes('Dullness')) {
        schedule.vitaminC = true;
        schedule.frequency.vitaminC = 'morning';
      }
  
      if (profile.concerns.includes('Acne') || profile.concerns.includes('Pores')) {
        schedule.exfoliant = true;
        schedule.frequency.exfoliant = 'evening';
      }
  
      return schedule;
    }
  
    // Main routine generation logic
    const profile = analyzeSkinProfile(userAnswers);
    const routineSetup = determineRoutineComplexity(profile, userAnswers);
    const activeSchedule = scheduleActives(profile, routineSetup);
  
    // Filter and assign products to routine steps
    recommendedProducts.forEach(product => {
      const slot = determineProductSlot(product, profile, routineSetup);
      if (slot) {
        assignProductToRoutine(routine, product, slot, activeSchedule);
      }
    });
  
    // Add routine-specific notes and instructions
    addRoutineNotes(routine, profile, activeSchedule);
  
    return routine;
  }
  
  function determineProductSlot(product, profile, routineSetup) {
    // Map product categories to routine slots
    const categorySlotMap = {
      'Cleanser': profile.concerns.includes('Makeup Removal') ? 'first_cleanser' : 'second_cleanser',
      'Toner': 'toner',
      'Essence': 'essence',
      'Serum': 'serum',
      'Eye Cream': 'eye_cream',
      'Moisturizer': 'moisturizer',
      'Sunscreen': 'sunscreen',
      'Sleeping Mask': 'sleeping_mask'
    };
  
    return categorySlotMap[product.category];
  }
  
  function assignProductToRoutine(routine, product, slot, activeSchedule) {
    // Check for conflicts with active ingredients
    const hasConflict = checkIngredientConflicts(product, activeSchedule);
    
    if (hasConflict) {
      if (activeSchedule.frequency[hasConflict] === 'morning') {
        routine.evening[slot] = product;
      } else {
        routine.morning[slot] = product;
      }
    } else {
      // Assign to both routines if it's a core product
      if (['cleanser', 'toner', 'moisturizer'].includes(slot)) {
        routine.morning[slot] = product;
        routine.evening[slot] = product;
      } else if (slot === 'sunscreen') {
        routine.morning[slot] = product;
      } else if (slot === 'sleeping_mask') {
        routine.evening[slot] = product;
      }
    }
  }

  function checkIngredientConflicts(product, activeSchedule) {
    // Get active ingredients from product (this would need to be added to product data)
    const productActives = product.activeIngredients || [];
    
    for (const active of productActives) {
      for (const [ingredient, conflicts] of Object.entries(conflictingIngredients)) {
        if (active.includes(ingredient) && activeSchedule.frequency[conflicts[0]]) {
          return conflicts[0];
        }
      }
    }
    
    return false;
  }

  // In routineGenerator.js, add this after product assignment
function validateRoutine(routine, profile) {
    const essentialSteps = ['cleanser', 'moisturizer'];
    if (profile.sunExposure !== 'Minimal') {
      essentialSteps.push('sunscreen');
    }
  
    const missingSteps = [];
    for (const step of essentialSteps) {
      if (!routine.morning[step] && !routine.evening[step]) {
        missingSteps.push(step);
      }
    }
  
    if (missingSteps.length > 0) {
      routine.notes.unshift(`Warning: Your routine is missing these essential steps: ${missingSteps.join(', ')}`);
    }
  
    return routine;
  }
  
  function addRoutineNotes(routine, profile, activeSchedule) {
    // Add general notes
    routine.notes.push('Always patch test new products before adding them to your routine.');
    
    if (profile.sensitivity) {
      routine.notes.push('Introduce new products one at a time, waiting at least 1-2 weeks between additions.');
    }
  
    if (activeSchedule.retinol) {
      routine.notes.push('Start using retinol products 1-2 times per week, gradually increasing frequency.');
    }
  
    if (activeSchedule.exfoliant) {
      routine.notes.push('Exfoliate no more than 2-3 times per week, avoiding days when using retinol.');
    }
  
    if (profile.climate === 'Dry') {
      routine.notes.push('Consider using your hydrating products on damp skin for better absorption.');
    }
  }
  
  // Function to format the routine for display
  function formatRoutineForDisplay(routine) {
    return {
      morning: formatSteps(routine.morning, 'morning'),
      evening: formatSteps(routine.evening, 'evening'),
      notes: routine.notes,
      weekly: routine.weekly
    };
  }
  
// In routineGenerator.js, modify formatSteps function
function formatSteps(steps, timeOfDay) {
    const stepCategories = {
      first_cleanser: 'cleansing',
      second_cleanser: 'cleansing',
      exfoliant: 'treatment',
      toner: 'hydration',
      essence: 'hydration',
      treatment: 'treatment',
      serum: 'treatment',
      eye_cream: 'treatment',
      moisturizer: 'hydration',
      sunscreen: 'protection',
      sleeping_mask: 'treatment'
    };
  
    const orderedSteps = routineSteps[timeOfDay]
      .filter(step => steps[step])
      .map(step => ({
        step: step.replace('_', ' '),
        product: steps[step].name,
        instructions: getApplicationInstructions(step, steps[step]),
        category: stepCategories[step] || 'other'
      }));
  
    return orderedSteps;
  }
  
  function getApplicationInstructions(step, product) {
    const instructions = {
      first_cleanser: 'Apply to dry skin, massage gently, then rinse with lukewarm water.',
      second_cleanser: 'Apply to damp skin, massage for 60 seconds, then rinse thoroughly.',
      toner: 'Apply with clean hands or cotton pad, pat gently into skin.',
      essence: 'Pat gently into skin with hands.',
      serum: 'Apply 2-3 drops, gently press into skin.',
      eye_cream: 'Use ring finger to pat gently around eye area.',
      moisturizer: 'Apply evenly to face and neck.',
      sunscreen: 'Apply liberally as final step, reapply every 2 hours when outdoors.',
      sleeping_mask: 'Apply as final step of evening routine.'
    };
  
    return instructions[step] || 'Apply as directed on product packaging.';
  }
  
    window.generateRoutine = generateRoutine;
    window.formatRoutineForDisplay = formatRoutineForDisplay;   