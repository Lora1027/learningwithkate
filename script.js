const TEACHER_EMAIL = "catherine.nisnisan@gmail.com";

const emailEl = document.getElementById("teacherEmail");
if (emailEl) emailEl.textContent = TEACHER_EMAIL;

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
if (menu && links) {
  menu.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}
