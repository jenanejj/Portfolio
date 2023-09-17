//const randomFacts = [
 // "I have double eyelashes.", //
  ///"I play the piano",// 
  //"I knitted over 20 scarves", 
  //"I know how to embrioder", 
 //"I love watching time period pieces"



  // Define an array of random facts about you
const randomFacts = [
  "I can play three musical instruments.",
  "I once traveled to five different countries in one month.",
  "I'm a huge fan of science fiction books.",
  "I can solve a Rubik's Cube in under a minute.",
  "I've climbed a mountain taller than 10,000 feet.",
  "I've met a famous celebrity in person.",
];

// Function to display a random fact
function showRandomFact() {
  const factContainer = document.getElementById('factContainer');
  const randomIndex = Math.floor(Math.random() * randomFacts.length);
  const randomFact = randomFacts[randomIndex];
  factContainer.textContent = randomFact;
}

// Add a click event listener to the button
const factButton = document.getElementById('factButton');
factButton.addEventListener('click', showRandomFact);

  
