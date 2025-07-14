// /js/quiz.js

 const weights = {
   skinType: 2,
   perConcern: 3,
   budget: 1,
   ageGroup: 1,
   climate: 1,
   sensitivityPenalty: 5,
   sensitivityReward: 1,
   sensitiveHitPerIrritant: 2,
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
    sensitivities: ["Fragrance"],
    url: "https://amzn.to/445YjHw" /* associate link: https://amzn.to/445YjHw */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Isopropyl Palmitate", "Fragrance", "Herbal Oil Complex"], // ← new
    ecoFriendly: false, // ← new
    notes:
      "Highly effective at melting waterproof makeup and sunscreen; emulsifies easily, leaving skin soft and hydrated. Contains fragrance and mildly comedogenic oil — patch test if acne‑prone. Some users noted slight eye irritation if it seeps into eyes.", // ← new
    pros: [
      // ← new
      "Easily removes waterproof makeup & sunscreen",
      "Emulsifies to a milky texture, rinses clean",
      "Non‑drying, hydrating — suitable for sensitive/combination skin",
    ],
    cons: [
      // ← new
      "Contains fragrance and isopropyl palmitate (mildly comedogenic)",
      "May irritate eyes if product gets in them",
      "Higher price point",
    ],
  },
  {
    id: 2,
    name: "Innisfree Green Tea Amino Acid Cleansing Oil",
    category: "Cleanser",
    suitableFor: ["Oily", "Combination", "Normal", "Dry"],
    concerns: ["Excess Oil", "Pores"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance", "Alcohol"], // ← updated
    url: "https://amzn.to/4jXqAWG" /* associate link:https://us.innisfree.com/products/apple-seed-cleansing-oil" /* associate link: */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Green Tea Extract",
      "Amino Acids",
      "Jojoba Oil",
      "Fragrance",
      "Alcohol",
    ], // ← new
    ecoFriendly: true, // ← new
    notes:
      "Lightweight, well‑rated hydrating cleansing oil. Removes most makeup & sunscreen, leaving slight film—best for everyday wear, not heavy waterproof makeup. Contains fragrance & alcohol, so may irritate very sensitive skin.", // ← new
    pros: [
      // ← new
      "Gentle, non‑stripping; rinses relatively clean",
      "Effective for SPF and light makeup",
      "Vegan‑certified, eco packaging",
    ],
    cons: [
      // ← new
      "Contains fragrance & alcohol—can irritate sensitive skin",
      "Low percentage of green tea extract (~0.01%)",
      "Not the best for waterproof mascara",
    ],
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
    suitableFor: ["Dry", "Sensitive", "Combination", "Acne‑Prone"],
    concerns: ["Dullness", "Uneven Skin Tone", "Redness"],
    budgetRange: "$50-$100",
    climate: ["All"],
    ageGroup: ["18-24", "25-34", "35-44", "45-54"],
    sensitivities: [], // ← updated
    url: "https://amzn.to/3HOO02V" /* associate link:https://www.stylevana.com/en_US/deal-beauty-of-joseon-glow-serum-propolis-niacinamide-30ml.html", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Propolis Extract",
      "Niacinamide",
      "Turmeric",
      "Rice Bran Water",
      "Alpha Arbutin",
    ], // ← new
    ecoFriendly: false, // ← new
    notes:
      "Popular budget serum with propolis & niacinamide. Brightens and hydrates without stickiness. Many users love the glow; some oily‑skin users may find it too dewy. A few report breakouts or texture reactions.", // ← new
    pros: [
      // ← new
      "Brightens skin and helps even tone",
      "Hydrating, lightweight, absorbs well",
      "Fragrance‑free and soothing",
    ],
    cons: [
      // ← new
      "May feel too dewy/glowy for oily skin types",
      "Some users experienced breakouts or slight irritation",
      "Ingredient strength may be mild for hyperpigmentation",
    ],
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
    sensitivities: ["Fragrance"],
    ingredients: ["Rice Water", "Grapeseed Oil", "Fragrance"],
    ecoFriendly: false,
    notes:
      "Popular for brightening rice water formula. Effectively removes makeup and gently exfoliates. Contains fragrance—skip if scent-sensitive. Texture is light and easy to emulsify.",
    pros: [
      "Brightens skin and gently exfoliates",
      "Lightweight and easy to rinse",
      "Affordable for daily cleansing",
    ],
    cons: [
      "Contains fragrance — not ideal for sensitive skin",
      "Might not fully remove heavy/waterproof makeup",
      "Pump sometimes prone to clogging or leaking",
    ],
    url: "https://amzn.to/3HI2mlT" /* https://www.amazon.com/Face-Shop-Cleansing-Brightening-K-Beauty/dp/B00809ERAM",  */,
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
    sensitivities: ["Fragrance"],
    ingredients: ["Grape Seed Oil", "Olive Oil", "Fragrance"],
    ecoFriendly: false,
    notes:
      "Effective for dissolving heavy sunscreen and makeup, with a rich oil blend. Contains fragrance, which may irritate sensitive users. Can be heavy/clogging if not rinsed thoroughly.",
    pros: [
      "Rich texture removes thick makeup and sunscreen",
      "Affordable and accessible",
      "Nourishing oils may soften skin over time",
    ],
    cons: [
      "Can clog pores if not rinsed thoroughly",
      "Contains fragrance, which may irritate",
      "May feel too heavy for oily or acne-prone skin",
    ],
    url: "https://amzn.to/4ejLspJ" /* https://www.amazon.com/Etude-House-Cleansing-Moisture-milliliters/dp/B00965M61G", */,
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
    sensitivities: ["Fragrance"],
    ingredients: ["Mineral Oil", "Papaya Extract", "Fragrance"],
    ecoFriendly: false,
    notes:
      "Balmy sherbet formula melts makeup easily—even waterproof. Mineral oil may occlude pores; fragrance present. Top pick for double cleanse at mid‑range price.",
    pros: [
      "Removes even waterproof makeup with ease",
      "Great texture for first cleanse in double cleansing routine",
      "Leaves skin soft and not stripped",
    ],
    cons: [
      "Contains mineral oil and fragrance — may irritate or clog",
      "Jar packaging isn’t the most hygienic",
      "Can leave light residue if not emulsified thoroughly",
    ],
    url: "https://amzn.to/3ZEMDdk" /* https://www.amazon.com/BANILA-CO-Clean-Original-Cleansing/dp/B0CW7LGBB6", */,
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
    ingredients: ["Shea Butter", "Citrus Extracts", "Fragrance"],
    ecoFriendly: false,
    notes:
      "Low‑heat balm that gently melts makeup. Non‑comedogenic ingredients but scented with citrus essential oil—avoid if very sensitive. Gentle enough for most users.",
    pros: [
      "Melts makeup effectively with low-heat formula",
      "Gentle enough for sensitive skin (aside from scent)",
      "Non-comedogenic ingredients",
    ],
    cons: [
      "Contains fragrance and essential oils—potential irritants for some",
      "Jar packaging might be less hygienic",
    ],
    url: "https://amzn.to/3G20nIq" /* https://www.amazon.com/heimish-Clean-4-0fl-oz-120ml-Balm/dp/B01CJ639SM", */,
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
    ingredients: ["Rice Bran Oil", "Ceramide", "Green Tea Extract"],
    ecoFriendly: true, // cruelty‑free, recyclable
    notes:
      "Ceramide‑rich formula nourishes while cleansing. Fragrance‑free—great for sensitive skin. Light texture, excellent for brightening and moisturizing.",
    pros: [
      "Fragrance‑free and suitable for sensitive skin",
      "Ceramides and nourishing oils leave skin soft",
      "Cruelty‑free with recyclable packaging",
    ],
    cons: [
      "Balm texture may feel heavy to some",
      "Jar packaging may require fingertip use",
    ],
    url: "https://amzn.to/4kMRul1" /* https://www.amazon.com/Beauty-Joseon-Radiance-Cleansing-Balm/dp/B07ZDQG9FJ", */,
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
    ingredients: [], // if you want the actual list added, let me know
    ecoFriendly: false,
    notes:
      "Gentle, low‑pH gel cleanser that's a favorite for morning use. Helps maintain skin's natural pH while providing light hydration. Contains minimal fragrance.",
    pros: [
      "Low‑pH formula supports healthy skin barrier",
      "Gentle cleanser suitable for sensitive and acne-prone skin",
      "Lightweight gel texture washes off clean",
    ],
    cons: [
      "Small amount of fragrance may bother very sensitive users",
      "Not intended for heavy makeup removal—use as second cleanse",
    ],
    url: "https://amzn.to/4edgSOl" /* 10% https://www.amazon.com/dp/B08Y4N16PC", */,
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
    sensitivities: ["None"],
    url: "https://amzn.to/43TLnWn" /* 10% https://www.amazon.com/dp/B08N335GXN", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Matcha",
      "Hemp Seed Oil",
      "Sodium PCA",
      "Coco-Betaine",
      "Vitamin B5",
    ],
    ecoFriendly: true, // vegan, cruelty-free, minimal packaging
    notes:
      "A low-pH, gentle jelly cleanser that nourishes and protects the skin barrier while cleansing. Beloved for its calming effect on sensitive skin.",
    pros: [
      "Supports skin barrier with antioxidants and omega fatty acids",
      "Gentle and non-stripping even for daily use",
      "Fragrance-free and suitable for sensitive skin",
    ],
    cons: [
      "Doesn't lather heavily — may feel too mild for oily skin",
      "Can leave a hydrated 'film' feel that not everyone loves",
      "Pricier than typical drugstore cleansers",
    ],
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
    url: "https://amzn.to/4lfrmiH" /* https://www.amazon.com/dp/B092Q3YB34", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Panthenol",
      "Madecassoside",
      "Green Tea Extract",
      "Glycerin",
    ],
    ecoFriendly: false,
    notes:
      "Whipped, low-pH cleanser ideal for compromised or reactive skin. Very mild and moisturizing; skips harsh surfactants but includes trace natural scents that may still bother ultra-sensitive users.",
    pros: [
      "Ultra-gentle formula with barrier-supporting ingredients",
      "Foamy texture feels soft and hydrating",
      "Free from sulfates, parabens, and artificial color",
    ],
    cons: [
      "Includes essential oils that can irritate the most sensitive users",
      "May not remove heavier layers of makeup or sunscreen",
      "Can feel too mild for oily skin types",
    ],
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
    url: "https://amzn.to/3TwWONp" /* https://www.amazon.com/SKIN-FOOD-Black-Sugar-Perfect/dp/B01828IP7G", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Black Sugar", "Macadamia Oil", "Lanolin", "Glycerin"],
    ecoFriendly: false,
    notes:
      "A cult-favorite manual scrub with nourishing oils. Leaves skin polished and soft, but not ideal for acne-prone or sensitive skin due to physical exfoliation and heavier ingredients.",
    pros: [
      "Leaves skin visibly brighter and smoother",
      "Moisturizing ingredients reduce post-exfoliation dryness",
      "Doubles as a scrub and hydrating mask",
    ],
    cons: [
      "Physical exfoliation can be too harsh for sensitive/acne-prone skin",
      "Contains lanolin and parabens",
      "Scented and can be messy to rinse off",
    ],
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
    url: "https://www.amazon.com/Cosrx-Clarifying-Treatment-3-38oz-100ml/dp/B014SAAW3W" /* page link not found */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Willow Bark Water",
      "Glycolic Acid",
      "Betaine Salicylate",
      "Allantoin",
    ],
    ecoFriendly: false,
    notes:
      "Mild exfoliating toner great for refining pores and treating breakouts. Low irritation profile for an AHA/BHA combo, but includes alcohol — watch for dryness in sensitive users.",
    pros: [
      "Helps prevent breakouts and unclog pores",
      "Gentle enough for daily use",
      "Great for acne-prone and oily skin",
    ],
    cons: [
      "Contains alcohol — may dry out sensitive or dry skin types",
      "May not show fast results for severe acne",
      "Can sting on broken or freshly exfoliated skin",
    ],
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
    url: "https://amzn.to/40e4rfv" /* https://www.yesstyle.com/en/pyunkang-yul-essence-toner-200ml-200ml/info.html/pid.1060395495", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Astragalus Root Extract", "Butylene Glycol", "Glycerin"],
    ecoFriendly: true, // minimalist packaging, cruelty-free
    notes:
      "Minimalist essence-toner hybrid that hydrates and soothes. Suitable for layering. Very low irritation risk—though a few trace botanical extracts may still affect super reactive users.",
    pros: [
      "Extremely gentle and hydrating",
      "Absorbs quickly and layers well under other products",
      "No artificial fragrance or harsh additives",
    ],
    cons: [
      "Can feel too simple for users looking for active ingredients",
      "Texture is thicker than typical toners (some dislike that)",
      "Botanical ingredients might cause rare allergic reaction",
    ],
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
    url: "https://www.stylevana.com/en_US/deal-cosrx-advanced-snail-96-mucin-power-essence-100ml.html" /* not currently on amazon */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "96% Snail Secretion Filtrate",
      "Betaine",
      "Panthenol",
      "Allantoin",
    ],
    ecoFriendly: false,
    notes:
      "Lightweight hydrating essence packed with snail mucin for repair and moisture retention. Helps smooth texture, supports healing, and layers beautifully under serums/moisturisers.",
    pros: [
      "High concentration of snail mucin for hydration & repair",
      "Soothes irritated or post-acne skin",
      "Light texture absorbs quickly without stickiness",
    ],
    cons: [
      "Not vegan (animal-derived ingredient)",
      "Scent-sensitive users may dislike subtle fragrance",
      "Slow to notice effects—needs consistent use",
    ],
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
    url: "https://amzn.to/4k3K2AW" /*https://www.stylevana.com/en_US/deal-neogen-dermalogy-dermalogy-real-ferment-micro-essence-150ml.html", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Fermented Rice Extract",
      "Galactomyces",
      "Niacinamide",
      "Peptides",
    ],
    ecoFriendly: false,
    notes:
      "Fermented-ingredient essence with brightening and nourishing properties. Helps with texture, radiance, and hydration. Slightly viscous texture that absorbs well.",
    pros: [
      "Boosts radiance and hydration via fermented actives",
      "Niacinamide and peptides help tone and support skin barrier",
      "Great layering product under heavier treatments",
    ],
    cons: [
      "Not eco-certified—plastic packaging",
      "May feel too sticky for oily skin types",
      "Pricey relative to simpler essences",
    ],
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
    url: "https://amzn.to/463CWsQ" /* https://www.ulta.com/p/glass-skin-refining-serum-xlsImpprod18971035", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Niacinamide", "Peach Extract", "Licorice Root", "Adenosine"],
    ecoFriendly: false,
    notes:
      "Highlights ‘glass skin’ with brightening and hydrating niacinamide as well as clarifying peach/licorice extracts. Lightweight serum that improves radiance and texture.",
    pros: [
      "Creates dewy, luminous ‘glass skin’ finish",
      "Niacinamide helps even tone without heaviness",
      "Lightweight, absorbs quickly, great for layering",
    ],
    cons: [
      "Contains fragrance that may bother ultra-sensitive skin",
      "Not strong enough for severe hyperpigmentation",
      "Pricey for ingredient level",
    ],
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
    url: "https://amzn.to/4kOVFNh" /* https://www.stylevana.com/en_US/some-by-mi-aha-bha-pha-30-days-miracle-toner-150ml.html", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "AHA (Glycolic), BHA (Salicylic), PHA (Gluconolactone)",
      "Tea Tree Leaf Water",
      "Niacinamide",
    ],
    ecoFriendly: false,
    notes:
      "Three-exfoliant toner that helps clear breakouts, fade acne marks, and smooth texture in ~30 days. Contains tea tree water for calming; well-loved for acne-prone users.",
    pros: [
      "Powerful multi-acid blend exfoliates and clarifies",
      "Reduces breakouts and refines texture within weeks",
      "Refreshing toner format—lots of product per bottle",
    ],
    cons: [
      "Can cause purging on first use",
      "Not suitable for sensitive or dry skin without patching",
      "Has faint herbal scent",
    ],
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
    url: "https://amzn.to/44cw0XI" /* https://skinlovecream.com/products/sulwhasoo-first-care-activating-serum-mini", */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "JAUM Activator™ (Ginseng, Peony, Astragalus)",
      "Peptides",
      "Licorice Root",
    ],
    ecoFriendly: false,
    notes:
      "Luxury first-step serum using Korean JAUM botanical blend (ginseng-heavy) to prep skin, boost absorption and help balance tone. Loved for softening texture & giving glow.",
    pros: [
      "Prestigious JAUM blend enhances routine efficacy",
      "Softens, balances, and improves overall radiance",
      "Silky texture layers well under heavier treatments",
    ],
    cons: [
      "High price point for limited ingredient list",
      "Heavy scent—ginseng aroma can be polarizing",
      "Glass bottle without refill option",
    ],
  },

  {
    id: 20,
    name: "Missha Time Revolution Night Repair Ampoule",
    category: "Ampoule",
    suitableFor: ["All Skin Types"],
    concerns: ["Fine Lines", "Reduce signs of aging"],
    budgetRange: "$50-$100",
    climate: ["All"],
    ageGroup: ["35‑44", "45‑54", "55+"],
    sensitivities: ["None"],
    url: "https://amzn.to/44qlGN4" /* https://www.amazon.com/MISSHA-Revolution-Night-Repair-Ampoule/dp/B09648RPKJ */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Niacinamide",
      "Adenosine",
      "Fermented Yeast Extract",
      "Peptides",
    ],
    ecoFriendly: false,
    notes:
      "Night-time ampoule that firms and brightens using fermented yeast and peptide blend. Lightweight texture absorbs quickly and layers well under night creams.",
    pros: [
      "Improves elasticity and reduces fine lines overnight",
      "Contains niacinamide + peptides for tone & texture",
      "Non-sticky, absorbs cleanly",
    ],
    cons: [
      "May be expensive for the ingredient list",
      "Some users find fragrance a bit strong",
      "Glass bottle without pump may be messy",
    ],
  },
  {
    id: 21,
    name: "Innisfree Jeju Orchid Eye Cream",
    category: "Eye Cream",
    suitableFor: ["All Skin Types"],
    concerns: ["Fine Lines", "Dark Circles"],
    budgetRange: "Under $50",
    climate: ["All"],
    ageGroup: ["25‑34", "35‑44", "45‑54", "55+"],
    sensitivities: ["None"],
    url: "https://amzn.to/3G0UETk" /* https://holiholic.com/products/innisfree-new-jeju-orchid-eye-cream-30ml */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Jeju Orchid Extract", "Adenosine", "Glycerin"],
    ecoFriendly: false,
    notes:
      "Hydrating and firming eye cream infused with orchid extract and adenosine. Lightweight but nourishing—suitable for both AM and PM use.",
    pros: [
      "Light, non-greasy texture perfect under makeup",
      "Brightens and improves fine lines over time",
      "Affordable luxury feel",
    ],
    cons: [
      "Not fragrance-free",
      "Might not be rich enough for very dry under-eyes",
      "Plastic tube with limited recyclability",
    ],
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
    url: "https://amzn.to/3FNcGZe" /* https://www.amazon.com/MIZON-natural-treatment-hydrating-skincare/dp/B00AFLSE7U */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Snail Secretion Filtrate",
      "Niacinamide",
      "Peptides",
      "Ceramides",
    ],
    ecoFriendly: false,
    notes:
      "Repair-focused eye cream with snail mucin and ceramides. Helps hydrate, reduce puffiness, and support skin barrier—ideal for morning or evening use.",
    pros: [
      "Hydrating and plumping with snail mucin",
      "Helps reduce dark circles and puffiness",
      "Lightweight and non-sticky",
    ],
    cons: [
      "Not vegan (animal-derived ingredient)",
      "May irritate snail-allergic users",
      "Plastic packaging, not refillable",
    ],
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
    url: "https://amzn.to/3HQdqxe" /* https://www.avon.com/product/belif-the-true-cream-moisturizing-bomb-71506 */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Napiers Original Formula™, Chestnut Leaf Extract",
      "Shea Butter",
      "Glycerin",
    ],
    ecoFriendly: false,
    notes:
      "Rich, whipped gel-cream that intensely hydrates without heaviness. Great for dry or cold conditions; absorbs into a breathable moisture barrier.",
    pros: [
      "Deep hydration with luxurious texture",
      "Non-greasy finish suitable for layering",
      "Derm-tested and suitable for sensitive skin",
    ],
    cons: [
      "Jar packaging (not the most hygienic)",
      "Heavy formulation may overwhelm oily types",
      "Pricier for brand/jar packaging",
    ],
  },
  {
    id: 24,
    name: "COSRX Oil-Free Ultra-Moisturizing Lotion",
    category: "Moisturizer",
    suitableFor: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne", "Excess Oil"],
    budgetRange: "Under $50",
    climate: ["Humid", "Tropical"],
    ageGroup: ["Under 18", "18‑24"],
    sensitivities: ["Fragrance"],
    url: "https://amzn.to/4n8ZxdL" /* https://www.ulta.com/p/oil-free-ultra-moisturizing-lotion-with-birch-sap-pimprod2035883 */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Birch Sap", "Beta-Glucan", "Panthenol", "Adenosine"],
    ecoFriendly: false,
    notes:
      "Lightweight lotion using birch sap to hydrate oily, acne-prone types. Absorbs quickly, leaves no residue, and helps soothe breakout-prone skin.",
    pros: [
      "Oil-free and non-comedogenic",
      "Calms redness and supports barrier",
      "Great value in a large bottle",
    ],
    cons: [
      "Contains fragrance",
      "May be too mild for very dry skin",
      "Plastic bottle isn’t eco-friendly",
    ],
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
    url: "https://amzn.to/3ZJu0F8" /* https://www.stylevana.com/en_US/innisfree-green-tea-seed-hyaluronic-cream-50ml.html */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Green Tea Extract",
      "Hyaluronic Acid",
      "Betaine",
      "Panthenol",
    ],
    ecoFriendly: true,
    notes:
      "Lightweight moisturizer packed with green tea extract and multiple weight hyaluronic acids. Hydrates without heaviness—great for layering under makeup.",
    pros: [
      "Deep hydration from multi-weight hyaluronic acids",
      "Antioxidant-rich green tea benefits",
      "Absorbs cleanly with no greasy residue",
    ],
    cons: [
      "Contains fragrance",
      "May feel insufficient for very dry skin in winter",
      "Plastic jar not refillable",
    ],
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
    url: "https://amzn.to/4enyirW" /* https://www.stylevana.com/en_US/top-pick-beauty-of-joseon-relief-sun-rice-probiotic-spf50-pa-50ml.html */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Rice Extract",
      "Probiotics",
      "Niacinamide",
      "Titanium Dioxide",
    ],
    ecoFriendly: true,
    notes:
      "Broad-spectrum SPF50+ sunscreen with rice extract and probiotics. Feels lightweight with minimal white cast—suitable as a daily base layer.",
    pros: [
      "High SPF with skin-friendly brightening rice extract",
      "Lightweight, non-greasy finish",
      "Reef-safe mineral filters",
    ],
    cons: [
      "Contains niacinamide—not ideal for very sensitive/reactive skin",
      "Pump mechanism may be finicky",
      "Bottle material not widely recycled",
    ],
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
    url: "https://www.cosrx.com/products/aloe-soothing-sun-cream-spf50-pa?srsltid=AfmBOooZY76wbnFiHbYtlEz8L4q-zWZFUdj18z_20z6-7nyjCmAkLWuG" /* https://beautynetkorea.com/product/cosrx-aloe-soothing-sun-cream-spf50pa-50ml-weight-79g/8467 */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Aloe Vera Extract",
      "Green Tea Extract",
      "Panthenol",
      "Mineral SPF",
    ],
    ecoFriendly: false,
    notes:
      "Gentle mineral sunscreen with soothing aloe and green tea. Offers a moisturizing, dewy finish—ideal for reactive or acne-prone skin types.",
    pros: [
      "Mineral UV protection with calming botanicals",
      "Soothing texture good for sensitive skin",
      "Non-irritating and fragrance-free",
    ],
    cons: [
      "Can be slightly white cast initially",
      "Tube packaging may dispense too quickly",
      "Not water-resistant—needs frequent reapplication",
    ],
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
    url: "https://amzn.to/43Y6Q0o" /* https://www.stylevana.com/en_US/deal-laneige-water-sleeping-mask-ex-70ml.html */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Hydro Ionized Mineral Water",
      "Sleep-Tox™",
      "Evening Primrose Root Extract",
    ],
    ecoFriendly: false,
    notes:
      "Overnight gel-mask that hydrates and refreshes skin by morning. Lightweight and breathable—not sticky or too heavy overnight.",
    pros: [
      "Refreshing hydration after a night’s sleep",
      "Soothing, mild scent promotes relaxation",
      "Light gel texture that layers well",
    ],
    cons: [
      "Contains fragrance",
      "Jar packaging isn’t ideal for hygiene",
      "More expensive than simpler hydrating masks",
    ],
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
    url: "https://amzn.to/44rDWps" /* https://www.amazon.com/COSRX-Ultimate-Nourishing-Rice-Overnight/dp/B01N13W31F */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Rice Extract", "Ceramide NP", "Beta-Glucan"],
    ecoFriendly: false,
    notes:
      "Creamy overnight mask that nourishes and brightens—stays creamy without feeling heavy. Suitable for most skin types, with added ceramide barrier support.",
    pros: [
      "Softens and hydrates overnight effectively",
      "Improves possible dull, dry skin",
      "Rich without greasiness",
    ],
    cons: [
      "Contains alcohol denat. (may be drying for sensitive skin)",
      "Jar packaging raises hygiene concerns",
      "Slight scent may not suit fragrance-sensitive users",
    ],
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
    url: "https://amzn.to/3ZK5UtP" /* https://www.stylevana.com/en_US/deal-innisfree-jeju-volcanic-pore-clay-mask-original-100ml.html */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",

    /* ✨ new fields ✨ */
    ingredients: [
      "Jeju Volcanic Cluster Sphere™",
      "Kaolin & Bentonite Clays",
      "Lactic Acid",
      "Walnut Shell Powder",
      "Green Tea Extract",
    ],
    ecoFriendly: true, // responsibly-sourced volcanic ash, FSC carton
    notes:
      "Cooling wash-off clay mask that uses Jeju volcanic clusters to adsorb excess sebum and fine dust while gently exfoliating with lactic acid and walnut micro-grains. Leaves skin matte and refreshed without over-drying when used 1–2× weekly.",
    pros: [
      "Deep-cleans pores and controls oil instantly",
      "Cooling sensation reduces inflammation",
      "Quick 10-minute treatment—rinses off clean",
    ],
    cons: [
      "Physical scrub particles can be harsh if over-massaged",
      "May feel tight on very dry/sensitive skin",
      "Tub packaging requires spatula for hygiene",
    ],
  },

  {
    id: 36,
    name: "Purito From Green Deep Foaming Cleanser",
    category: "Cleanser",
    suitableFor: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne", "Oil Control", "Gentle Cleanse"],
    budgetRange: "Under $30",
    climate: ["Humid", "All"],
    ageGroup: ["Under 18", "18-24", "25-34"],
    sensitivities: ["None"],
    url: "https://amzn.to/4emYDX8", /* https://purito.com/product/from-green-deep-foaming-cleanser/", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Centella Asiatica Extract", "Green Tea", "Panthenol"],
    ecoFriendly: true, // recycled paper packaging, earth‑conscious labeling :contentReference[oaicite:1]{index=1}
    notes:
      "Gentle yet effective cleanser that balances oil and soothes acne‑prone skin. Minimalist formula in recycled packaging.",
    pros: [
      "Earth‑conscious packaging (recycled paper, minimal plastic)",
      "Non‑irritating, fragrance‑free formula",
      "Balances oil while calming inflammation",
    ],
    cons: [
      "Low lather might not feel 'deep clean' for some",
      "Only available via brand website",
    ],
  },
  {
    id: 37,
    name: "Haruharu WONDER Black Rice Hyaluronic Toner",
    category: "Toner",
    suitableFor: ["All Skin Types"],
    concerns: ["Hydration", "Brightening"],
    budgetRange: "$10-$20",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://amzn.to/44sJFex" /* https://haruharu-wonder.com/products/black-rice-toner */,
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Fermented Black Rice Extract",
      "Niacinamide",
      "Hyaluronic Acid",
    ],
    ecoFriendly: true, // sleek recyclable packaging, minimal plastic
    notes:
      "Hydrating, antioxidant-rich toner with fermented rice and hyaluronic acid in recyclable packaging.",
    pros: [
      "Boosts hydration and glow",
      "Eco-conscious packaging, no extra fillers",
      "Free from artificial color/fragrance",
    ],
    cons: [
      "Slightly pricier toner format",
      "Availability limited in some regions",
    ],
  },
  {
    id: 38,
    name: "Torriden DIVE-IN Low Molecular Hyaluronic Acid Toner",
    category: "Toner",
    suitableFor: ["Dry", "Sensitive", "All Skin Types"],
    concerns: ["Dehydration", "Hydration Planning"],
    budgetRange: "$25-$35",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://amzn.to/3HT5QSo" /* https://torriden.com/products/dive-in-toner */, /* associate link:https://torriden.com/products/dive-in-toner", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Low Molecular Hyaluronic Acid", "Allantoin", "Glycerin"],
    ecoFriendly: true, // refill pouch available, vegan formulation
    notes:
      "Deep hydrating toner with small-molecule hyaluronics, refillable eco pouch, vegan-friendly.",
    pros: [
      "Excellent hydration, light texture",
      "Refill pouch reduces packaging waste",
      "Vegan and gentle formula",
    ],
    cons: [
      "Limited retail presence",
      "Refill pouch shipping and handling extra",
    ],
  },
