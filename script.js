document.addEventListener("DOMContentLoaded", function () {
  const changeColorButton = document.getElementById("change-color");
  const colored = document.getElementById("colored");
  changeColorButton.addEventListener("click", function () {
    let currentColor = colored.style.backgroundColor;
    console.log("0.5 = " + currentColor);

    if (currentColor === "rgb(0, 0, 0)") {
      const whiteC = "#FFFFFF";
      currentColor = whiteC;
      colored.style.backgroundColor = currentColor;
      console.log("2 = " + currentColor);
    } else {
      const blackC = "#000000";
      currentColor = blackC;
      colored.style.backgroundColor = currentColor; 
      console.log("1 = " + currentColor);
    }
  });
});
