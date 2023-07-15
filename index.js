let colors = [];
let newString = "";
let mode = "";

const dropdown = document.querySelectorAll(".dropdown");
const input = document.getElementById("pick-color");

let url = `https://www.thecolorapi.com/scheme?hex=07375b&mode=monochrome`;

function getColor() {
  document.getElementById("get-color").addEventListener("mouseup", () => {
    let inputValue = input.value;
    newString = inputValue.substring(1);
    url = `https://www.thecolorapi.com/scheme?hex=${newString}&mode=${mode}`;
    let req = new Request(url);
    sendRequest(req);
  });

  function sendRequest(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("mode-color").innerHTML = data.mode;
        colors = data.colors;
        render();
        getColor();
      });
  }

  document.getElementById("colors-container").innerHTML = colors
    .map((color) => {
      return `
    <div class="colors-palet">
      <div class="color" style="background-color:${color.hex.value}";></div>
      <div class="hex">${color.hex.value}</div>
    </div>`;
    })
    .join("");
}

function render() {
  document.getElementById("colors-container").innerHTML = colors
    .map((color) => {
      return `
  <div class="colors-palet">
    <div class="color" style="background-color:${color.hex.value}";></div>
    <div class="hex">${color.hex.value}</div>
  </div>`;
    })
    .join("");
}

dropdown.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // Add a click to select element
  select.addEventListener("click", () => {
    // Add click to select element
    select.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      mode = option.innerText;
      selected.innerText = option.innerText;
      if ((selected.innerText = mode)) {
        url = `https://www.thecolorapi.com/scheme?hex=07375b&mode=${mode}`;
        req = new Request(url);
      }
      select.classList.remove("select-clicked");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      // Add active class
      option.classList.add("active");
    });
  });
});

fetch(url, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("mode-color").innerHTML = data.mode;
    colors = data.colors;
    render();
    getColor();
  });