/*   {
    id: 39,
    name: "OTZI Wildflower Gel Moisturizer",
    category: "Moisturizer",
    suitableFor: ["All Skin Types", "Gen Z"],
    concerns: ["Hydration", "Barrier Support"],
    budgetRange: "$25-$35",
    climate: ["All"],
    ageGroup: ["Under 18", "18-24"],
    sensitivities: ["None"],
    url: "https://sephora.com/otzi-wildflower-gel-moisturizer",
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Hyaluronic Acid",
      "Ginseng Berry Extract",
      "Mulberry Extract",
    ],
    ecoFriendly: true, // vegan, cruelty-free, minimal recycled pastel packaging
    notes:
      "Lightweight gel moisturizer with hydrating HA and plant extracts, packaged in recycled materials.",
    pros: [
      "Hydrates without heaviness",
      "Eco-conscious pastel recycled packaging",
      "Formulated by and for Gen Z—vegan/cruelty-free",
    ],
    cons: ["New and not widely reviewed yet", "Only available at Sephora"],
  }, */
/*   {
    id: 40,
    name: "Innisfree Intensive Hydrating Serum (Paper Edition)",
    category: "Serum",
    suitableFor: ["Dry", "All Skin Types"],
    concerns: ["Dehydration", "Barrier Repair"],
    budgetRange: "$30-$40",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://innisfree.com/intensive-hydrating-serum-paper-edition",
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Jeju Green Tea Extract", "Green Tea Seed Oil", "Panthenol"],
    ecoFriendly: true, // 52% less plastic, 100% recyclable paper packaging :contentReference[oaicite:5]{index=5}
    notes:
      "Beloved green tea serum now in less‑plastic, fully recyclable paper edition—same formula, greener packaging.",
    pros: [
      "Highly hydrating and antioxidant-rich",
      "Major plastic reduction initiative",
      "Well-loved brand with visible results",
    ],
    cons: [
      "Paper label over plastic bottle (some greenwashing controversy)",
      "May still confuse recycling if label not removed",
    ],
  }, */
  {
    id: 41,
    name: "Laneige Lip Sleeping Mask",
    category: "Lip Care",
    suitableFor: ["All Skin Types"],
    concerns: ["Dryness", "Chapped Lips"],
    budgetRange: "Under $30",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://amzn.to/4eglmUB", /* https://us.laneige.com/products/lip-sleeping-mask" */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Berry Fruit Complex™",
      "Murumuru Seed Butter",
      "Shea Butter",
      "Vitamin C",
    ],
    ecoFriendly: false,
    notes:
      "Cult-favorite overnight lip mask that delivers long-lasting moisture and antioxidant protection; sells a jar every few seconds globally and regularly tops ‘best lip mask’ lists.",
    pros: [
      "Deeply hydrates & softens flakes overnight",
      "Antioxidant-rich berries protect against free radicals",
      "A little goes a long way—jar lasts months",
    ],
    cons: [
      "Comes in a jar (dip spatula required for hygiene)",
      "Synthetic berry scent isn’t for everyone",
      "Not vegan (contains beeswax)",
    ],
  },
  {
    id: 42,
    name: "Dr. Jart+ Cicapair™ Tiger Grass Color Correcting Treatment SPF30",
    category: "Treatment / Color Corrector",
    suitableFor: ["Sensitive", "Redness-Prone", "All Skin Types"],
    concerns: ["Redness", "Barrier Support", "Sun Protection"],
    budgetRange: "$40-$60",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["Essential Oils"],
    url: "https://amzn.to/4kT0DIO", /*https://www.drjart.com/products/cicapair-tiger-grass-color-correcting-treatment-spf-30", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Centella Asiatica Complex",
      "Niacinamide",
      "Mineral UV Filters",
      "Panthenol",
    ],
    ecoFriendly: false,
    notes:
      "Iconic green-to-beige cream that instantly neutralizes redness while soothing with CICA; doubles as light base + SPF, beloved by makeup-minimalists and derms alike.",
    pros: [
      "Instant redness camo with tone-adjusting pigments",
      "Soothes & repairs with high Centella concentration",
      "Built-in mineral SPF 30 for daytime protection",
    ],
    cons: [
      "Thick texture—works best in thin layer",
      "Herbal scent from essential oils",
      "Glass jar adds weight & isn’t refillable",
    ],
  },
  {
    id: 43,
    name: "By Wishtrend Pure Vitamin C 21.5% Advanced Serum",
    category: "Serum",
    suitableFor: ["Normal", "Dry", "Combination", "Oily"],
    concerns: ["Dullness", "Hyperpigmentation", "Antioxidant Care"],
    budgetRange: "$25-$35",
    climate: ["All"],
    ageGroup: ["18-24", "25-34", "35-44", "45-54"],
    sensitivities: ["Essential Oils"],
    url: "https://amzn.to/3HWqfGg", /*https://wishtrend.com/products/pure-vitamin-c-21-5-advanced-serum", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "21.5% Ascorbic Acid",
      "Hippophae Rhamnoides Water",
      "Panthenol",
    ],
    ecoFriendly: true, // minimal packaging, FSC box, carbon-offset shipping
    notes:
      "High-potency yet water-like vitamin-C serum that delivers brightening and antioxidant protection within weeks. Ships in cold-chain pouch to preserve potency.",
    pros: [
      "High concentration for fast glow-up",
      "Only 10 ingredients – low irritation risk",
      "Eco-friendly shipping & packaging",
    ],
    cons: [
      "Must be stored in fridge once opened",
      "Can tingle on first applications",
    ],
  },
  {
    id: 44,
    name: "COSRX Acne Pimple Master Patch",
    category: "Spot Treatment",
    suitableFor: ["All Skin Types"],
    concerns: ["Acne", "Blemish Recovery"],
    budgetRange: "Under $15",
    climate: ["All"],
    ageGroup: ["Under 18", "18-24", "25-34"],
    sensitivities: ["None"],
    url: "https://amzn.to/44edezn", /*https://www.cosrx.com/products/acne-pimple-master-patch",*/
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Hydrocolloid", "Polyisobutene"],
    ecoFriendly: false,
    notes:
      "Iconic hydrocolloid patches that flatten whiteheads overnight and protect healing zits from picking.",
    pros: [
      "Visible gunk-pulling overnight",
      "Great emergency spot fix",
      "Multiple sizes in one sheet",
    ],
    cons: [
      "Single-use plastic sleeve",
      "Not effective on cystic, deep nodules",
    ],
  },
  {
    id: 45,
    name: "Neogen Bio-Peel Gauze Peeling Lemon",
    category: "Exfoliator",
    suitableFor: ["Normal", "Combination", "Oily"],
    concerns: ["Dullness", "Uneven Texture", "Pores"],
    budgetRange: "$20-$30",
    climate: ["All"],
    ageGroup: ["18-24", "25-34", "35-44"],
    sensitivities: ["Fragrance", "Alcohol"],
    url: "https://amzn.to/3FTVPE6", /*https://www.amazon.com/Neogen-Bio-Peel-Gauze-Peeling-Lemon/dp/B019RULW50",*/
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Lactic Acid",
      "Glycolic Acid",
      "Lemon Fruit Extract",
      "Hyaluronic Acid",
    ],
    ecoFriendly: false,
    notes:
      "Dual-texture pads offer chemical (AHA) + gentle physical exfoliation for instant glow and smoother texture; dispose after one use—best 1-2× weekly.",
    pros: [
      "Combines chemical & physical exfoliation in one step",
      "Brightens quickly with vitamin-C-rich lemon",
      "Pads are pre-soaked—great for travel/ease",
    ],
    cons: [
      "Single-use pads create waste",
      "Contains fragrance & alcohol—patch test if sensitive",
      "Jar can dry out if not sealed tightly",
    ],
  },
  {
    id: 46,
    name: "Some By Mi Retinol Intense Advanced Triple Action Serum",
    category: "Serum",
    suitableFor: ["All Skin Types"],
    concerns: ["Fine Lines", "Uneven Texture", "Acne"],
    budgetRange: "$20-$35",
    climate: ["All"],
    ageGroup: ["25-34", "35-44", "45-54"],
    sensitivities: ["None"],
    url: "https://amzn.to/44nt2A2", /*https://www.amazon.com/SOME-MI-Retinol-Intense-Serum/dp/B0BTHPH9FP", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Retinol 0.1%",
      "Retinal 0.1%",
      "Bakuchiol",
      "Peptides",
      "Panthenol",
    ],
    ecoFriendly: false,
    notes:
      "Triple-retinoid formula (retinol + retinal + bakuchiol) tackles wrinkles & breakouts with minimal irritation thanks to soothing peptides and panthenol.",
    pros: [
      "Potent yet low-irritation retinoid blend",
      "Visible skin-smoothing in ~4-6 weeks",
      "Airless pump protects actives from oxidation",
    ],
    cons: [
      "Start slow—may cause initial purging/dryness",
      "Opaque bottle means you can’t see remaining product",
      "Not pregnancy-safe (vitamin A derivatives)",
    ],
  },
  {
    id: 47,
    name: "Mediheal N.M.F Aquaring Ampoule Mask",
    category: "Sheet Mask",
    suitableFor: ["Dry", "Dehydrated", "All Skin Types"],
    concerns: ["Hydration", "Dullness"],
    budgetRange: "Under $20 (box of 10)",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["Fragrance"],
    url: "https://amzn.to/4ehkzTb", /*https://www.amazon.com/Mediheal-N-M-F-Intense-Hydrating-Sheet/dp/B010CYY3Y2",*/
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: ["Hyaluronic Acid", "Ceramide NP", "Allantoin", "Witch Hazel"],
    ecoFriendly: false,
    notes:
      "Top-selling sheet mask drenches skin in N.M.F (natural moisturizing factors) for plump, glassy hydration in 15–20 minutes—perfect pre-event pick-me-up.",
    pros: [
      "Instant moisture surge & plumping effect",
      "Ample leftover serum for neck/arms",
      "Fits snugly without slipping",
    ],
    cons: [
      "Single-use sheet—not eco-friendly",
      "Light fragrance may bother some",
      "Temporary results—best used regularly",
    ],
  },
  {
    id: 48,
    name: "Abib Quick Sunstick Protection Bar SPF50+ PA++++",
    category: "Sunscreen",
    suitableFor: ["All Skin Types"],
    concerns: ["Sun Protection", "Easy Reapplication"],
    budgetRange: "$20-$30",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://amzn.to/3Gg1Bjj", /*https://abib.com/products/quick-sunstick-protection-bar",*/
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Zinc Oxide",
      "Octinoxate",
      "Aloe Leaf Extract",
      "Ceramide NP",
    ],
    ecoFriendly: true, // compact stick, minimal leakage risk
    notes:
      "Pocket-friendly sunstick glides on clear with a velvet finish—ideal for midday touch-ups without mess; widely praised for zero white cast on deeper tones.",
    pros: [
      "High SPF in ultra-portable stick",
      "No white cast & velvet feel",
      "Great over makeup for on-the-go protection",
    ],
    cons: [
      "Small amount of product (18 g)",
      "May pill if layered over heavy creams",
      "Needs multiple swipes for full coverage",
    ],
  },
  {
    id: 49,
    name: "Petitefee Gold & Snail Hydrogel Eye Patch",
    category: "Eye Patch",
    suitableFor: ["All Skin Types"],
    concerns: ["Puffiness", "Dark Circles"],
    budgetRange: "$15-$25",
    climate: ["All"],
    ageGroup: ["All"],
    sensitivities: ["None"],
    url: "https://amzn.to/44jeUrj", /*https://www.amazon.com/Petitfee-Gold-Snail-Hydrogel-Patch/dp/B00XQ86NX6", */
    image: "/public/images/product.jpg",
    hoverImage: "/public/images/bottle.webp",
    ingredients: [
      "Snail Secretion Filtrate",
      "Colloidal Gold",
      "Ginseng Extract",
      "Adenosine",
    ],
    ecoFriendly: false,
    notes:
      "Cooling hydrogel patches de-puff and brighten tired under-eyes in 15 minutes—fan favorite for quick AM refresh before makeup.",
    pros: [
      "Instant cooling & de-puffing effect",
      "Hydrogel clings without slipping",
      "One jar contains 60 patches (30 pairs)",
    ],
    cons: [
      "Single-use patches generate waste",
      "Not vegan (snail filtrate)",
      "Results are temporary—use consistently",
    ],
  },
];

