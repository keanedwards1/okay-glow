document.querySelector('.quiz-button').addEventListener('click', function() {
    const answers = {
        dry: 0,
        oily: 0,
        normal: 0,
        combination: 0,
        sensitive: 0
    };

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if(!q1 || !q2 || !q3) {
        const resultContainer = document.querySelector('.quiz-result');
        resultContainer.style.display = 'block';
        resultContainer.querySelector('.quiz-result-title').textContent = "Oops!";
        resultContainer.querySelector('.quiz-result-text').textContent = "Please answer all the questions to see your result.";
        return;
    }

    answers[q1.value]++;
    answers[q2.value]++;
    answers[q3.value]++;

    let highestScore = 0;
    let skinType = 'normal'; 
    for (let type in answers) {
        if (answers[type] > highestScore) {
            highestScore = answers[type];
            skinType = type;
        }
    }

    // NEW: More encouraging, human-sounding messages
    let titleText = '';
    let resultText = '';
    switch(skinType) {
        case 'dry':
            titleText = "Your Results: Dry Skin";
            resultText = "Your skin may often feel tight and crave more moisture. Aim for rich, hydrating creams and gentle exfoliation. Add a hydrating serum before your moisturizer to help you maintain a supple complexion.";
            break;
        case 'oily':
            titleText = "Your Results: Oily Skin";
            resultText = "Your skin tends to produce excess oil, especially in the T-zone. Look for oil-free, lightweight products and consider a gentle toner. A clay mask once a week can help keep shine under control.";
            break;
        case 'combination':
            titleText = "Your Results: Combination Skin";
            resultText = "Part of your face is oily, while other areas are dry or normal. Use targeted products for each zone—perhaps a lighter gel moisturizer for the T-zone and a richer cream for the cheeks. Multi-masking can be your secret weapon!";
            break;
        case 'sensitive':
            titleText = "Your Results: Sensitive Skin";
            resultText = "Your skin may be easily irritated and needs gentle, fragrance-free formulas. Look for soothing ingredients like oatmeal or chamomile. Remember to patch-test new products before applying them all over.";
            break;
        default:
            titleText = "Your Results: Normal Skin";
            resultText = "Your skin is quite balanced and tends to adapt well to most products. Keep a consistent, no-fuss routine and maintain this harmony by introducing new products slowly.";
    }

    const resultContainer = document.querySelector('.quiz-result');
    resultContainer.style.display = 'block';
    resultContainer.querySelector('.quiz-result-title').textContent = titleText;
    resultContainer.querySelector('.quiz-result-text').textContent = resultText;
});