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

    

    const word = quote[Math.floor(Math.random() * quote.length)];

    const welcomeItems = document.getElementById('welcome-container');
    welcomeItems.innerHTML = word;


    // welcomeItems.appendChild(
    //   createListElement(quote[0]));
    // welcomeItems.appendChild(
    //    createListElement(quote[1]));
    // welcomeItems.appendChild(
    //   createListElement(quote[2]));
    // welcomeItems.appendChild(
    //   createListElement(quote[3]));


}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
