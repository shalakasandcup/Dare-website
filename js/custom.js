document.addEventListener("DOMContentLoaded", function () {
  // ✅ Toggle navbar menu
  const navbarOpen = document.getElementById("navbar-toggler");
  if (navbarOpen) {
    navbarOpen.addEventListener("click", function () {
      document.body.classList.toggle("navbar-open");
    });
  }
});