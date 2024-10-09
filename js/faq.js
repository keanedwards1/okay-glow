document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq');

  faqItems.forEach(function(faq) {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');

    question.addEventListener('click', function() {
      if (faq.classList.contains('active')) {
        // Close the FAQ
        faq.classList.remove('active');
        question.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        // Open the FAQ
        faq.classList.add('active');
        question.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});
