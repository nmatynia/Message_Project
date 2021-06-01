const randomizer = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const activities = [
  "running",
  "swimming",
  "skiing",
  "parachuting",
  "playing games",
  "driving a car",
  "cooking",
];
const feelings = ["hate", "love", "like", "dislike"];
const problems = ["depression", "health", "familly problems", "work"];
const message = (activity, feeling, problem, number) => {
  for (let i = 0; i < number; i++) {
    let sentence = [
      `I ${randomizer(feeling)} ${randomizer(activity)}`,
      `${randomizer(activity)} helps me with my ${randomizer(problem)}`,
      `I am ${randomizer(activities)} because It makes me smile`,
    ];

    console.log(sentence[Math.floor(Math.random() * sentence.length)]);
  }
};

message(activities, feelings, problems, 3);
