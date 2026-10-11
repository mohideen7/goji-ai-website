const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

// Add the direct APK URL here after you upload your release file.
const apkUrl = "https://github.com/mohideen7/GojiAI/releases/download/Version1.2/application-3ab7686e-8bfe-439b-9646-8a64fbc630fd.apk";
const downloadButton = document.querySelector("#downloadButton");
const downloadHint = document.querySelector("#downloadHint");
if (apkUrl.trim()) {
  downloadButton.href = apkUrl;
  downloadButton.removeAttribute("aria-disabled");
  downloadButton.classList.remove("disabled");
  downloadButton.innerHTML = "Download APK <span>↓</span>";
  downloadHint.textContent = "Android · Early access";
} else {
  downloadButton.addEventListener("click", event => event.preventDefault());
}
