 



const button = document.getElementById('quote-btn');
const quoteElement = document.getElementById('quote');

button.addEventListener('click', () => {
  quoteElement.innerText = "Loading...";

  fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteElement.innerText = `"${data.content}" - ${data.author}`;
    })
    .catch(error => {
      quoteElement.innerText = "Failed to load quote. See console.";
      console.error("Fetch error:", error);
    });
});
