const root = document.documentElement;

document.getElementById("style").addEventListener("change", (e) => {
  root.style.setProperty("--border-style", e.target.value);
});

document.getElementById("speed").addEventListener("change", (e) => {
  root.style.setProperty("--multiplier", e.target.value.slice(0, -1) * 10);
});