function parseRange(str) {
  str = str.replace(/\s+/g, '');          // remove spaces
  if (/^Under\$(\d+)/i.test(str)) {
    const max = +RegExp.$1;
    return { min: 0, max };
  }
  if (/^\$(\d+)\+/.test(str)) {
    const min = +RegExp.$1;
    return { min, max: Infinity };
  }
  if (/^\$(\d+)-\$(\d+)/.test(str)) {
    const min = +RegExp.$1;
    const max = +RegExp.$2;
    return { min, max };
  }
  return { min: 0, max: Infinity };       // fallback
}

function budgetsOverlap(a, b) {
  const r1 = parseRange(a);
  const r2 = parseRange(b);
  return r1.min <= r2.max && r2.min <= r1.max; // ranges intersect?
}

// Define the getRecommendedProducts function OUTSIDE the event listener
function getRecommendedProducts(userAnswers) {
  /* Highest-frequency triggers for people who call their skin “Sensitive”.   */
  const commonIrritants = [
    "Fragrance",
    "Essential Oils",
    "Alcohol",
    "Sulfates",
    "Parabens",
  ];

  const scoredProducts = products.map((product) => {
    let score = 0;
    const breakdown = {};           // handy for debugging

    /** ─────────  BASIC MATCHES  ───────── **/

    // Skin-type
    const skinMatch =
      product.suitableFor.includes(userAnswers.skinType) ||
      product.suitableFor.includes("All") ||
      product.suitableFor.includes("All Skin Types");
    breakdown.skinType = skinMatch ? weights.skinType : 0;
    score += breakdown.skinType;

    // Concerns
    const concernMatches = product.concerns.filter((c) =>
      userAnswers.concerns?.includes(c)
    ).length;
    breakdown.concerns = concernMatches * weights.perConcern;
    score += breakdown.concerns;

    // Budget
    const budgetMatch = budgetsOverlap(product.budgetRange, userAnswers.budget);
    breakdown.budget = budgetMatch ? weights.budget : 0;
    score += breakdown.budget;

    // Age-group
    const ageMatch =
      product.ageGroup.includes(userAnswers.ageGroup) ||
      product.ageGroup.includes("All");
    breakdown.ageGroup = ageMatch ? weights.ageGroup : 0;
    score += breakdown.ageGroup;

    // Climate
    const climateMatch =
      product.climate.includes(userAnswers.climate) ||
      product.climate.includes("All");
    breakdown.climate = climateMatch ? weights.climate : 0;
    score += breakdown.climate;

    /** ── EXPLICIT SENSITIVITIES FROM Q13 ── **/

    const sensitivityMatches = (product.sensitivities || []).filter((s) =>
      userAnswers.sensitivities?.includes(s)
    ).length;

    if (sensitivityMatches > 0) {
      breakdown.explicitSensitivity =
        -sensitivityMatches * weights.sensitivityPenalty;
      score += breakdown.explicitSensitivity;
    } else {
      breakdown.explicitSensitivity = weights.sensitivityReward;
      score += breakdown.explicitSensitivity;
    }

    /** ── EXTRA HEURISTIC WHEN USER SELECTS “Sensitive” SKIN-TYPE ── **/

    if (userAnswers.skinType === "Sensitive") {
      const extraHits = (product.sensitivities || []).filter((s) =>
        commonIrritants.includes(s)
      ).length;

      breakdown.sensitivePenalty =
        -extraHits * weights.sensitiveHitPerIrritant;
      score += breakdown.sensitivePenalty;
    } else {
      breakdown.sensitivePenalty = 0;
    }

    return { ...product, score, breakdown };
  });

  // Highest score first
  return scoredProducts.sort((a, b) => b.score - a.score);
}


