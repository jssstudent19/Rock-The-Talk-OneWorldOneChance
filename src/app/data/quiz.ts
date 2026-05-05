export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
}

export const QUIZ: Question[] = [
  {
    id: 1,
    question: "How much plastic enters the world's oceans every single year?",
    options: ["1 million tons", "4 million tons", "8 million tons", "20 million tons"],
    correct: 2,
    explanation: "8 million metric tons of plastic enter the ocean yearly — equivalent to one garbage truck per minute.",
  },
  {
    id: 2,
    question: "How many trees did Earth have before human civilization began?",
    options: ["1 trillion", "3 trillion", "6 trillion", "10 trillion"],
    correct: 2,
    explanation: "Earth once had approximately 6 trillion trees. Today fewer than 3 trillion remain — a loss of over 46%.",
  },
  {
    id: 3,
    question: "At the peak of the Cold War, roughly how many nuclear warheads existed worldwide?",
    options: ["5,000", "20,000", "50,000", "70,000"],
    correct: 3,
    explanation: "At peak Cold War, humanity had over 70,000 nuclear warheads — enough to destroy Earth many times over.",
  },
  {
    id: 4,
    question: "The last decade (2011–2020) was the hottest in how many years of Earth's climate history?",
    options: ["10,000 years", "50,000 years", "125,000 years", "1 million years"],
    correct: 2,
    explanation: "The last decade was the hottest in 125,000 years — a direct consequence of human-caused climate change.",
  },
  {
    id: 5,
    question: "By 2050, how many people could be displaced by climate collapse?",
    options: ["100 million", "500 million", "1.2 billion", "3 billion"],
    correct: 2,
    explanation: "Up to 1.2 billion people could be climate refugees by 2050 — the largest forced migration in human history.",
  },
  {
    id: 6,
    question: "World War II killed approximately what percentage of the world's 1940 population?",
    options: ["1%", "3%", "7%", "10%"],
    correct: 1,
    explanation: "An estimated 70–85 million people died in WWII — about 3% of the world's entire population at the time.",
  },
  {
    id: 7,
    question: "Which gas is most responsible for the accelerating greenhouse effect caused by humans?",
    options: ["Methane", "Nitrogen", "Carbon Dioxide", "Ozone"],
    correct: 2,
    explanation: "Carbon Dioxide (CO₂) from burning fossil fuels is the primary driver of human-caused climate change.",
  },
  {
    id: 8,
    question: "The Chernobyl exclusion zone is estimated to remain dangerously radioactive for how long?",
    options: ["100 years", "1,000 years", "10,000 years", "100,000 years"],
    correct: 2,
    explanation: "Parts of Chernobyl's exclusion zone will remain dangerously radioactive for up to 20,000 years due to isotopes like Caesium-137.",
  },
  {
    id: 9,
    question: "What fraction of Earth's species are currently threatened with extinction?",
    options: ["1 in 100", "1 in 20", "1 in 8", "1 in 4"],
    correct: 2,
    explanation: "The IUCN estimates roughly 1 in 8 (about 28%) of all assessed species face extinction — an accelerating crisis.",
  },
  {
    id: 10,
    question: "The golden record sent on NASA's Voyager spacecraft contains greetings in how many languages?",
    options: ["15 languages", "35 languages", "55 languages", "90 languages"],
    correct: 2,
    explanation: "NASA's Voyager Golden Record carries greetings in 55 human languages — a message to any civilization that might find it.",
  },
];
