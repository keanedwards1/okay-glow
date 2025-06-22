// /js/quiz.js

const weights = {
  skinType:           2,
  perConcern:         3,
  budget:             1,
  ageGroup:           1,
  climate:            1,
  sensitivityPenalty: 5,
  sensitivityReward:  1,
};

const questions = [
  {
    id: 1,
    text: "How would you describe your skin type?",
    subtext:
      "Learning about your skin type helps us recommend products that work in gentle harmony with it.",
    type: "single",
    options: [
      {
        value: "Oily",
        text: "Oily: Shiny all over, prone to breakouts",
        image: "/oily.webp",
      },
      {
        value: "Dry",
        text: "Dry: Tight, flaky, sometimes rough",
        image: "/dry.webp",
      },
      {
        value: "Combination",
        text: "Combination: Oily T-zone, normal or dry cheeks",
        image: "/combination.webp",
      },
      {
        value: "Sensitive",
        text: "Sensitive: Easily irritated, prone to redness",
        image: "/sensitive.webp",
      },
      {
        value: "Normal",
        text: "Normal: Neither too oily nor too dry",
        image: "/normal.webp",
      },
    ],
  },
  {
    id: 2,
    text: "What climate are you in?",
    subtext:
      "Your environment plays a role in skin care, so knowing your climate helps us recommend the best products for you.",
    type: "single",
    options: [
      { value: "Humid", text: "Humid", image: "/humid.webp" },
      { value: "Dry", text: "Dry", image: "/dry.webp" },
      { value: "Temperate", text: "Temperate", image: "/temperate.webp" },
      { value: "Cold", text: "Cold", image: "/cold.webp" },
      { value: "Tropical", text: "Tropical", image: "/tropical.webp" },
    ],
  },
  {
    id: 3,
    text: "How old are you?",
    subtext: "Different age groups have varying skin concerns and needs.",
    type: "single",
    options: [
      { value: "Under 18", text: "Under 18", image: "/under18.webp" },
      { value: "18-24", text: "18-24", image: "/18-24.webp" },
      { value: "25-34", text: "25-34", image: "/25-34.webp" },
      { value: "35-44", text: "35-44", image: "/35-44.webp" },
      { value: "45-54", text: "45-54", image: "/45-54.webp" },
      { value: "55+", text: "55+", image: "/55plus.webp" },
    ],
  },
  {
    id: 4,
    text: "What's your main skin concern right now?",
    subtext:
      "Focusing on your primary concern allows us to address what's most important to you.",
    type: "multiple",
    options: [
      { value: "Acne", text: "Acne or breakouts", image: "/acne.webp" },
      {
        value: "Fine Lines",
        text: "Fine lines or wrinkles",
        image: "/wrinkles.webp",
      },
      {
        value: "Uneven Skin Tone",
        text: "Uneven skin tone or dark spots",
        image: "/uneven.webp",
      },
      {
        value: "Dryness",
        text: "Dryness or flakiness",
        image: "/dryness.webp",
      },
      { value: "Excess Oil", text: "Excess oil or shine", image: "/oil.webp" },
      { value: "Pores", text: "Large pores", image: "/pores.webp" },
      {
        value: "Redness",
        text: "Redness or irritation",
        image: "/redness.webp",
      },
      {
        value: "Dullness",
        text: "Dullness or lack of glow",
        image: "/dullness.webp",
      },
    ],
  },
  {
    id: 5,
    text: "How much sun exposure does your skin typically get?",
    subtext:
      "Sun exposure impacts skin health; understanding your exposure helps in recommending protection.",
    type: "single",
    options: [
      {
        value: "Minimal",
        text: "Minimal: Mostly indoors",
        image: "/indoors.webp",
      },
      { value: "Low", text: "Low: Short periods outside", image: "/low.webp" },
      {
        value: "Moderate",
        text: "Moderate: Regular outdoor activities",
        image: "/moderate.webp",
      },
      {
        value: "High",
        text: "High: Outdoor job or hobby",
        image: "/high.webp",
      },
    ],
  },
  {
    id: 6,
    text: "What, if any, products are you using right now?",
    subtext:
      "Knowing what you currently use helps us avoid product overlaps and contradictions.",
    type: "multiple",
    options: [
      { value: "Cleanser", text: "Cleanser", image: "/cleanser.webp" },
      { value: "Toner", text: "Toner", image: "/toner.webp" },
      { value: "Serum", text: "Serum", image: "/serum.webp" },
      { value: "Moisturizer", text: "Moisturizer", image: "/moisturizer.webp" },
      { value: "Sunscreen", text: "Sunscreen", image: "/sunscreen.webp" },
      {
        value: "Acne Treatment",
        text: "Acne treatment",
        image: "/acne_treatment.webp",
      },
      { value: "Retinoid", text: "Retinoid", image: "/retinoid.webp" },
      { value: "Exfoliant", text: "Exfoliant", image: "/exfoliant.webp" },
      { value: "None", text: "None of these", image: "/public/images/1.png" },
    ],
  },
  {
    id: 7,
    text: "How often are you stressed out?",
    subtext:
      "Stress can affect your skin; managing it can improve skin condition.",
    type: "single",
    options: [
      { value: "Rarely", text: "Rarely", image: "/rarely.webp" },
      { value: "Sometimes", text: "Sometimes", image: "/sometimes.webp" },
      { value: "Often", text: "Often", image: "/often.webp" },
      { value: "Always", text: "Always", image: "/always.webp" },
    ],
  },
  {
    id: 8,
    text: "How many hours of sleep do you get a night?",
    subtext:
      "Sleep is crucial for skin regeneration; your sleep pattern influences skin health.",
    type: "single",
    options: [
      {
        value: "Less than 4 hours",
        text: "Less than 4 hours",
        image: "/less4.webp",
      },
      { value: "4-6 hours", text: "4-6 hours", image: "/4-6.webp" },
      { value: "6-8 hours", text: "6-8 hours", image: "/6-8.webp" },
      {
        value: "More than 8 hours",
        text: "More than 8 hours",
        image: "/8plus.webp",
      },
    ],
  },
  {
    id: 9,
    text: "Are you currently:",
    subtext: "(Hormonal changes during these stages can affect your skin.)",
    type: "multiple",
    options: [
      { value: "Pregnant", text: "Pregnant", image: "/pregnant.webp" },
      {
        value: "Trying to get pregnant",
        text: "Trying to get pregnant",
        image: "/trying.webp",
      },
      {
        value: "Recent birth",
        text: "A new mother (within the last year)",
        image: "/recent_birth.webp",
      },
      {
        value: "Menopause",
        text: "Experiencing menopause, perimenopause, or andropause",
        image: "/menopause.webp",
      },
      {
        value: "Diabetic",
        text: "Diabetic or hypoglycemic",
        image: "/diabetic.webp",
      },
      { value: "None", text: "None of the above", image: "/none.webp" },
    ],
  },
  {
    id: 10,
    text: "How does your skin feel in the morning before washing your face?",
    subtext:
      "How your skin feels in the morning indicates its overnight behavior.",
    type: "single",
    options: [
      { value: "Oily", text: "Oily", image: "/oily.webp" },
      { value: "Dry", text: "Dry", image: "/dry.webp" },
      { value: "Normal", text: "Normal", image: "/normal.webp" },
      { value: "Sensitive", text: "Sensitive", image: "/sensitive.webp" },
      { value: "Combination", text: "Combination", image: "/combination.webp" },
    ],
  },
  {
    id: 11,
    text: "How does your face feel right after you wash it?",
    subtext:
      "Immediate post-wash feel helps identify skin's natural tendencies.",
    type: "single",
    options: [
      { value: "Tight", text: "Tight", image: "/tight.webp" },
      { value: "Smooth", text: "Smooth", image: "/smooth.webp" },
      { value: "Dry", text: "Dry", image: "/dry.webp" },
      { value: "Normal", text: "Normal", image: "/normal.webp" },
      { value: "Oily", text: "Oily", image: "/oily.webp" },
    ],
  },
  {
    id: 12,
    text: "How much time can you dedicate to your skincare routine?",
    subtext:
      "Understanding your time commitment helps us suggest a suitable routine.",
    type: "single",
    options: [
      {
        value: "1-2 minutes",
        text: "1-2 minutes: Quick and simple",
        image: "/quick.webp",
      },
      {
        value: "5-10 minutes",
        text: "5-10 minutes: A bit more thorough",
        image: "/thorough.webp",
      },
      {
        value: "15-20 minutes",
        text: "15-20 minutes: Enjoy a more extensive routine",
        image: "/extensive.webp",
      },
      {
        value: "30+ minutes",
        text: "30+ minutes: Love to indulge in skincare",
        image: "/indulge.webp",
      },
    ],
  },
  {
    id: 13,
    text: "Are there any ingredients your skin doesn't agree with?",
    subtext:
      "Avoiding ingredients your skin dislikes prevents adverse reactions.",
    type: "multiple",
    options: [
      { value: "Fragrance", text: "Fragrance", image: "/fragrance.webp" },
      {
        value: "Essential Oils",
        text: "Essential oils",
        image: "/essential_oils.webp",
      },
      { value: "Alcohol", text: "Alcohol", image: "/alcohol.webp" },
      { value: "Silicones", text: "Silicones", image: "/silicones.webp" },
      { value: "Sulfates", text: "Sulfates", image: "/sulfates.webp" },
      { value: "Parabens", text: "Parabens", image: "/parabens.webp" },
      /*         { value: "Other", text: "Other (please specify)", image: "/other.webp" },
       */ {
        value: "No known sensitivities",
        text: "No known sensitivities",
        image: "/no_sensitivities.webp",
      },
    ],
  },
  {
    id: 14,
    text: "Have you used any of these active ingredients before?",
    subtext:
      "Knowing past usage helps us gauge your skin's tolerance to actives.",
    type: "multiple",
    options: [
      { value: "Retinol", text: "Retinol", image: "/retinol.webp" },
      { value: "Vitamin C", text: "Vitamin C", image: "/vitamin_c.webp" },
      { value: "AHAs", text: "AHAs (like glycolic acid)", image: "/ahas.webp" },
      {
        value: "BHAs",
        text: "BHAs (like salicylic acid)",
        image: "/bhas.webp",
      },
      { value: "Niacinamide", text: "Niacinamide", image: "/niacinamide.webp" },
      {
        value: "Hyaluronic acid",
        text: "Hyaluronic acid",
        image: "/hyaluronic_acid.webp",
      },
      { value: "None", text: "None of these", image: "/none.webp" },
    ],
  },
  {
    id: 15,
    text: "What's your skincare budget range (for a complete routine)?",
    subtext: "We aim to recommend products within your budget.",
    type: "single",
    options: [
      { value: "Under $50", text: "Under $50", image: "/under50.webp" },
      { value: "$50-$100", text: "$50-$100", image: "/50-100.webp" },
      { value: "$100-$200", text: "$100-$200", image: "/100-200.webp" },
      { value: "$200+", text: "$200+", image: "/200plus.webp" },
    ],
  },
  {
    id: 16,
    text: "Which best describes your typical day?",
    subtext: "Your daily routine can influence your skin's condition.",
    type: "single",
    options: [
      {
        value: "Early riser",
        text: "Early riser, busy days",
        image: "/early_riser.webp",
      },
      {
        value: "Standard 9-5 schedule",
        text: "Standard 9-5 schedule",
        image: "/9-5.webp",
      },
      {
        value: "Night owl",
        text: "Night owl, late sleeper",
        image: "/night_owl.webp",
      },
      {
        value: "Irregular schedule",
        text: "Irregular schedule, shift work",
        image: "/shift_work.webp",
      },
    ],
  },
  {
    id: 17,
    text: "Are you currently using any of the following?",
    subtext:
      "Some medications can affect skin; this helps in avoiding conflicts.",
    type: "multiple",
    options: [
      {
        value: "Acne medications",
        text: "Acne medications",
        image: "/acne_medications.webp",
      },
      {
        value: "Prescription retinoids",
        text: "Prescription retinoids",
        image: "/prescription_retinoids.webp",
      },
      {
        value: "Oral contraceptives",
        text: "Oral contraceptives",
        image: "/oral_contraceptives.webp",
      },
      {
        value: "Hormone treatments",
        text: "Hormone treatments",
        image: "/hormone_treatments.webp",
      },
      { value: "None", text: "None of the above", image: "/none.webp" },
      {
        value: "I'm not sure",
        text: "I'm not sure",
        image: "/im_not_sure.webp",
      },
    ],
  },
  {
    id: 18,
    text: "What's your primary skincare goal?",
    subtext: "Your main goal guides us in prioritizing recommendations.",
    type: "single",
    options: [
      {
        value: "Achieve a natural, healthy glow",
        text: "Achieve a natural, healthy glow",
        image: "/healthy_glow.webp",
      },
      {
        value: "Reduce signs of aging",
        text: "Reduce signs of aging",
        image: "/reduce_aging.webp",
      },
      {
        value: "Clear up acne or breakouts",
        text: "Clear up acne or breakouts",
        image: "/clear_acne.webp",
      },
      {
        value: "Even out skin tone",
        text: "Even out skin tone",
        image: "/even_tone.webp",
      },
      {
        value: "Hydrate and nourish dry skin",
        text: "Hydrate and nourish dry skin",
        image: "/hydrate.webp",
      },
      {
        value: "Control oil and shine",
        text: "Control oil and shine",
        image: "/control_oil.webp",
      },
    ],
  },
  {
    id: 19,
    text: "How do you feel about fragrances in your products?",
    subtext: "Preferences for fragrances help us select products you'll enjoy.",
    type: "single",
    options: [
      {
        value: "Prefer fragranced products",
        text: "Prefer fragranced products",
        image: "/prefer_fragrance.webp",
      },
      {
        value: "Enjoy light, natural scents",
        text: "Enjoy light, natural scents",
        image: "/light_scent.webp",
      },
      {
        value: "Prefer unscented products",
        text: "Prefer unscented products",
        image: "/unscented.webp",
      },
      {
        value: "No preference",
        text: "No preference",
        image: "/no_preference.webp",
      },
    ],
  },
  {
    id: 20,
    text: "How important is using eco-friendly and sustainable products to you?",
    subtext:
      "We consider your values in sustainability when recommending products.",
    type: "single",
    options: [
      {
        value: "Very important",
        text: "Very important, it's a top priority",
        image: "/very_important.webp",
      },
      {
        value: "Somewhat important",
        text: "Somewhat important, I consider it",
        image: "/somewhat_important.webp",
      },
      {
        value: "Not a deciding factor",
        text: "Not a deciding factor for me",
        image: "/not_deciding.webp",
      },
    ],
  },
  {
    id: 21,
    text: "Are there any specific areas of your face that need extra attention?",
    subtext: "Targeting specific areas allows for more precise treatments.",
    type: "multiple",
    options: [
      { value: "Forehead", text: "Forehead", image: "/forehead.webp" },
      {
        value: "Nose and surrounding area",
        text: "Nose and surrounding area",
        image: "/nose.webp",
      },
      { value: "Cheeks", text: "Cheeks", image: "/cheeks.webp" },
      {
        value: "Chin and jawline",
        text: "Chin and jawline",
        image: "/chin_jawline.webp",
      },
      {
        value: "Under-eye area",
        text: "Under-eye area",
        image: "/under_eye.webp",
      },
      {
        value: "No specific areas",
        text: "No specific areas",
        image: "/none.webp",
      },
    ],
  },
  {
    id: 22,
    text: "How does your skin react to changes in seasons or travel?",
    subtext:
      "Understanding skin reactions helps in preparing for fluctuations.",
    type: "multiple",
    options: [
      { value: "Becomes drier", text: "Becomes drier", image: "/drier.webp" },
      {
        value: "Becomes oilier",
        text: "Becomes oilier",
        image: "/oilier.webp",
      },
      {
        value: "More prone to breakouts",
        text: "More prone to breakouts",
        image: "/breakouts.webp",
      },
      {
        value: "More sensitive or irritated",
        text: "More sensitive or irritated",
        image: "/sensitive_irritated.webp",
      },
      {
        value: "No significant changes",
        text: "No significant changes",
        image: "/no_changes.webp",
      },
    ],
  },
  {
    id: 23,
    text: "Are you interested in multi-use products that can simplify your routine?",
    subtext: "Simplifying your routine if preferred.",
    type: "single",
    options: [
      {
        value: "Very interested",
        text: "Very interested, I love multitasking products",
        image: "/very_interested.webp",
      },
      {
        value: "Somewhat interested",
        text: "Somewhat interested, depends on the product",
        image: "/somewhat_interested.webp",
      },
      {
        value: "Prefer separate products",
        text: "Prefer separate products for each step",
        image: "/separate_products.webp",
      },
    ],
  },
];

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
    url: "https://amzn.to/445YjHw", /* associate link: https://amzn.to/445YjHw */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp", /*     image: "/public/images/Sulwhasoo.jpg",
    hoverImage: "/public/images/sulwhasoo1.jpg", */
  },
  {
    id: 2,
    name: " Innisfree Green Tea Amino Acid Cleansing Oil",
    category: "Cleanser",
    suitableFor: ["Oily", "Combination"],
    concerns: ["Excess Oil", "Pores"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://us.innisfree.com/products/apple-seed-cleansing-oil", /* associate link:https://amzn.to/4jXqAWG */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp", /*     image: "/public/images/innisfree.jpg",
    hoverImage: "/public/images/innisfree1.jpg", */
  },
/* 
Only really available internationally, but is a cult classic, going to just use the available green tea one for now.
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
    url: "https://us.innisfree.com/products/apple-seed-cleansing-oil", /* associate link:https://amzn.to/4jXqAWG 
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp", /*     image: "/public/images/innisfree.jpg",
    hoverImage: "/public/images/innisfree1.jpg", 
  }, */
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
    url: "https://amzn.to/3HOO02V", /* associate link:https://www.stylevana.com/en_US/deal-beauty-of-joseon-glow-serum-propolis-niacinamide-30ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3HI2mlT", /* https://www.amazon.com/Face-Shop-Cleansing-Brightening-K-Beauty/dp/B00809ERAM",  */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4ejLspJ", /* https://www.amazon.com/Etude-House-Cleansing-Moisture-milliliters/dp/B00965M61G", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3ZEMDdk", /* https://www.amazon.com/BANILA-CO-Clean-Original-Cleansing/dp/B0CW7LGBB6", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3G20nIq", /* https://www.amazon.com/heimish-Clean-4-0fl-oz-120ml-Balm/dp/B01CJ639SM", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4kMRul1", /* https://www.amazon.com/Beauty-Joseon-Radiance-Cleansing-Balm/dp/B07ZDQG9FJ", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4edgSOl", /* 10% https://www.amazon.com/dp/B08Y4N16PC", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/43TLnWn", /* 10% https://www.amazon.com/dp/B08N335GXN", */ 
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4lfrmiH", /* https://www.amazon.com/dp/B092Q3YB34", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3TwWONp", /* https://www.amazon.com/SKIN-FOOD-Black-Sugar-Perfect/dp/B01828IP7G", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://www.amazon.com/Cosrx-Clarifying-Treatment-3-38oz-100ml/dp/B014SAAW3W", /* page link not found */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/40e4rfv", /* https://www.yesstyle.com/en/pyunkang-yul-essence-toner-200ml-200ml/info.html/pid.1060395495", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://www.stylevana.com/en_US/deal-cosrx-advanced-snail-96-mucin-power-essence-100ml.html", /* not currently on amazon */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4k3K2AW", /*https://www.stylevana.com/en_US/deal-neogen-dermalogy-dermalogy-real-ferment-micro-essence-150ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/463CWsQ", /* https://www.ulta.com/p/glass-skin-refining-serum-xlsImpprod18971035", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4kOVFNh", /* https://www.stylevana.com/en_US/some-by-mi-aha-bha-pha-30-days-miracle-toner-150ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/44cw0XI", /* https://skinlovecream.com/products/sulwhasoo-first-care-activating-serum-mini", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/44qlGN4", /* https://www.amazon.com/MISSHA-Revolution-Night-Repair-Ampoule/dp/B09648RPKJ", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3G0UETk", /* https://holiholic.com/products/innisfree-new-jeju-orchid-eye-cream-30ml", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3FNcGZe", /* https://www.amazon.com/MIZON-natural-treatment-hydrating-skincare/dp/B00AFLSE7U", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3HQdqxe", /* https://www.avon.com/product/belif-the-true-cream-moisturizing-bomb-71506", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4n8ZxdL", /* https://www.ulta.com/p/oil-free-ultra-moisturizing-lotion-with-birch-sap-pimprod2035883", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/3ZJu0F8", /* https://www.stylevana.com/en_US/innisfree-green-tea-seed-hyaluronic-cream-50ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/4enyirW", /* https://www.stylevana.com/en_US/top-pick-beauty-of-joseon-relief-sun-rice-probiotic-spf50-pa-50ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://www.cosrx.com/products/aloe-soothing-sun-cream-spf50-pa?srsltid=AfmBOooZY76wbnFiHbYtlEz8L4q-zWZFUdj18z_20z6-7nyjCmAkLWuG", /*https://beautynetkorea.com/product/cosrx-aloe-soothing-sun-cream-spf50pa-50ml-weight-79g/8467", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/43Y6Q0o", /* https://www.stylevana.com/en_US/deal-laneige-water-sleeping-mask-ex-70ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
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
    url: "https://amzn.to/44rDWps", /* https://www.amazon.com/COSRX-Ultimate-Nourishing-Rice-Overnight/dp/B01N13W31F", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
  },
  {
    id: 30,
    name: "Innisfree Super Volcanic Pore Clay Mask",
    category: "Mask",
    suitableFor: ["Oily", "Combination"],
    concerns: ["Pores", "Excess Oil"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://amzn.to/3ZK5UtP", /* https://www.stylevana.com/en_US/deal-innisfree-jeju-volcanic-pore-clay-mask-original-100ml.html", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
  },
];

// Define the getRecommendedProducts function OUTSIDE the event listener
function getRecommendedProducts(userAnswers) {
  const scoredProducts = products.map(product => {
    let score = 0;
    const breakdown = {};

    // skin type
    const skinMatch = product.suitableFor.includes(userAnswers.skinType);
    breakdown.skinType = skinMatch ? weights.skinType : 0;
    score += breakdown.skinType;

    // concerns
    const concernMatches = product.concerns.filter(concern =>
      userAnswers.concerns?.includes(concern)
    ).length;
    breakdown.concerns = concernMatches * weights.perConcern;
    score += breakdown.concerns;

    // budget
    const budgetMatch = product.budgetRange === userAnswers.budget;
    breakdown.budget = budgetMatch ? weights.budget : 0;
    score += breakdown.budget;

    // age group
    const ageMatch = product.ageGroup.includes(userAnswers.ageGroup)
                  || product.ageGroup.includes("All");
    breakdown.ageGroup = ageMatch ? weights.ageGroup : 0;
    score += breakdown.ageGroup;

    // climate
    const climateMatch = product.climate.includes(userAnswers.climate)
                      || product.climate.includes("All");
    breakdown.climate = climateMatch ? weights.climate : 0;
    score += breakdown.climate;

    // sensitivities
    const sensitivityMatches = product.sensitivities.filter(s =>
      userAnswers.sensitivities?.includes(s)
    ).length;
    if (sensitivityMatches > 0) {
      breakdown.sensitivity = -sensitivityMatches * weights.sensitivityPenalty;
      score += breakdown.sensitivity;
    } else {
      breakdown.sensitivity = weights.sensitivityReward;
      score += breakdown.sensitivity;
    }

    return { ...product, score, breakdown };
  });

  // sort descending
  return scoredProducts.sort((a, b) => b.score - a.score);
}

function debugRecommendations(userAnswers) {
  const all = getRecommendedProducts(userAnswers);
  console.table(
    all.slice(0, 10).map(p => ({
      name:       p.name,
      score:      p.score,
      ...p.breakdown
    }))
  );
}

document.addEventListener("DOMContentLoaded", function () {
  try {
    console.log("DOM loaded"); // Check if event listener fires
    console.log("Questions array length:", questions.length);
    console.log("Products array length:", products.length);

    // Variables to store the current question index and answers
    let currentQuestionIndex = 0;
    let answers = {};

    // DOM elements
    const introContainer = document.getElementById("introContainer");
    const startBtn = document.getElementById("startBtn");
    const quizContainer = document.getElementById("quizContainer");
    const quizContent = document.getElementById("quizContent");
    const questionCounter = document.getElementById("questionCounter");
    const progressBar = document.getElementById("progress");
    const prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");

    // Load saved data from localStorage with proper error handling
    function loadSavedState() {
      try {
        // Set default state first
        document.body.classList.add("intro-active");
        introContainer.style.display = "flex";
        quizContainer.style.display = "none";

        const savedIndex = localStorage.getItem("currentQuestionIndex");
        const savedAnswers = localStorage.getItem("answers");

        if (savedIndex !== null && savedAnswers !== null) {
          currentQuestionIndex = parseInt(savedIndex, 10);
          answers = JSON.parse(savedAnswers);

          if (
            isNaN(currentQuestionIndex) ||
            currentQuestionIndex < 0 ||
            currentQuestionIndex >= questions.length
          ) {
            throw new Error("Invalid question index");
          }

          // Only remove intro state if we have valid saved state
          document.body.classList.remove("intro-active");
          introContainer.style.display = "none";
          quizContainer.style.display = "flex";
          renderQuestion();
        }
      } catch (error) {
        console.error("Error loading saved state:", error);
        resetQuizState();
        showIntroView();
      }
    }

    function resetQuizState() {
      currentQuestionIndex = 0;
      answers = {};
      localStorage.removeItem("currentQuestionIndex");
      localStorage.removeItem("answers");

      // Always reset to intro state
      document.body.classList.add("intro-active");
      quizContent.classList.remove("fade-out");
    }

    // Function to show the intro view
    function showIntroView() {
      // First hide quiz
      quizContainer.style.display = "none";

      // Then set up intro view
      document.body.classList.add("intro-active");
      introContainer.style.display = "flex";

      // Ensure clean state
      resetQuizState();
    }

    // Start button event listener
    startBtn.addEventListener("click", () => {
      resetQuizState();
      introContainer.style.display = "none";
      quizContainer.style.display = "flex";
      document.body.classList.remove("intro-active");
      renderQuestion();
    });

    // Define the handleEnterKey function
    function handleEnterKey(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        if (!isOptionSelected()) {
          showToast("*Select an answer.");
          return;
        }
        nextBtn.click();
      }
    }

    // Function to move to the next question or submit the quiz
    function moveToNextQuestion() {
      saveAnswer();

      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
        renderQuestion();
      } else {
        submitQuiz();
      }
    }

    // Function to move to the previous question
    function moveToPreviousQuestion() {
      saveAnswer();

      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
        renderQuestion();
      } else {
        showIntroView();
        resetQuizState();
      }
    }

    // Handle Next button click
    function handleNextButtonClick() {
      if (!isOptionSelected()) {
        showToast("*Select an answer.");
        return;
      }
      moveToNextQuestion();
    }

 /* ───────────────────────── renderQuestion() ─────────────────────────
   Added mutual-exclusivity handling for “None / No… / I’m not sure”
   check-boxes in multiple-choice questions.  New/changed lines →  🔸
──────────────────────────────────────────────────────────────────── */
function renderQuestion() {
  console.log("Rendering question:", currentQuestionIndex);
  const question = questions[currentQuestionIndex];

  // Start fade out
  quizContent.classList.add("fade-out");

  // Wait for fade out to complete before updating content
  setTimeout(() => {
    const questionImages = {
      1: "/public/images/shine.webp",
      2: "/public/images/climate.jpg",
      3: "/public/images/dance.jpg",
      4: "/public/images/eye.jpg",
      5: "/public/images/blur.jpg",
      6: "/public/images/product.jpg",
      7: "/public/images/stress.jpg",
      8: "/public/images/sleep.webp",
      9: "/public/images/mum2.jpg",
      10: "/public/images/morning1.jpg",
      11: "/public/images/lips1.jpg",
      12: "/public/images/slow.jpg",
      13: "/public/images/skin1.jpg",
      14: "/public/images/sheet1.jpg",
      15: "/public/images/fire1.png",
      16: "/public/images/beach.png",
      17: "/public/images/water2.jpg",
      18: "/public/images/hair.jpg",
      19: "/public/images/smell.jpg",
      20: "/public/images/fish.jpg",
      21: "/public/images/glow.jpg",
      22: "/public/images/car.jpg",
      23: "/public/images/routine.jpg",
    };

    const questionImage =
      questionImages[question.id] || "/public/images/balloon.jpg";

    let quizHtml = `
      <div class="quiz-question-container">
        <div class="quiz-question-content">
          <div class="question-header">
            <h2>
              <img src="${questionImage}" alt="Question Image" class="question-image">
              ${question.text}
            </h2>
            ${
              question.subtext
                ? `<p class="question-subtext">${question.subtext}</p>`
                : ""
            }
          </div>
          <div class="options-container">
    `;

    question.options.forEach((option) => {
      const isChecked = checkIfOptionIsSelected(question, option);
      quizHtml += `
        <label class="option">
          <input type="${
            question.type === "multiple" ? "checkbox" : "radio"
          }"
                 name="question-${question.id}"
                 value="${option.value}"
                 ${isChecked ? "checked" : ""}>
          <span class="option-text">${option.text}</span>
        </label>
      `;
    });

    quizHtml += `
          </div>
        </div>
      </div>
    `;

    quizContent.innerHTML = quizHtml;
    quizContent.style.backgroundImage = "none";

    prevBtn.disabled = false;
    prevBtn.classList.remove("disabled");
    nextBtn.textContent =
      currentQuestionIndex === questions.length - 1 ? "Finish" : "Continue";

    addTooltipToNextButton();

    nextBtn = document.getElementById("nextBtn");
    nextBtn.removeEventListener("click", handleNextButtonClick);
    nextBtn.addEventListener("click", handleNextButtonClick);

    const inputs = document.querySelectorAll(
      `input[name="question-${question.id}"]`
    );
    inputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (question.type === "single") {
          setTimeout(moveToNextQuestion, 80);
          return;
        }

        /* ──────── NEW: enforce exclusivity for “None …” answers ──────── */
        const isExclusive = (val) =>
          /^(none|no\s|i\'?m\s*not\s*sure)/i.test(val); // 🔸

        if (isExclusive(input.value) && input.checked) {               // 🔸
          inputs.forEach((i) => { if (i !== input) i.checked = false; }); // 🔸
        } else if (!isExclusive(input.value) && input.checked) {        // 🔸
          inputs.forEach((i) => {                                        // 🔸
            if (isExclusive(i.value)) i.checked = false;                 // 🔸
          });                                                            // 🔸
        }                                                                // 🔸
        /* ─────────────────────────────────────────────────────────────── */
      });
    });

    document.removeEventListener("keydown", handleEnterKey);
    document.addEventListener("keydown", handleEnterKey);

    // Start fade in
    requestAnimationFrame(() => {
      quizContent.classList.remove("fade-out");
    });
  }, 200); // Match this to your CSS transition duration

  updateProgressBar();
}


    function updateProgressBar() {
      const totalQuestions = questions.length;
      const currentQuestionNumber = currentQuestionIndex + 1; // since it's 0-based index
      const progressPercent = (currentQuestionNumber / totalQuestions) * 100;
      progressBar.style.width = progressPercent + "%";
    }

    // Function to check if an option should be pre-selected
    function checkIfOptionIsSelected(question, option) {
      const savedAnswer = answers[question.id];
      if (!savedAnswer) {
        return false;
      }
      return question.type === "multiple"
        ? savedAnswer.includes(option.value)
        : savedAnswer === option.value;
    }

    // Function to add tooltip to the Next button
    function addTooltipToNextButton() {
      let tooltipDisplayCount =
        parseInt(sessionStorage.getItem("tooltipDisplayCount")) || 0;

      if (tooltipDisplayCount < 2) {
        if (!nextBtn.parentElement.classList.contains("tooltip-container")) {
          const tooltipContainer = document.createElement("div");
          tooltipContainer.classList.add("tooltip-container");

          const tooltipText = document.createElement("div");
          tooltipText.classList.add("tooltip-text");
          tooltipText.textContent = "Or press ⮐";

          nextBtn.parentElement.replaceChild(tooltipContainer, nextBtn);
          tooltipContainer.appendChild(nextBtn);
          tooltipContainer.appendChild(tooltipText);
        }

        tooltipDisplayCount++;
        sessionStorage.setItem("tooltipDisplayCount", tooltipDisplayCount);
      } else if (
        nextBtn.parentElement.classList.contains("tooltip-container")
      ) {
        const tooltipContainer = nextBtn.parentElement;
        const parent = tooltipContainer.parentElement;
        parent.replaceChild(nextBtn, tooltipContainer);
      }

      nextBtn = document.getElementById("nextBtn");
    }

    // Function to check if at least one option is selected
    function isOptionSelected() {
      const question = questions[currentQuestionIndex];
      const inputs = document.querySelectorAll(
        `input[name="question-${question.id}"]`
      );
      return Array.from(inputs).some((i) => i.checked);
    }

    // Save answer with error handling
    function saveAnswer() {
      try {
        const question = questions[currentQuestionIndex];
        const inputs = document.querySelectorAll(
          `input[name="question-${question.id}"]`
        );

        if (question.type === "multiple") {
          answers[question.id] = Array.from(inputs)
            .filter((input) => input.checked)
            .map((input) => input.value);
        } else {
          const selectedInput = Array.from(inputs).find(
            (input) => input.checked
          );
          if (selectedInput) {
            answers[question.id] = selectedInput.value;
          }
        }

        localStorage.setItem("answers", JSON.stringify(answers));
      } catch (error) {
        console.error("Error saving answer:", error);
        showToast("Error saving your answer. Please try again.");
      }
    }

    // Function to show the toast message
    function showToast(message) {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;

      document.body.appendChild(toast);
      void toast.offsetWidth;
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("transitionend", () => {
          toast.remove();
        });
      }, 1500);
    }

    // Function to generate a skincare routine based on user answers and recommended products
    function generateRoutine(userAnswers, allSortedProducts) {
      // Determine routine complexity based on time
      let morningSteps = [];
      let eveningSteps = [];
    
      const timeChoice = userAnswers.routineTime;
      if (timeChoice === "1-2 minutes") {
        morningSteps = [
          { step: "Cleanse", category: "Cleanser" },
          { step: "Moisturize", category: "Moisturizer" },
          { step: "Protect", category: "Sunscreen" },
        ];
        eveningSteps = [
          { step: "Cleanse", category: "Cleanser" },
          { step: "Moisturize", category: "Moisturizer" },
        ];
      } else if (timeChoice === "5-10 minutes") {
        morningSteps = [
          { step: "Cleanse", category: "Cleanser" },
          { step: "Tone", category: "Toner" },
          { step: "Moisturize", category: "Moisturizer" },
          { step: "Protect", category: "Sunscreen" },
        ];
        eveningSteps = [
          { step: "First Cleanse", category: "Cleanser" },
          { step: "Second Cleanse", category: "Cleanser" },
          { step: "Tone", category: "Toner" },
          { step: "Moisturize", category: "Moisturizer" },
        ];
      } else if (timeChoice === "15-20 minutes") {
        morningSteps = [
          { step: "Cleanse", category: "Cleanser" },
          { step: "Tone", category: "Toner" },
          { step: "Serum", category: "Serum" },
          { step: "Moisturize", category: "Moisturizer" },
          { step: "Protect", category: "Sunscreen" },
        ];
        eveningSteps = [
          { step: "First Cleanse", category: "Cleanser" },
          { step: "Second Cleanse", category: "Cleanser" },
          { step: "Tone", category: "Toner" },
          { step: "Serum", category: "Serum" },
          { step: "Eye Care", category: "Eye Cream" },
          { step: "Moisturize", category: "Moisturizer" },
        ];
      } else {
        // 30+ minutes
        morningSteps = [
          { step: "Cleanse", category: "Cleanser" },
          { step: "Tone", category: "Toner" },
          { step: "Essence", category: "Essence" },
          { step: "Serum", category: "Serum" },
          { step: "Moisturize", category: "Moisturizer" },
          { step: "Protect", category: "Sunscreen" },
        ];
        eveningSteps = [
          { step: "First Cleanse", category: "Cleanser" },
          { step: "Second Cleanse", category: "Cleanser" },
          { step: "Tone", category: "Toner" },
          { step: "Essence", category: "Essence" },
          { step: "Serum", category: "Serum" },
          { step: "Eye Care", category: "Eye Cream" },
          { step: "Moisturize", category: "Moisturizer" },
        ];
      }
    
      // Weekly treatments
      const weeklyTreatments = [];
      if (userAnswers.concerns?.includes("Acne")) {
        weeklyTreatments.push({
          step: "Exfoliate",
          category: "Exfoliator",
          frequency: "2-3 times per week",
          instructions:
            "Gently exfoliate after cleansing on selected nights. Avoid other strong actives on these nights.",
        });
      }
      if (userAnswers.concerns?.includes("Dullness")) {
        weeklyTreatments.push({
          step: "Mask",
          category: "Mask",
          frequency: "1-2 times per week",
          instructions:
            "Apply mask to clean skin, leave on for recommended time, then continue with the rest of your routine.",
        });
      }
    
      // A helper to find the best product for a category from the entire sorted list
      function findBestProductForCategory(category) {
        return (
          allSortedProducts
            .filter((p) => p.category.toLowerCase() === category.toLowerCase())
            [0] || null
        );
      }

    
      const morning = morningSteps.map((s) => {
        const product = findBestProductForCategory(s.category);
        return {
          step: s.step,
          category: s.category,
          product: product ? product.name : `No product found for ${s.category}`,
          productUrl: product ? product.url : null,
          productImg: product ? product.image : null,
          instructions:
            s.instructions ||
            (product
              ? `Use the recommended ${s.category.toLowerCase()} as directed.`
              : `Consider a gentle, fragrance-free ${s.category.toLowerCase()} that suits your needs.`),
          duration: "1-2 minutes",
        };
      });
    
      const evening = eveningSteps.map((s) => {
        const product = findBestProductForCategory(s.category);
        return {
          step: s.step,
          category: s.category,
          product: product ? product.name : `No product found for ${s.category}`,
          productUrl: product ? product.url : null,
          productImg: product ? product.image : null,
          instructions:
            s.instructions ||
            (product
              ? `Use the recommended ${s.category.toLowerCase()} as directed.`
              : `Consider a suitable ${s.category.toLowerCase()} that fits your routine.`),
          duration: "1-2 minutes",
        };
      });
    
      const weekly = weeklyTreatments.map((t) => {
        const product = findBestProductForCategory(t.category);
        return {
          step: t.step,
          category: t.category,
          product: product ? product.name : `No product found for ${t.category}`,
          productUrl: product ? product.url : null,
          productImg: product ? product.image : null,
          instructions: t.instructions,
          frequency: t.frequency,
        };
      });
    
      return { morning, evening, weekly };
    }

    // Function to format the routine for display
    function formatRoutineForDisplay(routine) {
      // Ensure routine has required properties
      if (!routine.morning || !routine.evening) {
        return {
          morning: [
            {
              step: "Cleanse",
              product: "Basic Gentle Cleanser",
              instructions: "Wash face with lukewarm water",
            },
          ],
          evening: [
            {
              step: "Cleanse",
              product: "Basic Gentle Cleanser",
              instructions: "Wash face with lukewarm water",
            },
          ],
          weekly: [],
        };
      }

      // Add timing and duration estimates
      routine.morning = routine.morning.map((step) => ({
        ...step,
        duration: "2-3 minutes",
      }));

      routine.evening = routine.evening.map((step) => ({
        ...step,
        duration: "2-3 minutes",
      }));

      // Add additional tips based on routine
      routine.tips = [
        "Wait 30 seconds between each step to allow products to absorb",
        "Apply products from thinnest to thickest consistency",
        "Use upward motions when applying products to prevent dragging skin down",
        "Don't forget to extend products to neck and décolletage area",
      ];

      return routine;
    }

    // Handle finishing the quiz
    function submitQuiz() {
      try {
        saveAnswer();
    
        const userAnswers = {
          skinType: answers[1],
          climate: answers[2],
          ageGroup: answers[3],
          concerns: answers[4],
          sunExposure: answers[5],
          currentProducts: answers[6],
          stressLevel: answers[7],
          sleepHours: answers[8],
          lifeStage: answers[9],
          morningSkinFeel: answers[10],
          afterWashFeel: answers[11],
          routineTime: answers[12],
          sensitivities: answers[13],
          usedIngredients: answers[14],
          budget: answers[15],
          dailyRoutine: answers[16],
          medications: answers[17],
          skincareGoal: answers[18],
          fragrancePreference: answers[19],
          ecoPreference: answers[20],
          focusAreas: answers[21],
          skinReaction: answers[22],
          multiUseInterest: answers[23],
        };
    
        console.log("User Answers:", userAnswers);
    
        // Get full sorted product list
        const allSortedProducts = getRecommendedProducts(userAnswers);
    
        if (allSortedProducts.length > 0) {
          // Top 5 recommended
          const recommendedProducts = allSortedProducts.slice(0, 5);
    
          const routine = generateRoutine(userAnswers, allSortedProducts);
          const formattedRoutine = formatRoutineForDisplay(routine);
          displayResults(recommendedProducts, formattedRoutine);
        } else {
          quizContent.innerHTML =
            "<h2>No products found matching your criteria.</h2><p>Please try again with different answers.</p>";
        }
    
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
    
        resetQuizState();
      } catch (error) {
        console.error("Error submitting quiz:", error);
        showToast("Error submitting quiz. Please try again.");
      }
    }

    // Function to display both products and routine

