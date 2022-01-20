const navbar = document.getElementById("navbar");
const toggler = document.getElementById("toggler");

let scrolled = false;
let expanded = false;

const changeNavbarState = () => {
  if (scrolled || expanded) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-dark");
  }
};

window.addEventListener("scroll", () => {
  scrolled = window.scrollY !== 0;
  changeNavbarState();
});

const observer = new window.MutationObserver(() => {
  expanded = toggler.ariaExpanded === "true";
  if (expanded) {
    changeNavbarState();
  } else {
    setTimeout(changeNavbarState, 100);
  }
});

observer.observe(toggler, { attributes: true });
