const menu = document.getElementById('open-menu');
const body = document.getElementById('top');
menu.onclick = (el) => {
  if (body.className.startsWith("is-menu-visible")) {
    body.className = "";
  } else {
    body.className = "is-menu-visible";
  }
}
