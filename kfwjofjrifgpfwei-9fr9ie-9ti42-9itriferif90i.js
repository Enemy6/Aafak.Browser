function addWebsite() {
    var input, ul, li, a;
    input = document.getElementById("website-input").value;
    ul = document.getElementById("search-list");
    li = document.createElement("li");
    a = document.createElement("a");
    a.setAttribute("href", input);
    a.innerHTML = input;
    li.appendChild(a);
    ul.appendChild(li);
    document.getElementById("website-input").value = "";
}
function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}