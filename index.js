fetch("https://www.thecolorapi.com/id")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
