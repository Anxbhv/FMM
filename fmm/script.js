// Unlock audio on any click
document.addEventListener(
  "click",
  () => {
    const music = document.getElementById("bg-music");
    if (music) {
      music.play().catch(() => {});
    }
  },
  { once: true }
);
function runAway(btn) {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function sayNo() {
  alert("No??? 😭 This option is unavailable 💀😂");
}

function sayYes() {
  window.location.href = "yes.html";
}
