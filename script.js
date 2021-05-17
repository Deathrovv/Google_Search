const darkSwitch = document.querySelector(".switch");

const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPrefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

userPrefersDark
  ? document.documentElement.setAttribute("data-theme", "dark")
  : document.documentElement.setAttribute("data-theme", "light");

const themeSwitchF = function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
};

darkSwitch.addEventListener("click", themeSwitchF);
