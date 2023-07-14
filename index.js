fetch("https://www.thecolorapi.com/scheme?hex=07375b")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

document.getElementById("get-color").addEventListener("click", () => {
  console.log("color");
});
