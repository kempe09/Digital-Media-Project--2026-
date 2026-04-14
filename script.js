// see if the website was last viewed as dark
if (JSON.parse(localStorage.getItem("darkMode")) == true) {
  toggleDarkMode();
  localStorage.setItem("darkMode", JSON.stringify(true));
}

function toggleDarkMode() {
  // manage dark mode variable in local storage
  if (localStorage.getItem("darkMode") == null) {
    localStorage.setItem("darkMode", JSON.stringify(true));
  } else if (JSON.parse(localStorage.getItem("darkMode")) == false) {
    localStorage.setItem("darkMode", JSON.stringify(true));
  } else if (JSON.parse(localStorage.getItem("darkMode")) == true) {
    localStorage.setItem("darkMode", JSON.stringify(false));
  }
  // grab HTML tags and toggle the dark class
  let elements = document.getElementsByTagName("*");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("dark");
  }
}

// open mobile menu
function openMobileMenu() {
  let menu = document.getElementById("mobile_menu");
  menu.classList.toggle("open");
}

// change content
function changeContent(newContentID) {
  let content = document.getElementsByClassName("body");
  for (let i = 0; i < content.length; i++) {
    if (content[i].classList.contains("open")) {
      content[i].classList.remove("open");
    }
  }
  let newContent = document.getElementById(newContentID);
  newContent.classList.add("open");
  window.scrollTo(0, 0);
}
