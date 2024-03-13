# Awesome Module

An awesome Node.js module with interesting functions.

## Installation

`npm install awesome-module`

## Usage
```
const awesomeModule = require('awesome-module');

// Get the current date and time
console.log('Current Date & Time:', awesomeModule.getCurrentDateTime());

// Capitalize words
console.log('Capitalized Words:', awesomeModule.capitalizeWords('hello world'));

// Fetch a random quote
awesomeModule.getRandomQuote().then(quote => {
  console.log('Random Quote:', quote);
}).catch(error => {
  console.error('Error:', error);
});
```
