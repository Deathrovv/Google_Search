const darkSwitch = document.querySelector(".switch");

const themeSwitchF = function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
};

darkSwitch.addEventListener("click", themeSwitchF);

// document.addEventListener("DOMContentLoaded", function (e) {
//   document.documentElement.setAttribute("data-theme", "light");

// });
