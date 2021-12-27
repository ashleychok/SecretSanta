document.addEventListener('DOMContentLoaded', function(){
  const secret = '28c5f19f166ad68f350f656104280a744305edac23b5bcbd2d975f2d12721964';
  const digest = async ({ algorithm = "SHA-256", message }) =>
      Array.prototype.map
          .call(
              new Uint8Array(
                  await crypto.subtle.digest(algorithm, new TextEncoder().encode(message))
              ),
              (x) => ("0" + x.toString(16)).slice(-2)
          )
          .join("");
  let word = [];
  const checkWord = (wordArray) => {
    const wordFromArray = wordArray.join('');
    digest({message: wordFromArray.toLowerCase()}).then(data => {
      if (wordArray.length === 4 && !wordArray.includes(undefined) && data !== secret) {
        firstLetter.value = '';
        secondLetter.value = '';
        thirdLetter.value = '';
        fourthLetter.value = '';
        firstLetter.focus();
        word = [];
      }
      if (data === secret) {
        wdfr();
      }
    })
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
  const rew = () => {
    setTimeout(() => document.location.href = 'welcome.html', 500);
  }
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
  const wdfr = () => {
    localStorage.setItem('loggedIn', 'true');
    rew();
  }
});