function pickBestFor(category, allSortedProducts) {
  return allSortedProducts.find(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

function debugRecommendations(userAnswers) {
  const all = getRecommendedProducts(userAnswers);
  console.table(
    all.slice(0, 10).map((p) => ({
      name: p.name,
      score: p.score,
      ...p.breakdown,
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

        const quizCompleted = localStorage.getItem("quizCompleted");
        if (quizCompleted === "true") {
          const storedProducts = JSON.parse(
            localStorage.getItem("recommendedProducts") || "[]"
          );
          const storedRoutine = JSON.parse(
            localStorage.getItem("routine") || "{}"
          );

          if (storedProducts.length && Object.keys(storedRoutine).length) {
            // skip intro, show saved results
            document.body.classList.remove("intro-active");
            introContainer.style.display = "none";
            quizContainer.style.display = "flex";
            displayResults(storedProducts, storedRoutine);
            return; // ⬅️ avoid the normal “resume-quiz” code path
          }
        }

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
      localStorage.removeItem('quizCompleted');
      localStorage.removeItem('recommendedProducts');
      localStorage.removeItem('routine');

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
          <input type="${question.type === "multiple" ? "checkbox" : "radio"}"
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

            if (isExclusive(input.value) && input.checked) {
              // 🔸
              inputs.forEach((i) => {
                if (i !== input) i.checked = false;
              }); // 🔸
            } else if (!isExclusive(input.value) && input.checked) {
              // 🔸
              inputs.forEach((i) => {
                // 🔸
                if (isExclusive(i.value)) i.checked = false; // 🔸
              }); // 🔸
            } // 🔸
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
          allSortedProducts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
          )[0] || null
        );
      }

// ---------- NEW build() helper  ----------

const stepHowTo = {
  // daily basics
  Cleanse:
    "Massage your cleanser over damp skin for about 60 seconds, then rinse with lukewarm water.",

  "First Cleanse":
    "On dry skin, work your oil or balm cleanser to dissolve makeup and sunscreen; add a little water to emulsify, then rinse thoroughly.",

  "Second Cleanse":
    "Follow with a gentle water-based cleanser to remove any remaining residue, and pat your skin dry with a clean towel.",

  Tone:
    "Sweep toner across your face and neck with clean hands or a cotton pad and allow it to fully absorb.",

  Essence:
    "Press a few drops of essence evenly into your face until completely absorbed.",

  Serum:
    "Apply two to three drops of serum to you face and neck, spreading evenly until absorbed.",

  "Eye Care":
    "Tap a small amount of eye product around the orbital bone with the ring finger until it absorbs.",

  Moisturize:
    "Smooth a nickel-sized amount of moisturizer over you face and neck to seal in hydration.",

  Protect:
    "As the final morning step, apply two finger lengths of sunscreen to you face and neck and reapply every two hours during sun exposure.",

  // extras
  Exfoliate:
    "After cleansing, massage your exfoliant onto damp skin for 30–60 seconds, then rinse; limit use to two or three times per week.",

  Mask:
    "Spread a thin, even layer of mask onto clean skin, leave it on for the recommended time, and then rinse or remove according to the product directions.",
};



const build = (steps) =>
  steps.map((s) => {
    const prod = pickBestFor(s.category, allSortedProducts);

    // fallback text if nothing is matched
    const fallback = `Consider a suitable ${s.category}.`;

    return {
      step:       s.step,
      category:   s.category,

      // basic product identity
      product:    prod?.name  || `No product for ${s.category}`,
      productUrl: prod?.url   || null,
      productImg: prod?.image || null,

      // ★ NEW rich info for display
      notes:       prod?.notes         || null,
      pros:        prod?.pros          || [],
      cons:        prod?.cons          || [],
      ingredients: prod?.ingredients?.slice(0, 5) || [],
      ecoFriendly: typeof prod?.ecoFriendly === "boolean"
                     ? prod.ecoFriendly
                     : null,

      // instructions fall-back chain
instructions:                                     // ★ CHANGED
  s.instructions                                  // provided explicitly?
  || stepHowTo[s.step]                            // ← use our new templates
  || (prod?.notes
        ? prod.notes
        : prod
          ? `Use ${prod.name} as directed.`
          : fallback),
    };
  });
// ---------- end build() ----------


      const morning = build(morningSteps);
      const evening = build(eveningSteps);
      const weekly = weeklyTreatments.map((t) => {
        const prod = pickBestFor(t.category, allSortedProducts);
        return {
          step: t.step,
          category: t.category,
          frequency: t.frequency,
          instructions: t.instructions,
          product: prod?.name,
          productUrl: prod?.url,
          productImg: prod?.image,
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
          skinType:           answers[1],
          climate:            answers[2],
          ageGroup:           answers[3],
          concerns:           answers[4],
          sunExposure:        answers[5],
          currentProducts:    answers[6],
          stressLevel:        answers[7],
          sleepHours:         answers[8],
          lifeStage:          answers[9],
          morningSkinFeel:    answers[10],
          afterWashFeel:      answers[11],
          routineTime:        answers[12],
          sensitivities:      answers[13],
          usedIngredients:    answers[14],
          budget:             answers[15],
          dailyRoutine:       answers[16],
          medications:        answers[17],
          skincareGoal:       answers[18],
          fragrancePreference:answers[19],
          ecoPreference:      answers[20],
          focusAreas:         answers[21],
          skinReaction:       answers[22],
          multiUseInterest:   answers[23],
        };
    
        // 1) rank products
        const allSortedProducts = getRecommendedProducts(userAnswers);
        if (!allSortedProducts.length) {
          quizContent.innerHTML =
            "<h2>No products found matching your criteria.</h2><p>Please try again with different answers.</p>";
          return;
        }
    
        // 2) build routine
        const routine          = generateRoutine(userAnswers, allSortedProducts);
        const formattedRoutine = formatRoutineForDisplay(routine);
    
        // 3) choose top 5 products not already in routine
        const routineNames = new Set();
        ["morning", "evening", "weekly"].forEach(period =>
          (routine[period] || []).forEach(step => {
            if (step.product) routineNames.add(step.product);
          })
        );
    
        let recommended = allSortedProducts
          .filter(p => !routineNames.has(p.name))
          .slice(0, 5);
    
        if (recommended.length < 5) {
          const filler = allSortedProducts
            .filter(p => !recommended.includes(p))
            .slice(0, 5 - recommended.length);
          recommended = recommended.concat(filler);
        }
    
        // 4) show results
        displayResults(recommended, formattedRoutine);
    
        // 5) persist finished results
        localStorage.setItem('quizCompleted',        'true');
        localStorage.setItem('recommendedProducts', JSON.stringify(recommended));
        localStorage.setItem('routine',             JSON.stringify(formattedRoutine));
    
        // 6) hide nav buttons
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
    
        // 7) ★ CHANGED  ───────── clear ONLY in-progress data ─────────
        currentQuestionIndex = 0;                 // ★ CHANGED
        answers = {};                             // ★ CHANGED
        localStorage.removeItem('currentQuestionIndex'); // ★ CHANGED
        localStorage.removeItem('answers');              // ★ CHANGED
        // (we no longer call resetQuizState() here)       // ★ CHANGED
    
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
      <button class="start-over-btn" id="startOverBtn">Restart Quiz</button>


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
                        <img src="${step.productImg}" alt="${
                        step.product
                      }" class="routine-product-image"/>
                        <div class="routine-product-info">
                          <p class="product-name">${
                            step.productUrl
                              ? `<a href="${step.productUrl}" target="_blank">${step.product}</a>`
                              : step.product
                          }</p>
                          <p class="instructions hover-info">${step.instructions}</p>

${(step.notes || step.pros.length || step.cons.length) ? `
  <details class="extra-details">
    <summary>More about this product</summary>
    ${step.pros.length
        ? `<div class="pros">${step.pros.map(p => `<div>${p}</div>`).join("")}</div>`
        : ""}
    ${step.cons.length
        ? `<div class="cons">${step.cons.map(c => `<div>${c}</div>`).join("")}</div>`
        : ""}
  </details>
` : ""}

                        </div>
                      </div>`
                    : `<p class="product-name">${step.product}</p>
                       <p class="instructions">${step.instructions}</p>`
                }
              </div>`
          )
          .join("")}
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
                        <img src="${step.productImg}" alt="${
                        step.product
                      }" class="routine-product-image"/>
                        <div class="routine-product-info">
                          <p class="product-name">${
                            step.productUrl
                              ? `<a href="${step.productUrl}" target="_blank">${step.product}</a>`
                              : step.product
                          }</p>
                          <p class="instructions hover-info">${step.instructions}</p>

${(step.notes || step.pros.length || step.cons.length) ? `
  <details class="extra-details">
    <summary>More about this product</summary>
    ${step.pros.length
        ? `<div class="pros">${step.pros.map(p => `<div>${p}</div>`).join("")}</div>`
        : ""}
    ${step.cons.length
        ? `<div class="cons">${step.cons.map(c => `<div>${c}</div>`).join("")}</div>`
        : ""}
  </details>
` : ""}
                        </div>
                      </div>`
                    : `<p class="product-name">${step.product}</p>
                       <p class="instructions">${step.instructions}</p>`
                }
              </div>`
          )
          .join("")}
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
                          <img src="${treatment.productImg}" alt="${
                          treatment.product
                        }" class="routine-product-image"/>
                          <div class="routine-product-info">
                            <p class="product-name">${
                              treatment.productUrl
                                ? `<a href="${treatment.productUrl}" target="_blank">${treatment.product}</a>`
                                : treatment.product
                            }</p>
                            <p class="instructions">${
                              treatment.instructions
                            }</p>
                            <p class="frequency"><strong>Frequency:</strong> ${
                              treatment.frequency
                            }</p>
                          </div>
                        </div>`
                      : `<p class="product-name">${treatment.product}</p>
                         <p class="instructions">${treatment.instructions}</p>
                         <p class="frequency"><strong>Frequency:</strong> ${treatment.frequency}</p>`
                  }
                </div>`
            )
            .join("")}
        </div>`
          : ""
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
      <h2>Your Top 5 Recommended Products</h2>
      <div class="products-container">
        ${recommendedProducts
          .map(
            (product) => `
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
                  <p><strong>Concerns:</strong> ${product.concerns.join(
                    ", "
                  )}</p>
                  <p><strong>Price Range:</strong> ${product.budgetRange}</p>
                  <a href="${
                    product.url
                  }" target="_blank" class="product-link">View Product</a>
                </div>
              </div>`
          )
          .join("")}
      </div>
    </section>
  `;

      /* ──────────────────────────────────────────────────────────────── */
      resultHtml += `
  </div>
  `;

      quizContent.innerHTML = resultHtml;

      document
        .getElementById("startOverBtn")
        .addEventListener("click", startOver);
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
    /*     function displayRecommendedProducts(recommendedProducts) {
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
 */
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
    /*     startBtn.addEventListener("click", () => {
      resetQuizState();
      introContainer.style.display = "none";
      quizContainer.style.display = "flex";
      document.body.classList.remove("intro-active");
      renderQuestion();
    }); */

    prevBtn.addEventListener("click", moveToPreviousQuestion);

    // Initialize
    loadSavedState();
  } catch (error) {
    console.error("Initialization error:", error);
  }
});
