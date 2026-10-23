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

// Function to handle user input from the Pack Role form
function calculatePackRole(event) {
  // Prevent page refresh on form submit
  event.preventDefault();

  // 1. Capture values entered by the user
  const nameInput = document.getElementById("visitor-name").value.trim();
  const traitInput = document.getElementById("preferred-trait").value;
  const resultDiv = document.getElementById("quiz-result");

  let roleTitle = "";
  let roleDescription = "";

  // 2. Process input with conditional logic
  switch (traitInput) {
    case "leader":
      roleTitle = "The Lead / Alpha Wolf";
      roleDescription = "You guide the pack with calm decision-making, keeping everyone safe and focused on common goals.";
      break;
    case "scout":
      roleTitle = "The Trail Scout";
      roleDescription = "You range ahead of the pack, using quick thinking and high awareness to discover new paths and spot potential danger.";
      break;
    case "mediator":
      roleTitle = "The Social Anchor";
      roleDescription = "You diffuse tension with humor and playfulness, keeping pack harmony high during stressful times.";
      break;
    case "guardian":
      roleTitle = "The Pack Protector";
      roleDescription = "You are deeply loyal and watchful, ensuring the safety of younger pups and elders in the territory.";
      break;
    default:
      roleTitle = "Pack Companion";
      roleDescription = "You bring essential strength and cooperation to the community.";
  }

  // 3. Display customized output back to the user on the webpage
  resultDiv.innerHTML = `
    <h3>🐾 Welcome to the Pack, ${escapeHTML(nameInput)}!</h3>
    <p><strong>Your Pack Designation:</strong> ${roleTitle}</p>
    <p>${roleDescription}</p>
  `;

  // Reveal the hidden result container
  resultDiv.classList.remove("hidden-content");
}

// Helper function to safely display user text inputs
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
