import "./styles/main.scss";
import "./styles/media.scss";
import "./fonts/sofia-pro/fonts.scss";


// dropdown menu
const user = document.getElementById("user-info");
const dropdown = document.getElementById("user-dropdown");
const body = document.body;

function handleToggleDropdown() {
  if (dropdown.classList.contains('active')) {
    dropdown.classList.remove("active");
  }
  else {
    dropdown.classList.add("active");
  }
}

user.addEventListener("click", handleToggleDropdown);

// drawer toggle
window.addEventListener("click", event => {
  
  if(event.target.className == "drawer-bnt" || event.target.className == "toggle") {
    document.body.classList.toggle("show");
    body.style.position = "fixed";
  } else if (event.target.className == "overlay") {
    document.body.classList.remove("show");
    body.style.position = "";
  }
});

