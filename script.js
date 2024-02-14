const sentences = [
    "Crafting Digital Dreams, One Line of Code at a Time.",
    "Bringing Ideas to life, Code by Code",
    "Designing the Web, Pixel by Pixel.",
    "Transforming Concepts into Interactive Experiences.",
    " Through Elegant Code and Creative Design."
  ];
  
  const textElement = document.querySelector(".sec-text");
  let currentSentenceIndex = 0;
  
  function typeWriterEffect(sentence, index) {
    if (index < sentence.length) {
      textElement.textContent += sentence.charAt(index);
      setTimeout(() => {
        typeWriterEffect(sentence, index + 1);
      }, 50); // Adjust typing speed as needed
    } else {
      setTimeout(() => {
        clearText();
      }, 2000); // Delay before clearing text
    }
  }
  
  function clearText() {
    if (textElement.textContent.length > 0) {
      textElement.textContent = textElement.textContent.slice(0, -1);
      setTimeout(() => {
        clearText();
      }, 20); // Adjust backspacing speed as needed
    } else {
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
      setTimeout(() => {
        typeWriterEffect(sentences[currentSentenceIndex], 0);
      }, 1000); // Delay before typing next sentence
    }
  }
  
  // Start typing the first sentence
  typeWriterEffect(sentences[currentSentenceIndex], 0);
  