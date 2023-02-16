function getArticleGenerator(articles) {
  let arrOfstr = articles;
  let result = document.querySelector('#content');
  let i = 0;

  return () => {
    if (i < arrOfstr.length) {
      result.innerHTML += `<article> ${arrOfstr[i]} `;
      i++;
    }
  };
}
