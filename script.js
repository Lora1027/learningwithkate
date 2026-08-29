// Booking configuration
// 1) Create a Google Form with fields matching the booking form.
// 2) Paste its public "formResponse" URL below if you want direct Google Forms submission.
// For now, the site creates an email request so it is immediately testable.
const TEACHER_EMAIL = "catherine.nisnisan@gmail.com";
const bookingForm = document.getElementById("bookingForm");
const success = document.getElementById("success");
const fallback = document.getElementById("emailFallback");

const dateInput = document.getElementById("date");
const today = new Date();
dateInput.min = today.toISOString().split("T")[0];

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const lesson = document.getElementById("lesson").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const level = document.getElementById("level").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(`ESL lesson request - ${name}`);
  const body = encodeURIComponent(
`Hello Kate,

I would like to request an ESL lesson.

Name: ${name}
Email: ${email}
Lesson: ${lesson}
Preferred date: ${date}
Preferred time: ${time}
English level: ${level}

Goals / message:
${message || "None"}

Thank you!`
  );

  success.hidden = false;
  fallback.hidden = false;
  fallback.textContent = "Open your email to send the request →";
  fallback.href = `mailto:${TEACHER_EMAIL}?subject=${subject}&body=${body}`;
});

// Mobile menu
document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".links");
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
