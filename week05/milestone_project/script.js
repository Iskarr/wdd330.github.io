//todo: Show a list of tasks
//todo: Add a new task
//todo: Complete a task
//todo: Remove a task
//todo: Filter tasks (complete/incomplete)
//todo: Data sources: localStorage
// todo: { id : timestamp, content: string, completed: bool }
// toDoList = [toDo];
//todo: Initial Module list: ToDos.js, localStorage helpers (ls.js), utilities.js

// Search function
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLocaleLowerCase();
  const searchTag = document.getElementsByTagName("li");
  let notAvailable = document.getElementById("notAvailable");

  let hasResults = false;
  Array.from(searchTag).forEach(function (searchTag) {
    const title = searchTag.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      searchTag.style.display = "";
      hasResults = true;
    } else {
      searchTag.style.display = "none";
    }
  });
  notAvailable.style.display = hasResults ? "none" : "block";
});
