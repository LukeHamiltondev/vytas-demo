// Placeholder until Vytas confirms the booking address.
const BOOKING_EMAIL = "bookings@example.ie";

document.getElementById("year").textContent = new Date().getFullYear();

// Show the phone bar once the top board has scrolled away.
const bar = document.getElementById("callbar");
const board = document.getElementById("top");
if (bar && board && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    const show = !entry.isIntersecting;
    bar.classList.toggle("show", show);
    bar.setAttribute("aria-hidden", String(!show));
    bar.querySelectorAll("a").forEach((a) => (show ? a.removeAttribute("tabindex") : a.setAttribute("tabindex", "-1")));
  }).observe(board);
}

// The site has no server: the job card opens the visitor's email app.
const form = document.getElementById("booking");
const msg = document.getElementById("form-msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    msg.textContent = "Fill in your name, phone, car reg and what's wrong, then send again.";
    form.querySelector(":invalid").focus();
    return;
  }
  const d = new FormData(form);
  const reg = String(d.get("reg")).toUpperCase();
  const body = [
    `Name: ${d.get("name")}`,
    `Phone: ${d.get("phone")}`,
    `Car reg: ${reg}`,
    `Make & model: ${d.get("car") || "-"}`,
    `Preferred day: ${d.get("day")}`,
    "",
    `What's wrong: ${d.get("problem")}`,
  ].join("\n");
  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(`Booking: ${reg}`)}&body=${encodeURIComponent(body)}`;
  msg.textContent = "Your email app should open with the job card. If it doesn't, ring the garage instead.";
});
