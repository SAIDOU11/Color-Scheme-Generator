const listContainer = document.getElementById("list-color");
let colors = [];
let newString = "";
// let monochrome = "monochrome";
// let monochromeDark = "monochrome-dark";

listContainer.addEventListener("click", (e) => {
  console.log(e.target.id);
});

// &monochrome-dark&monochrome-light&analogic&complement&analogic-complement&triad&quad
const input = document.getElementById("pick-color");

let url = `https://www.thecolorapi.com/scheme?hex=07375b&mode=monochrome`;

function getColor() {
  document.getElementById("get-color").addEventListener("mouseup", () => {
    let inputValue = input.value;
    newString = inputValue.substring(1);
    console.log(input.value, inputValue, newString);
    url = `https://www.thecolorapi.com/scheme?hex=${newString}&mode=${monochrome}`;
    console.log(url);
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

document.getElementById("dropdown").addEventListener("click", () => {
  const list = document.querySelector(".list-color");
  list.style.display = "block";
});

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

fetch(url, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("mode-color").innerHTML = data.mode;
    colors = data.colors;
    render();
    getColor();
  });
