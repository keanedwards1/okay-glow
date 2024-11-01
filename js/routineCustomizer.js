// /js/routineCustomizer.js

class RoutineCustomizer {
    constructor(routine, userAnswers) {
      this.routine = routine;
      this.userAnswers = userAnswers;
      this.preferences = {
        complexity: 'standard', // 'minimal', 'standard', 'advanced'
        frequency: 'daily',     // 'daily', 'alternate', 'weekly'
        focus: []              // Array of focus areas
      };
    }
  
    adjustRoutineComplexity(level) {
      const complexityMappings = {
        minimal: {
          maxSteps: 3,
          requiredSteps: ['cleanser', 'moisturizer', 'sunscreen'],
          excludeSteps: ['essence', 'treatment', 'serum']
        },
        standard: {
          maxSteps: 5,
          requiredSteps: ['cleanser', 'toner', 'moisturizer', 'sunscreen'],
          excludeSteps: []
        },
        advanced: {
          maxSteps: Infinity,
          requiredSteps: ['cleanser', 'toner', 'serum', 'moisturizer', 'sunscreen'],
          excludeSteps: []
        }
      };
  
      const config = complexityMappings[level];
      
      // Filter steps based on complexity level
      Object.keys(this.routine).forEach(timeOfDay => {
        if (timeOfDay !== 'notes' && timeOfDay !== 'weekly') {
          const steps = this.routine[timeOfDay];
          const filteredSteps = {};
  
          // Keep only required and allowed steps up to maxSteps
          let stepCount = 0;
          config.requiredSteps.forEach(step => {
            if (steps[step] && stepCount < config.maxSteps) {
              filteredSteps[step] = steps[step];
              stepCount++;
            }
          });
  
          // Add additional steps if under maxSteps
          Object.entries(steps).forEach(([step, product]) => {
            if (!config.requiredSteps.includes(step) && 
                !config.excludeSteps.includes(step) && 
                stepCount < config.maxSteps) {
              filteredSteps[step] = product;
              stepCount++;
            }
          });
  
          this.routine[timeOfDay] = filteredSteps;
        }
      });
  
      return this;
    }
  
    setFrequency(frequency) {
      const frequencyNotes = {
        daily: 'Follow this routine every day, morning and night.',
        alternate: 'Alternate between the full routine and a simplified version (cleanser, moisturizer, sunscreen) every other day.',
        weekly: 'Use the full routine 2-3 times per week, using a simplified version on other days.'
      };
  
      // Add frequency note
      this.routine.notes.unshift(frequencyNotes[frequency]);
  
      // Adjust active ingredients based on frequency
      if (frequency !== 'daily') {
        this.routine.notes.push('When using active ingredients (retinol, acids, etc.), use them only on full routine days.');
      }
  
      return this;
    }
  
    adjustForClimate(climate) {
      const climateTips = {
        Humid: {
          add: ['Use lighter, gel-based products', 'Consider using oil-control products'],
          remove: ['heavy creams', 'oil-based products']
        },
        Dry: {
          add: ['Layer hydrating products', 'Use facial mists throughout the day'],
          remove: ['drying alcohols', 'harsh cleansers']
        },
        Cold: {
          add: ['Use richer moisturizers', 'Add facial oils when needed'],
          remove: ['lightweight products']
        },
        Tropical: {
          add: ['Use water-resistant sunscreen', 'Incorporate antioxidants'],
          remove: ['heavy products']
        }
      };
  
      const tips = climateTips[climate];
      if (tips) {
        this.routine.notes.push(`Climate Tips: ${tips.add.join(', ')}`);
      }
  
      return this;
    }
  
    addTimeManagementTips() {
      const timeMap = {
        '1-2 minutes': [
          'Combine toner application with moisturizer',
          'Use multi-purpose products when possible',
          'Keep products organized and easily accessible'
        ],
        '5-10 minutes': [
          'Apply products while skin is still damp',
          'Use waiting time to brush teeth or prepare clothes',
          'Keep a spare set of products at work/gym if needed'
        ],
        '15-20 minutes': [
          'Use sheet masks or treatments during evening relaxation',
          'Layer products during other activities',
          'Set up a dedicated skincare station'
        ]
      };
  
      const tips = timeMap[this.userAnswers.routineTime];
      if (tips) {
        this.routine.notes.push('Time Management Tips: ' + tips.join('. '));
      }
  
      return this;
    }
  
    generatePrintableVersion() {
      return {
        ...this.routine,
        printingTips: [
          'Store this routine in your bathroom for easy reference',
          'Mark off products as you use them',
          'Track your progress and adjust as needed'
        ]
      };
    }
  
    exportToCalendar() {
      // Generate ICS format calendar events
      const events = [];
      const routineTimes = {
        morning: '08:00',
        evening: '20:00'
      };
  
      Object.entries(routineTimes).forEach(([timeOfDay, time]) => {
        const steps = this.routine[timeOfDay];
        const event = {
          title: `${timeOfDay} Skincare Routine`,
          description: Object.entries(steps)
            .map(([step, product]) => `${step}: ${product.name}`)
            .join('\n'),
          time,
          duration: '30',
          recurrence: 'FREQ=DAILY'
        };
        events.push(event);
      });
  
      return events;
    }
  }

  window.RoutineCustomizer = RoutineCustomizer;

