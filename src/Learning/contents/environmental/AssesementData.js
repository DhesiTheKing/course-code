const environmentalScienceAssessment = [
    {
        question: "What is the main source of energy for life on Earth?",
        options: [
            { text: "The Sun", isCorrect: true },
            { text: "The Moon", isCorrect: false },
            { text: "Wind", isCorrect: false },
            { text: "Water", isCorrect: false },
        ],
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        options: [
            { text: "Carbon dioxide", isCorrect: true },
            { text: "Oxygen", isCorrect: false },
            { text: "Nitrogen", isCorrect: false },
            { text: "Hydrogen", isCorrect: false },
        ],
    },
    {
        question: "Which of the following is a renewable resource?",
        options: [
            { text: "Solar energy", isCorrect: true },
            { text: "Coal", isCorrect: false },
            { text: "Natural gas", isCorrect: false },
            { text: "Petroleum", isCorrect: false },
        ],
    },
    {
        question: "What type of pollution is caused by excessive use of plastic?",
        options: [
            { text: "Land pollution", isCorrect: true },
            { text: "Noise pollution", isCorrect: false },
            { text: "Air pollution", isCorrect: false },
            { text: "Light pollution", isCorrect: false },
        ],
    },
    {
        question: "Which action can help reduce deforestation?",
        options: [
            { text: "Planting more trees", isCorrect: true },
            { text: "Cutting more trees", isCorrect: false },
            { text: "Burning forests", isCorrect: false },
            { text: "Using more paper", isCorrect: false },
        ],
    },
    {
        question: "Which of the following is a non-renewable resource?",
        options: [
            { text: "Coal", isCorrect: true },
            { text: "Wind", isCorrect: false },
            { text: "Water", isCorrect: false },
            { text: "Sunlight", isCorrect: false },
        ],
    },
];

const environmentalConservationAssessment = [
    {
        question: "What is the main goal of conservation?",
        options: [
            { text: "To protect the environment and natural resources", isCorrect: true },
            { text: "To cut down trees", isCorrect: false },
            { text: "To pollute rivers", isCorrect: false },
            { text: "To build more factories", isCorrect: false },
        ],
    },
    {
        question: "Which is an example of water conservation?",
        options: [
            { text: "Turning off the tap while brushing teeth", isCorrect: true },
            { text: "Letting water run continuously", isCorrect: false },
            { text: "Wasting drinking water", isCorrect: false },
            { text: "Using more water than needed", isCorrect: false },
        ],
    },
    {
        question: "Why should we reduce plastic waste?",
        options: [
            { text: "To protect marine life and reduce pollution", isCorrect: true },
            { text: "To create more landfill waste", isCorrect: false },
            { text: "Because plastic is biodegradable", isCorrect: false },
            { text: "To increase pollution", isCorrect: false },
        ],
    },
    {
        question: "Which of these activities contributes to air pollution?",
        options: [
            { text: "Burning fossil fuels", isCorrect: true },
            { text: "Using solar panels", isCorrect: false },
            { text: "Planting trees", isCorrect: false },
            { text: "Using bicycles", isCorrect: false },
        ],
    },
    {
        question: "Which of the following is an eco-friendly practice?",
        options: [
            { text: "Recycling waste materials", isCorrect: true },
            { text: "Throwing garbage in rivers", isCorrect: false },
            { text: "Using plastic bags", isCorrect: false },
            { text: "Cutting down forests", isCorrect: false },
        ],
    },
    {
        question: "How can we reduce energy consumption at home?",
        options: [
            { text: "Turning off lights when not in use", isCorrect: true },
            { text: "Keeping lights on all day", isCorrect: false },
            { text: "Using non-renewable energy sources", isCorrect: false },
            { text: "Leaving appliances plugged in", isCorrect: false },
        ],
    },
];

const environmentalBiodiversityAssessment = [
    {
        question: "Why is biodiversity important?",
        options: [
            { text: "It helps maintain ecosystem balance", isCorrect: true },
            { text: "It decreases food availability", isCorrect: false },
            { text: "It increases pollution", isCorrect: false },
            { text: "It reduces oxygen levels", isCorrect: false },
        ],
    },
    {
        question: "Which of the following is an endangered species?",
        options: [
            { text: "Tiger", isCorrect: true },
            { text: "Dog", isCorrect: false },
            { text: "Cow", isCorrect: false },
            { text: "Pigeon", isCorrect: false },
        ],
    },
    {
        question: "Which action can help protect wildlife?",
        options: [
            { text: "Creating national parks and wildlife sanctuaries", isCorrect: true },
            { text: "Hunting animals for sport", isCorrect: false },
            { text: "Destroying forests", isCorrect: false },
            { text: "Polluting rivers", isCorrect: false },
        ],
    },
    {
        question: "What is an example of an invasive species?",
        options: [
            { text: "A non-native plant that spreads rapidly and harms local species", isCorrect: true },
            { text: "A plant that only grows in one place", isCorrect: false },
            { text: "An animal that eats plants", isCorrect: false },
            { text: "A bird that migrates during winter", isCorrect: false },
        ],
    },
    {
        question: "What can cause the extinction of a species?",
        options: [
            { text: "Habitat destruction and climate change", isCorrect: true },
            { text: "Planting trees", isCorrect: false },
            { text: "Conserving forests", isCorrect: false },
            { text: "Reducing pollution", isCorrect: false },
        ],
    },
    {
        question: "Which practice helps increase biodiversity?",
        options: [
            { text: "Protecting natural habitats", isCorrect: true },
            { text: "Destroying wetlands", isCorrect: false },
            { text: "Polluting air and water", isCorrect: false },
            { text: "Hunting endangered species", isCorrect: false },
        ],
    },
];
const finalEnvironmentalAssesment = [...environmentalScienceAssessment , ...environmentalConservationAssessment , ...environmentalBiodiversityAssessment].sort(() => Math.random() - 0.5);
const environmentalScienceAssessmentData = [
    environmentalScienceAssessment,
    environmentalConservationAssessment,
    environmentalBiodiversityAssessment,
    finalEnvironmentalAssesment
];

export function environmentalAssessmentContent() {
    return environmentalScienceAssessmentData;
}
