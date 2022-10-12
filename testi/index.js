let themeToggle = document.querySelector(".themeToggle");
let toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.onclick = () => {
  themeToggle.classList.toggle("active");
};

// main Logic
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
