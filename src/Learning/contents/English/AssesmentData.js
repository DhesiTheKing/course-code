const englishVocabularyAssessment = [
    {
      question: "What is the opposite of 'Big'?",
      options: [
        { text: "Small", isCorrect: true },
        { text: "Tall", isCorrect: false },
        { text: "Large", isCorrect: false },
        { text: "Huge", isCorrect: false },
      ],
    },
    {
      question: "Which word means 'a place where you learn'?",
      options: [
        { text: "School", isCorrect: true },
        { text: "Park", isCorrect: false },
        { text: "Zoo", isCorrect: false },
        { text: "Shop", isCorrect: false },
      ],
    },
    {
      question: "What is the plural of 'Cat'?",
      options: [
        { text: "Cats", isCorrect: true },
        { text: "Cates", isCorrect: false },
        { text: "Caties", isCorrect: false },
        { text: "Cat", isCorrect: false },
      ],
    },
    {
      question: "Which word means 'to jump high'?",
      options: [
        { text: "Leap", isCorrect: true },
        { text: "Run", isCorrect: false },
        { text: "Walk", isCorrect: false },
        { text: "Crawl", isCorrect: false },
      ],
    },
    {
      question: "What is the synonym of 'Happy'?",
      options: [
        { text: "Joyful", isCorrect: true },
        { text: "Sad", isCorrect: false },
        { text: "Angry", isCorrect: false },
        { text: "Tired", isCorrect: false },
      ],
    },
    {
      question: "Which word means 'a place where you sleep'?",
      options: [
        { text: "Bedroom", isCorrect: true },
        { text: "Kitchen", isCorrect: false },
        { text: "Garden", isCorrect: false },
        { text: "School", isCorrect: false },
      ],
    },
  ];
  
  const englishGrammarAssessment = [
    {
      question: "Which sentence is correct?",
      options: [
        { text: "I am happy.", isCorrect: true },
        { text: "I is happy.", isCorrect: false },
        { text: "I are happy.", isCorrect: false },
        { text: "I happy am.", isCorrect: false },
      ],
    },
    {
      question: "What is the past tense of 'Jump'?",
      options: [
        { text: "Jumped", isCorrect: true },
        { text: "Jumps", isCorrect: false },
        { text: "Jumping", isCorrect: false },
        { text: "Jump", isCorrect: false },
      ],
    },
    {
      question: "Which word is a noun?",
      options: [
        { text: "Dog", isCorrect: true },
        { text: "Run", isCorrect: false },
        { text: "Quickly", isCorrect: false },
        { text: "Happy", isCorrect: false },
      ],
    },
    {
      question: "Which sentence has the correct punctuation?",
      options: [
        { text: "I like apples.", isCorrect: true },
        { text: "I like apples,", isCorrect: false },
        { text: "I like apples!", isCorrect: false },
        { text: "I like apples?", isCorrect: false },
      ],
    },
    {
      question: "What is the correct contraction for 'Do not'?",
      options: [
        { text: "Don't", isCorrect: true },
        { text: "Dont", isCorrect: false },
        { text: "Do'nt", isCorrect: false },
        { text: "Do not", isCorrect: false },
      ],
    },
    {
      question: "Which word is a verb?",
      options: [
        { text: "Sing", isCorrect: true },
        { text: "Book", isCorrect: false },
        { text: "Table", isCorrect: false },
        { text: "Blue", isCorrect: false },
      ],
    },
  ];
  
  const englishComprehensionAssessment = [
    {
      question: "Read the sentence: 'The cat sat on the mat.' Where did the cat sit?",
      options: [
        { text: "On the mat", isCorrect: true },
        { text: "On the chair", isCorrect: false },
        { text: "On the table", isCorrect: false },
        { text: "On the bed", isCorrect: false },
      ],
    },
    {
      question: "Read the sentence: 'Tom has a red ball. He plays with it.' What color is Tom's ball?",
      options: [
        { text: "Red", isCorrect: true },
        { text: "Blue", isCorrect: false },
        { text: "Green", isCorrect: false },
        { text: "Yellow", isCorrect: false },
      ],
    },
    {
      question: "Read the sentence: 'The sun is bright. It gives us light.' What does the sun give us?",
      options: [
        { text: "Light", isCorrect: true },
        { text: "Darkness", isCorrect: false },
        { text: "Rain", isCorrect: false },
        { text: "Snow", isCorrect: false },
      ],
    },
    {
      question: "Read the sentence: 'The bird flew to the nest. It laid eggs there.' Where did the bird lay eggs?",
      options: [
        { text: "In the nest", isCorrect: true },
        { text: "On the tree", isCorrect: false },
        { text: "In the sky", isCorrect: false },
        { text: "On the ground", isCorrect: false },
      ],
    },
    {
      question: "Read the sentence: 'The teacher gave the students homework. They must finish it by tomorrow.' Who gave the homework?",
      options: [
        { text: "The teacher", isCorrect: true },
        { text: "The students", isCorrect: false },
        { text: "The principal", isCorrect: false },
        { text: "The parents", isCorrect: false },
      ],
    },
    {
      question: "Read the sentence: 'The dog barked at the stranger. It was loud.' What was loud?",
      options: [
        { text: "The dog's bark", isCorrect: true },
        { text: "The stranger", isCorrect: false },
        { text: "The cat", isCorrect: false },
        { text: "The house", isCorrect: false },
      ],
    },
  ];
  
  const englishSentenceFormationAssessment = [
    {
      question: "Arrange the words to form a correct sentence: 'likes / She / ice cream.'",
      options: [
        { text: "She likes ice cream.", isCorrect: true },
        { text: "Likes she ice cream.", isCorrect: false },
        { text: "Ice cream she likes.", isCorrect: false },
        { text: "She ice cream likes.", isCorrect: false },
      ],
    },
    {
      question: "Arrange the words to form a correct sentence: 'play / They / outside.'",
      options: [
        { text: "They play outside.", isCorrect: true },
        { text: "Play they outside.", isCorrect: false },
        { text: "Outside they play.", isCorrect: false },
        { text: "They outside play.", isCorrect: false },
      ],
    },
    {
      question: "Arrange the words to form a correct sentence: 'is / The / sky / blue.'",
      options: [
        { text: "The sky is blue.", isCorrect: true },
        { text: "Sky the is blue.", isCorrect: false },
        { text: "Blue is the sky.", isCorrect: false },
        { text: "The is sky blue.", isCorrect: false },
      ],
    },
    {
      question: "Arrange the words to form a correct sentence: 'reads / She / books / every day.'",
      options: [
        { text: "She reads books every day.", isCorrect: true },
        { text: "Reads she books every day.", isCorrect: false },
        { text: "Books she reads every day.", isCorrect: false },
        { text: "Every day she reads books.", isCorrect: false },
      ],
    },
    {
      question: "Arrange the words to form a correct sentence: 'dog / The / barks / loudly.'",
      options: [
        { text: "The dog barks loudly.", isCorrect: true },
        { text: "Dog the barks loudly.", isCorrect: false },
        { text: "Barks the dog loudly.", isCorrect: false },
        { text: "Loudly the dog barks.", isCorrect: false },
      ],
    },
    {
      question: "Arrange the words to form a correct sentence: 'birds / The / fly / in the sky.'",
      options: [
        { text: "The birds fly in the sky.", isCorrect: true },
        { text: "Birds the fly in the sky.", isCorrect: false },
        { text: "Fly the birds in the sky.", isCorrect: false },
        { text: "In the sky the birds fly.", isCorrect: false },
      ],
    },
  ];
  
  const englishAssessmentData = [
    englishVocabularyAssessment,
    englishGrammarAssessment,
    englishComprehensionAssessment,
    englishSentenceFormationAssessment,
  ];
  
  export function englishAssessmentContent() {
    return englishAssessmentData;
  }