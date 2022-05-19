import { englishToMorseMap, moreseToEnglishMap } from "./maps";

class Translator {
  constructor(map) {
    this.map = map;
  }

  translateLetter(letter) {
    if (!this.map.hasOwnProperty(letter)) {
      throw new Error(`${letter} is not a valid input.`);
    }
    return this.map[letter];
  }
}

class EnglishToMorseCodeTranslator extends Translator {
  constructor() {
    super(englishToMorseMap); // calls the parents constructor with englishToMorseMap as the argument
  }
  createArrayToTranslate(input) {
    return input.split("");
  }

  translate(inputString) {
    const arrayToTranslate = this.createArrayToTranslate(
      inputString.toUpperCase()
    );
    const translatedArray = arrayToTranslate.map((letter) => {
      return this.translateLetter(letter);
    });
    return translatedArray.join(" ");
  }
}

class MorseCodeToEnglishTranslator extends Translator {
  constructor() {
    super(moreseToEnglishMap);
  }
  createArrayToTranslate(input) {
    const regex = /([\s\/]+)/g;

    return input.split(regex);
  }

  translate(inputString) {
    const arrayToTranslate = this.createArrayToTranslate(inputString);
    const arrayWithWhiteSpaceRemoved = arrayToTranslate.filter(
      (letter) => letter !== " "
    );
    const translatedArray = arrayWithWhiteSpaceRemoved.map((letter) => {
      return this.translateLetter;
    });
    return translatedArray.join("");
  }
}

export { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator };


