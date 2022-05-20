"use strict";

var _classes = require("./classes.js");

// Overview
// You’re tasked with creating a morse code translator using OOP. As an extension it should be
// able to translate based on user input from the DOM. Consider how you will store the morse
// characters in JS to make translation easier.
// The classes you use should store all the information needed to translate between Morse and
// English, including the alphabets themselves, the word to translate and possibly the eventual
// output as it’s changing.
// Some of the methods might include how to add a word to translate, how to break it down to aid
// the translation and you’ll have to think carefully about how and when you call these methods to
// make sure the state of the object is getting changed correctly.
// The logic for translating both ways won’t be exactly the same but some methods may be similar
// enough that you might be able to create a base class to extend from in order to share logic
// between the two translators (Morse => English, English => Morse).
// Remember to make a plan/pseudocode before diving right in.
// import { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator } from './classes.js';
var inputBox = document.querySelector(".word-input__input");
var invalidInputMessage = document.querySelector(".invalid-input-message");
var languageSelector = document.querySelector(".language-selector__select");
var outputBox = document.querySelector(".output__p");
var resetButton = document.querySelector(".refresh-button__button");
var submitButton = document.querySelector(".word-input__submit");
var translator; // make the languge selection funcitonal by impldmenting the 2 maps within the languge options given (if statement)

languageSelector.addEventListener("change", function () {
  var languageSelection = languageSelector.value;

  if (languageSelection = "Morse Code") {
    translator = new _classes.MorseCodeToEnglishTranslator();
  } else if (languageSelection === "English") {
    translator = new _classes.EnglishToMorseCodeTranslator();
  }

  invalidInputMessage.style.display = "none";
  invalidInputMessage.innerHTML = "<p class=\"p\">Please provide valid input.</p>";
}); // catch error

submitButton.addEventListener("click", function (event) {
  event.preventDefault; // preventDefault if invoked when the cancelable attribute value is true, 
  //and while executing a listener for the event with passive set to false, 
  //signals to the operation that caused event to be dispatched that it needs to be canceled.

  var inputValue = inputBox.value;

  try {
    outputBox.innerHTML = translator.translate(inputValue);
    invalidInputMessage.style.display = "none";
  } catch (error) {
    invalidInputMessage.innerHTML = e.message;
    invalidInputMessage.style.display = "block";
  }
}); // reset button (event listener and make the values empty)

resetButton.addEventListener("click", function () {
  document.querySelector(".form").reset();
  translator = "";
  outputBox.innerHTML = "";
  invalidInputMessage.style.display = "none";
});