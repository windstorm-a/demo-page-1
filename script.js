const wolfFacts = [
  "🐾 Wolf Fact: Wolves can travel up to 30 miles in a single day while searching for food!",
  "🐺 Wolf Fact: A wolf's howl can be heard up to 10 miles away in open, unobstructed terrain!",
  "🐾 Wolf Fact: Wolves can consume up to 20 pounds of meat in a single feeding after a successful hunt.",
  "🌲 Wolf Fact: Wolf pups are born blind and deaf, weighing only about one pound at birth!",
  "🐾 Wolf Fact: Wolf packs generally consist of 4 to 9 members, structured around breeding pairs and their offspring.",
  "🍃 Wolf Fact: Wolves possess over 200 million olfactory scent cells—compared to roughly 5 million in human noses!"
];

let currentFactIndex = 0;

function showWolfFact() {
  alert(wolfFacts[currentFactIndex]);
  currentFactIndex = (currentFactIndex + 1) % wolfFacts.length;
}

function toggleBehaviors() {
  const content = document.getElementById("behaviors-list");
  const button = document.getElementById("toggle-btn");

  if (content.classList.contains("hidden-content")) {
    content.classList.remove("hidden-content");
    button.textContent = "🐾 Hide Wolf Behaviors List";
    button.setAttribute("aria-expanded", "true");
  } else {
    content.classList.add("hidden-content");
    button.textContent = "🐾 Show Wolf Behaviors List";
    button.setAttribute("aria-expanded", "false");
  }
}
