
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('"Đủ nắng thì hoa sẽ nở!"').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 250); // 900ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};