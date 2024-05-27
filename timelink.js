// Function to add a timestamp to a URL
function addTimestampToUrl(url) {
  // Get the current timestamp
  const timestamp = new Date().getTime();
  // Check if the URL already has query parameters
  if (url.includes("?")) {
    // Append the timestamp as an additional parameter
    return `${url}&_=${timestamp}`;
  } else {
    // Add the timestamp as the first query parameter
    return `${url}?_=${timestamp}`;
  }
}

// Function to update the link's URL
function updateLinkUrl() {
  // Select the element you want to modify
  const link = document.getElementById("myLink");
  const originalUrl = link.getAttribute("href");
  // Add the timestamp to the URL
  const newUrl = addTimestampToUrl(originalUrl);
  // Set the new URL to the element
  link.setAttribute("href", newUrl);

  // For demonstration purposes, log the new URL to the console
  console.log(newUrl);
}

// Ensure the function runs after the page is fully loaded
window.onload = updateLinkUrl;
