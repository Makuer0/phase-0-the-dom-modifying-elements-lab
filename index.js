// Write your code here!

document.getElementById("main").remove();


// Create an h1 element
const newHeader = document.createElement("h1");

// Set its id attribute to "victory"
newHeader.id = "victory";

// Add text content to the h1
newHeader.textContent = "YOUR-NAME is the champion";

// Append it to the body
document.body.appendChild(newHeader);