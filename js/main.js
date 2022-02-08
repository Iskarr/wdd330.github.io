const links = [
  {
    label: "Week 01 notes",
    url: "week01/index.html",
  },
  {
    label: "Week 02 notes",
    url: "week02/index.html",
  },
  {
    label: "Week 03 notes",
    url: "week03/index.html",
  },
  {
    label: "Week 04 notes",
    url: "week04/index.html",
  },
  {
    label: "Week 05 notes",
    url: "week05/index.html",
  },
  {
    label: "Week 06 Project",
    url: "week06/index.html",
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
