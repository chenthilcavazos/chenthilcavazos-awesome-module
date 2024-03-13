// awesome-module.js

const axios = require('axios');

// Function to get the current date and time
function getCurrentDateTime() {
  return new Date().toLocaleString();
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to fetch a random quote from an external API
async function getRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    console.error('Error fetching random quote:', error.message);
    return null;
  }
}

module.exports = {
  getCurrentDateTime,
  capitalizeWords,
  getRandomQuote
};
