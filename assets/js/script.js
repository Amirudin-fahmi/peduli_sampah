function toggleMenu() {
  document.querySelector(".sub-menu-wrap").classList.toggle("open-menu");
}
function toggleMenuNotif() {
  document.querySelector(".sub-menu-notif").classList.toggle("open-menu");
}
function changeActive(element) {
  var links = document.querySelectorAll(".navbar ul li a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });
  element.classList.add("active");
}
let img_logo = document.querySelector(".logo span");
img_logo.addEventListener("click", function () {
  window.location.href = "landingPage.html";
})
let tentang = document.querySelector(".tentang");
tentang.addEventListener("click", function () {
  window.location.href = "tentang.html";
})

function logout() {
  var confirmDialog = document.getElementById("confirmDialog");
  confirmDialog.style.display = "block";

  document.getElementById("confirmButton").onclick = function () {
    window.location.href = "index.html";
  };

  document.getElementById("cancelButton").onclick = function () {
    window.location.href = "index.html";
  };
}