/* ── UPDATED: displayResults() – routine first, products below ── */
function displayResults(recommendedProducts, routine) {
  let resultHtml = '<div class="results-container">';

  /* ───────────────  ⬆️  ROUTINE SECTION NOW FIRST  ⬆️  ─────────────── */
  resultHtml += `
    <section class="skincare-routine">
      <h2>Your Personalized Skincare Routine</h2>
      <p class="routine-intro">
        Based on your answers, we&apos;ve crafted a routine suitable for your skin type, concerns, climate, and the time you have to dedicate.
      </p>

      <!-- Morning Routine -->
      <div class="routine-time-block">
        <h3>Morning Routine</h3>
        ${routine.morning
          .map(
            (step) => `
              <div class="routine-step">
                <h4>${step.step}</h4>
                ${
                  step.productImg
                    ? `<div class="routine-product">
                        <img src="${step.productImg}" alt="${step.product}" class="routine-product-image"/>
                        <div class="routine-product-info">
                          <p class="product-name">${
                            step.productUrl
                              ? `<a href="${step.productUrl}" target="_blank">${step.product}</a>`
                              : step.product
                          }</p>
                          <p class="instructions">${step.instructions}</p>
                        </div>
                      </div>`
                    : `<p class="product-name">${step.product}</p>
                       <p class="instructions">${step.instructions}</p>`
                }
              </div>`
          )
          .join('')}
      </div>

      <!-- Evening Routine -->
      <div class="routine-time-block">
        <h3>Evening Routine</h3>
        ${routine.evening
          .map(
            (step) => `
              <div class="routine-step">
                <h4>${step.step}</h4>
                ${
                  step.productImg
                    ? `<div class="routine-product">
                        <img src="${step.productImg}" alt="${step.product}" class="routine-product-image"/>
                        <div class="routine-product-info">
                          <p class="product-name">${
                            step.productUrl
                              ? `<a href="${step.productUrl}" target="_blank">${step.product}</a>`
                              : step.product
                          }</p>
                          <p class="instructions">${step.instructions}</p>
                        </div>
                      </div>`
                    : `<p class="product-name">${step.product}</p>
                       <p class="instructions">${step.instructions}</p>`
                }
              </div>`
          )
          .join('')}
      </div>

      ${
        routine.weekly.length
          ? `
        <!-- Weekly Treatments -->
        <div class="routine-time-block">
          <h3>Weekly Treatments</h3>
          ${routine.weekly
            .map(
              (treatment) => `
                <div class="routine-step">
                  <h4>${treatment.step}</h4>
                  ${
                    treatment.productImg
                      ? `<div class="routine-product">
                          <img src="${treatment.productImg}" alt="${treatment.product}" class="routine-product-image"/>
                          <div class="routine-product-info">
                            <p class="product-name">${
                              treatment.productUrl
                                ? `<a href="${treatment.productUrl}" target="_blank">${treatment.product}</a>`
                                : treatment.product
                            }</p>
                            <p class="instructions">${treatment.instructions}</p>
                            <p class="frequency"><strong>Frequency:</strong> ${treatment.frequency}</p>
                          </div>
                        </div>`
                      : `<p class="product-name">${treatment.product}</p>
                         <p class="instructions">${treatment.instructions}</p>
                         <p class="frequency"><strong>Frequency:</strong> ${treatment.frequency}</p>`
                  }
                </div>`
            )
            .join('')}
        </div>`
          : ''
      }

      <div class="routine-tips-block">
        <h3>Additional Tips</h3>
        <ul class="routine-tips">
          <li>Apply products from thinnest to thickest consistency.</li>
          <li>Wait about 30 seconds between steps to let products absorb.</li>
          <li>Be consistent and give products time to show results.</li>
          <li>Don’t forget neck and décolletage!</li>
        </ul>
      </div>
    </section>
  `;

  /* ───────────────  ⬇️  PRODUCTS SECTION NOW BELOW  ⬇️  ─────────────── */
  resultHtml += `
    <section class="recommended-products">
      <h2>Your Top Recommended Products</h2>
      <div class="products-container">
        ${recommendedProducts
          .map(
            (product) => `
              <div class="product-card">
                <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                  <img src="${product.hoverImage}" alt="${product.name} - Hover" class="hover-image">
                </div>
                <div class="product-info">
                  <h3>${product.name}</h3>
                  <p><strong>Category:</strong> ${product.category}</p>
                  <p><strong>Suitable for:</strong> ${product.suitableFor.join(', ')}</p>
                  <p><strong>Concerns:</strong> ${product.concerns.join(', ')}</p>
                  <p><strong>Price Range:</strong> ${product.budgetRange}</p>
                  <a href="${product.url}" target="_blank" class="product-link">View Product</a>
                </div>
              </div>`
          )
          .join('')}
      </div>
    </section>
  `;

  /* ──────────────────────────────────────────────────────────────── */
  resultHtml += `
    <button class="start-over-btn" id="startOverBtn">Start Over</button>
  </div>
  `;

  quizContent.innerHTML = resultHtml;

  document.getElementById('startOverBtn').addEventListener('click', startOver);
  animateResults();
}


    function animateResults() {
      const sections = document.querySelectorAll(
        ".results-container > section"
      );
      sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
          section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
        }, index * 200);
      });
    }

    // Function to display recommended products
    function displayRecommendedProducts(recommendedProducts) {
      let resultHtml = "<h2>Your Recommended Products</h2>";
      resultHtml += '<div class="products-container">';

      recommendedProducts.forEach((product) => {
        resultHtml += `
          <div class="product-card">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
              <img src="${product.hoverImage}" alt="${
          product.name
        } - Hover" class="hover-image">
            </div>
            <div class="product-info">
              <h3>${product.name}</h3>
              <p><strong>Category:</strong> ${product.category}</p>
              <p><strong>Suitable for:</strong> ${product.suitableFor.join(
                ", "
              )}</p>
              <p><strong>Concerns Addressed:</strong> ${product.concerns.join(
                ", "
              )}</p>
              <p><strong>Price Range:</strong> ${product.budgetRange}</p>
              <a href="${
                product.url
              }" target="_blank" class="product-link">View Product</a>
            </div>
          </div>
        `;
      });

      resultHtml += "</div>";
      resultHtml +=
        '<button class="start-over-btn" id="startOverBtn">Start Over</button>';

      quizContent.innerHTML = resultHtml;

      const startOverBtn = document.getElementById("startOverBtn");
      startOverBtn.addEventListener("click", startOver);

      animateProductCards();
    }

    // Function to animate product cards
    function animateProductCards() {
      const productCards = document.querySelectorAll(".product-card");
      productCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }, index * 100);
      });
    }

    // Function to start over
    function startOver() {
      resetQuizState();
      showIntroView();
      nextBtn.style.display = "inline-block";
      prevBtn.style.display = "inline-block";
    }

    // Event Listeners
    startBtn.addEventListener("click", () => {
      resetQuizState();
      introContainer.style.display = "none";
      quizContainer.style.display = "flex";
      document.body.classList.remove("intro-active");
      renderQuestion();
    });

    prevBtn.addEventListener("click", moveToPreviousQuestion);

    // Initialize
    loadSavedState();
  } catch (error) {
    console.error("Initialization error:", error);
  }
});
