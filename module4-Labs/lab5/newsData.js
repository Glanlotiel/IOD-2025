let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

// function getNews() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       // resolve the promise with the news data after 1s
//       resolve(news);
//     }, 1000);
//   });
// }

// clone, then populate, then append a new template
function addCard(news) {
  const template = document
    .getElementById("news-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = news.title;
  template.querySelector(".card-text").innerText = news.content;
  document.querySelector("#news-list").appendChild(template);
}

const interval = setInterval(() => {
  document.querySelector("#news-list").innerHTML = "";
  news.forEach((newsItem) => addCard(newsItem));
}, 5000);

document.querySelector("#stop-btn").addEventListener("click", () => {
  clearInterval(interval);
});

document.querySelector("#submit-btn").addEventListener("click", () => {
  const title = document.querySelector("#title-input").value;
  const content = document.querySelector("#content-input").value;

  if (title && content) {
    news.push({ title, content });
    document.querySelector("#title-input").value = "";
    document.querySelector("#content-input").value = "";
  }
});
