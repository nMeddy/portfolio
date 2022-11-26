let sidenav = document.getElementById("sideNav");
let openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;

function openNav() {
  sidenav.classList.toggle("active");
}

