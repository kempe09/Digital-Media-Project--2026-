// see if the website was last viewed as dark
if (JSON.parse(localStorage.getItem("darkMode")) == true) {
  toggleDarkMode()
  localStorage.setItem("darkMode", JSON.stringify(true))
} 

function toggleDarkMode() {
  console.log(localStorage.getItem("darkMode") + '1')
  // manage dark mode variable in local storage 
  if (localStorage.getItem("darkMode") == null) {
      localStorage.setItem("darkMode", JSON.stringify(true))
    } else if (JSON.parse(localStorage.getItem("darkMode")) == false) {
      localStorage.setItem("darkMode", JSON.stringify(true))
    } else if (JSON.parse(localStorage.getItem("darkMode")) == true) {
      localStorage.setItem("darkMode", JSON.stringify(false))
    }
  // grab HTML tags and toggle the dark class
  let elements = document.getElementsByTagName("*")
  for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("dark");
  }
  console.log(localStorage.getItem("darkMode") + '2')
}