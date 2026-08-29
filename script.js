// Learning With Kate — site settings
// Change ONLY this email address if you ever want to use a different email.
const TEACHER_EMAIL = "catherine.nisnisan@gmail.com";

// Show the same email in the Contact section.
const teacherEmailElement = document.getElementById("teacherEmail");
if (teacherEmailElement) {
  teacherEmailElement.textContent = TEACHER_EMAIL;
}

// Mobile navigation.
const menuButton = document.querySelector(".menu");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    const nav = document.querySelector(".links");
    if (!nav) return;
    nav.style.display = nav.style.display === "flex" ? "" : "flex";
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "18px";
    nav.style.background = "#fff";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "stretch";
  });
}
