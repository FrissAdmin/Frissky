/* eslint-disable max-len */
export default [
  {
    id       : 1,
    key      : 'firstName',
    title    : ' We’re excited to meet you! What’s your first name?',
    type     : 'text',
  },
  {
    id       : 17,
    key      : 'email',
    subtitle : 'We need it for technical reasons',
    title    : ' What’s your email?',
    type     : 'text',
  },
  {
    id      : 2,
    key     : 'loveYourCurrentSkinRoutine',
    title   : ' Do you love your current skincare routine?',
    type    : 'choice',
    choices : [
      'I love it! I wouldn’t change much of it',
      'It’s ok, some products are working, some aren’t',
      'Not at all! Nothing seems to work for me.',
    ],
  },
  {
    id       : 3,
    key      : 'experimentWithNewSkinCare',
    title    : ' Do you like to experiment with new skin care?',
    type     : 'choice',
    choices  : [
      'Yes! I try new products all of the time',
      'Sometimes, when products don’t work',
      'Rarely, I like the products I use',
    ],
  },
  {
    allowMultipleChoices : true,
    id                   : 4,
    key                  : 'skinCareProducts',
    subtitle             : 'Choose any that apply',
    title                : ' What types of skin care products do you love to use the most?',
    type                 : 'choice',
    choices              : [
      'Cleansers',
      'Cleansing oils',
      'Sheet masks',
      'Wash off masks',
      'Exfoliators',
      'Serums',
      'Face oils',
      'Toners and Mists',
      'Eye treatments',
      'Anti-aging treatments',
      'Peels',
      'Acne treatments',
      'Other - tell us more!',
    ],
  },
  {
    id       : 5,
    key      : 'skinTone',
    title    : ' How would you describe your skin tone?',
    type     : 'choice',
    choices  : [
      'Very fair',
      'Fair',
      'Medium',
      'Medium-Olive',
      'Dark',
      'Very Dark',
    ],
  },
  {
    id       : 6,
    key      : 'homeWeather',
    title    : ' What type of environment do you live in?',
    type     : 'choice',
    choices  : [
      'The weather is humid',
      'The weather is dry',
      'Neither humid or dry',
    ],
  },
  {
    id       : 7,
    key      : 'skinOil',
    title    : ' How would you describe your skin type?',
    type     : 'choice',
    choices  : [
      'Oily, I produce oil all over, including my t-zone',
      'Normal, neither very oily or very dry',
      'Dry, I produce little to no oil',
      'Combination, I’m dry in some areas, and oily in others',
    ],
  },
  {
    allowMultipleChoices : true,
    id                   : 8,
    key                  : 'skinConcerns',
    subtitle             : 'Choose any that apply',
    title                : ' What are your skin concerns?',
    type                 : 'choice',
    choices              : [
      'Redness',
      'Fine lines & wrinkles',
      'Oiliness & large pores',
      'Acne & blemishes',
      'Dryness & dehydration',
      'Hyperpigmentation',
      'Other - tell us more',
    ],
  },
  {
    id       : 9,
    key      : 'skinStruggles',
    title    : ' Do you often struggle with your skin?',
    type     : 'choice',
    choices  : [
      'No, just interested in trying new products',
      'Recently, in the last month',
      'A while, 3-6 months',
      'Seems like forever! Over a year.',
    ],
  },
  {
    id       : 10,
    key      : 'sunscreenFrequency',
    title    : 'UV light is the #1 cause in premature aging, do you diligently wear sunscreen?',
    type     : 'choice',
    choices  : [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always',
    ],
  },
  {
    id       : 11,
    key      : 'ingredientAllergies',
    title    : 'Do you have any sensitivities to ingredients or fragrance?',
    type     : 'choice',
    choices  : [
      'No, not that I’m aware of',
      'Yes, I’m often sensitive to products, but I’m not sure why',
      'Yes, I have a sensitivity to fragrance',
      'Yes, I have other sensitivities',
    ],
  },
  {
    allowMultipleChoices : true,
    id                   : 12,
    key                  : 'productSources',
    subtitle             : 'Choose any that apply',
    title                : 'Where do you usually shop for beauty products?',
    type                 : 'choice',
    choices              : [
      'Sephora',
      'ULTA',
      'Target',
      'Prestige Retailers: Neiman Marcus, Net-A-Porter',
      'Department Stores: Nordstrom, Macy’s',
      'Online Retailers: DermStore, SkinStore, Amazon',
      'TV: QVC, HSN',
      'Dermatologist',
      'Esthetician',
    ],
  },
  {
    id       : 13,
    key      : 'seeingEsthetician',
    title    : 'Are you currently seeing a Dermatologist or Esthetician?',
    type     : 'choice',
    choices  : [
      'Yes, Dermatologist',
      'Yes, Esthetician',
      'Yes, Both',
      'No, I’m not getting treated by either',
    ],
  },
  {
    id       : 14,
    key      : 'skinCareRoutine',
    title    : 'What type of skin care routine are you looking for?',
    type     : 'choice',
    choices  : [
      'Basic, just 1 or 2 products that will help with specific concerns.',
      'Essentials, I prefer a simple routine, but open to additional products that may enhance results.',
      'Complete, I want the best results and have the time to invest in all of the products that will help me!',
    ],
  },
  {
    id       : 15,
    key      : 'ageGroup',
    title    : 'Age helps us understand what products would be best for you! What age group do you fall under?',
    type     : 'choice',
    choices  : [
      'Under 18',
      '19-29',
      '30-39',
      '40-59',
      '60+',
    ],
  },
  {
    id       : 16,
    key      : 'monthlyBudget',
    title    : 'What’s the monthly budget you’re willing to invest in a new skin care routine?',
    type     : 'choice',
    choices  : [
      '$50-$75',
      '$75-$125',
      '$125-$175',
      '$175+',
    ],
  },
];
/* eslint-enable max-len */
