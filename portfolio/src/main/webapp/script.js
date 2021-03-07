// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fun fact about me to the page.
 */
function addRandomFact() {
  const facts =
      ['I love to play soccer!', 'Gaming is fun!', 'I love anime also!', 'Coding is life!'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

async function getQuotes() {
    const responseFromServer = await fetch('/welcome');
    const quote = await responseFromServer.json();

    const welcomeItems = document.getElementById('welcome-container');
    welcomeItems.innerHTML = '';


    data = []
    data.append(quote.quotes)
    data = json.dumps(data)


    welcomeItems.appendChild(
      createListElement(quote.quotes));
    // welcomeItems.appendChild(
    //   createListElement(quote.quotes[1]));
    // welcomeItems.appendChild(
    //   createListElement(quote.quotes[2]));
    // welcomeItems.appendChild(
    //   createListElement(quote.quotes[3]));


}


// async function getQuotes() {
//   const responseFromServer = await fetch('/welcome');
//   const stats = await responseFromServer.json();

//   const statsListElement = document.getElementById('welcome-container');
//   statsListElement.innerHTML = '';

//   statsListElement.appendChild(
//       createListElement(quo));
//   statsListElement.appendChild(
//       createListElement('Current time: ' + stats.currentTime));
//   statsListElement.appendChild(
//       createListElement('Max memory: ' + stats.maxMemory));
//   statsListElement.appendChild(
//       createListElement('Used memory: ' + stats.usedMemory));
// }

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
