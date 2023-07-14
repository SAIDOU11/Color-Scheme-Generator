let colors = [];

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

fetch(
  "https://www.thecolorapi.com/scheme?hex=07375b&mode=monochrome&monochrome-dark&monochrome-light&analogic&complement&analogic-complement&triad&quad"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("mode-color").innerHTML = data.mode;
    colors = data.colors;
    render();
  });
