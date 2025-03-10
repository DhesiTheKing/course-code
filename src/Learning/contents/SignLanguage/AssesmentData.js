import { tr } from "framer-motion/m";

const assessmentWordsData = [
  {
    question: "What is the sign for 'Hello'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hello-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/help-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/food-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/home-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Thank You'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hello-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/thank_you-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/love-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/sleep-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Sorry'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/please-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/sorry-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/fight-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/drink-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Yes'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/yes-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/no-preview-webp.webp", isCorrect:false  },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hi-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/food-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'No'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/eat-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/above-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/no-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Water'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/work-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/man-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/dog-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Food'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/cat-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/food-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/ball-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/milk-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Friend'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/family-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/lover-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/friend-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/maid-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Family'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/father-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/mother-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/family-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/son-preview-webp.webp", isCorrect: false },
    ],
  },
  {
    question: "What is the sign for 'Love'?",
    options: [
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/love-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/fight-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/women-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/son-preview-webp.webp", isCorrect: false },
    ],
  },
];


const signLanguageNumbersAssessment = [
    {
      question: "What is the sign for the number 1 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_9-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_7-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 5 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_9-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_5-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_7-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 7 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_7-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_9-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 8 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_8-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_9-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 3 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_7-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_5-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 6 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_6-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_9-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 2 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_5-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_7-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 4 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_8-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 9 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_9-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_5-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_7-Filled-No_Label.png", isCorrect: false },
      ],
    },
];
  

const signLanguageLettersAssessment = [
    {
      question: "What is the sign for the letter A in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter B in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter C in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter D in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: true },
      ],
    },
    {
      question: "What is the sign for the letter E in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_E-Filled-With_Label.png", isCorrect: true },
      ],
    },
    {
      question: "What is the sign for the letter F in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_F-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter G in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_G-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter H in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_H-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter I in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_I-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter J in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_J-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
];
 

const FinalSignAssesmentContent = [
    {
      question: "What is the sign for the letter A in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
       
      ],
    },
    {
      question: "What is the sign for the number 1 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the word 'Hello'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hello-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/help-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/food-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/home-preview-webp.webp", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter B in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 2 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the word 'Please'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hello-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/help-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/food-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/home-preview-webp.webp", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter C in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 3 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the word 'Thank You'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hello-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/thank_you-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/love-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/sleep-preview-webp.webp", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter D in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: true },
      ],
    },
    {
      question: "What is the sign for the number 4 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_4-Filled-No_Label.png", isCorrect: true },
      ],
    },
    {
      question: "What is the sign for the word 'Water'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/work-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/man-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/dog-preview-webp.webp", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter E in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_E-Filled-With_Label.png", isCorrect: true },
      ],
    },
    {
      question: "What is the sign for the number 5 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_5-Filled-No_Label.png", isCorrect: true },
      ],
    },
    {
      question: "What is the sign for the word 'Please'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/family-preview-webp.webp", isCorrect: false },
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/lover-preview-webp.webp", isCorrect: false },
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/friend-preview-webp.webp", isCorrect: true },
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/maid-preview-webp.webp", isCorrect: false }, 
      ],
    },
    {
      question: "What is the sign for the letter F in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_F-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_C-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the word 'Friend'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/family-preview-webp.webp", isCorrect: false },
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/lover-preview-webp.webp", isCorrect: false },
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/friend-preview-webp.webp", isCorrect: true },
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/maid-preview-webp.webp", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the number 6 in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Number_1-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_6-Filled-No_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Number_2-Filled-No_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Number_3-Filled-No_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the letter G in sign language?",
      options: [
        { img: "https://www.teachersprintables.net/samples/Letter_A-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_B-Filled-With_Label.png", isCorrect: false },
        { img: "https://www.teachersprintables.net/samples/Letter_G-Filled-With_Label.png", isCorrect: true },
        { img: "https://www.teachersprintables.net/samples/Letter_D-Filled-With_Label.png", isCorrect: false },
      ],
    },
    {
      question: "What is the sign for the word 'Goodbye'?",
      options: [
        { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/family-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/lover-preview-webp.webp", isCorrect: false },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/friend-preview-webp.webp", isCorrect: true },
      { img: "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/maid-preview-webp.webp", isCorrect: false },
      ],
    },
];
  

  
const assesmentData = [signLanguageLettersAssessment,signLanguageNumbersAssessment,assessmentWordsData,FinalSignAssesmentContent];

export function assesmentContent(){
  return assesmentData;
}