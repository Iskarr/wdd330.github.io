const links = [
  {
    label: "Week 01 notes",
    url: "week01/index.html",
  },
];

links.forEach((element) => {
  let ol = document.getElementById("list");
  let li = document.createElement("li");
  let a = document.createElement("a");

  a.textContent = element.label;
  a.setAttribute("href", element.url);
  li.appendChild(a);
  ol.appendChild(li);
});