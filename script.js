const quoteText = document.getElementById("quote-text");
const generateButton = document.getElementById("generate-button");

function updateQuote() {
  quoteText.textContent = "Generating...";

  // Make an API request to your backend to get a stoic quote
  fetch("/get-stoic-quote")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.quote;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      quoteText.textContent = "An error occurred. Please try again later.";
    });
}

generateButton.addEventListener("click", updateQuote);

// Initial quote generation when the page loads
updateQuote();
