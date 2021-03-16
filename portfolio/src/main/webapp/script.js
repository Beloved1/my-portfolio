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
    welcomeItems.innerText = word;

}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}



function translate() {
        const facts =
            ['I love to play soccer!', 'Gaming is fun!', 'I love anime also!', 'Coding is life!'];

        const fact = facts[Math.floor(Math.random() * facts.length)];


        const languageCode = 'ja';


        const text = fact;

        const resultContainer = document.getElementById('result');
        resultContainer.innerText = 'Translating...';

        const wordContainer = document.getElementById('word');

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/translate', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
          wordContainer.innerText = text;
        });
      }