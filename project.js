const randomizer = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const sentence = {
  activities: [
    "running",
    "swimming",
    "skiing",
    "parachuting",
    "playing games",
    "driving a car",
    "cooking",
  ],

  feelings: ["hate", "love", "like", "dislike"],

  places: ["mountains", "Los Angeles", "Dubai", "New York", "Greece"],

  //code is can be expand thanks to number variable that states how many new messages are wanted
  creator(number) {
    for (let i = 0; i < number; i++) {
      let activity = randomizer(this.activities);
      let feeling = randomizer(this.feelings);
      let activity2 = randomizer(
        this.activities.filter((word) => word != activity)
      );
      let place = randomizer(this.places);
      let sentence = [
        `I ${feeling} ${activity} and ${activity2}`,
        `I dream about ${activity} in ${place}`,
        `I would like to live in ${place}`,
      ];

      console.log(sentence[Math.floor(Math.random() * sentence.length)]);
    }
  },
};

sentence.creator(3);
