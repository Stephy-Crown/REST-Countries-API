//icon
const moonIcon = document.querySelector(".moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
};

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("moonIcon");
};

// Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// Call theme switcherr on clicking icon
moonIcon.addEventListener("click", () => {
  themeSwitch();
});

// invoke theme check on load
themeCheck();
