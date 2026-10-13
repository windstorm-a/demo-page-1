// Array containing a list of wolf facts
const wolfFacts = [
  "🐾 Wolf Fact: Wolves can travel up to 30 miles in a single day while searching for food!",
  "🐺 Wolf Fact: A wolf's howl can be heard up to 10 miles away in open territory!",
  "🐾 Wolf Fact: Wolves eat about 20 pounds of meat in a single feeding when hungry.",
  "🌲 Wolf Fact: Wolf pups are born blind and deaf, weighing only about one pound!",
  "🐾 Wolf Fact: A wolf pack usually consists of 4 to 9 members led by an alpha pair.",
  "🍃 Wolf Fact: Wolves have about 200 million scent cells—humans only have 5 million!"
];

// Variable to keep track of which fact to show next
let currentFactIndex = 0;

function showWolfFact() {
  // Show the current fact in an alert
  alert(wolfFacts[currentFactIndex]);

  // Move to the next fact in the list
  currentFactIndex = (currentFactIndex + 1) % wolfFacts.length;
}
