document.addEventListener('DOMContentLoaded', function(){
  let word = [];
  const checkWord = (wordArray) => {
    const wordFromArray = wordArray.join('');
    if (wordArray.length === 4 && !wordArray.includes(undefined) && wordFromArray.toLowerCase() !== 'sher') {
      firstLetter.value = '';
      secondLetter.value = '';
      thirdLetter.value = '';
      fourthLetter.value = '';
      firstLetter.focus();
      word = [];
    }
    if (wordFromArray.toLowerCase() === 'sher') {
      localStorage.setItem('loggedIn', 'true')
      setTimeout(() => document.location.href = 'welcome.html', 500);
    }
  }
  const firstLetter = document.getElementById('firstLetter');
  firstLetter.focus()
  const secondLetter = document.getElementById('secondLetter');
  const thirdLetter = document.getElementById('thirdLetter');
  const fourthLetter = document.getElementById('fourthLetter');
  firstLetter.addEventListener('input', (e) => {
    if (e.target.value) {
      word[0] = e.target.value;
      secondLetter.focus();
      checkWord(word);
    } else {
      word.splice(0, 1);
      checkWord(word);
    }
  });
  secondLetter.addEventListener('input', (e) => {
    if (e.target.value) {
      word[1] = e.target.value;
      thirdLetter.focus();
      checkWord(word);
    } else {
      firstLetter.focus();
      word.splice(1, 1);
      checkWord(word);
    }
  });
  thirdLetter.addEventListener('input', (e) => {
    if (e.target.value) {
      word[2] = e.target.value;
      fourthLetter.focus();
      checkWord(word);
    } else {
      secondLetter.focus();
      word.splice(2, 1);
      checkWord(word);
    }
  });
  fourthLetter.addEventListener('input', (e) => {
    if (e.target.value) {
      word[3] = e.target.value;
      checkWord(word);
    } else {
      thirdLetter.focus();
      word.splice(3, 1);
      checkWord(word);
    }
  });
});
