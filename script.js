// date function
let currentFullDate = document.lastModified;
let year = new Date().getFullYear();
let unavailable = document.getElementById("notAvailable");
document.getElementById("year").textContent = year;
unavailable.style.display = "none";

// Search function
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLocaleLowerCase();
  const books = document.getElementsByTagName("h3");
  let notAvailable = document.getElementById("notAvailable");

  let hasResults = false;
  Array.from(books).forEach(function (book) {
    const title = book.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
      hasResults = true;
    } else {
      book.style.display = "none";
    }
  });
  notAvailable.style.display = hasResults ? "none" : "block";
});
