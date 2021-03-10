async function showString() {
  const responseFromServer = await fetch('/welcome');
  const textFromResponse = await responseFromServer.text();

  const welcomeContainer = document.getElementById('welcome-container');
  welcomeContainer.innerText = textFromResponse;
}
