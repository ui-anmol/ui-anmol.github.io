const tiles = Array.from(document.getElementsByClassName("tiles"));
const tilesContent = Array.from(
  document.getElementsByClassName("tiles-content")
);

function tileSelection(event) {
  if (
    !event.target.classList.contains("active-tile") &&
    event.target.classList.contains("tiles")
  ) {
    tiles.forEach((e) => e.classList.remove("active-tile"));
    event.target.classList.add("active-tile");
    tilesContent.forEach((ele) => {
      ele.classList.remove("tiles-content-active");
      if (ele.getAttribute("data-display") == event.target.innerText) {
        ele.classList.add("tiles-content-active");
      }
    });
  }
}

const langToggleButton = document.getElementById("button-10");
const langCheckbox = langToggleButton.querySelector(".checkbox");
const svLabel = langToggleButton.querySelector(".sv-label");
const enLabel = langToggleButton.querySelector(".en-label");

let currentLanguage = "sv";

function toggleLanguageContent() {
  const svContentElements = document.querySelectorAll(".lang-sv-content");
  const enContentElements = document.querySelectorAll(".lang-en-content");

  if (currentLanguage === "sv") {
    svContentElements.forEach((el) => {
      el.classList.add("lang-active");
      el.classList.remove("lang-en-content");
    });
    enContentElements.forEach((el) => {
      el.classList.remove("lang-active");
      el.classList.add("lang-en-content");
    });
  } else {
    enContentElements.forEach((el) => {
      el.classList.add("lang-active");
      el.classList.remove("lang-sv-content");
    });
    svContentElements.forEach((el) => {
      el.classList.remove("lang-active");
      el.classList.add("lang-sv-content");
    });
  }
}

function handleLanguageToggle() {
  currentLanguage = langCheckbox.checked ? "en" : "sv";
  langCheckbox.checked = !(currentLanguage === "sv");
  toggleLanguageContent();
}

langCheckbox.addEventListener("change", handleLanguageToggle);

document.addEventListener("DOMContentLoaded", () => {
  toggleLanguageContent();
});
