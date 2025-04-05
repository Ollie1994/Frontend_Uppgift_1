document.addEventListener("DOMContentLoaded", function () {
  const changeColorButton = document.getElementById("change-color");
  const colored = document.getElementById("colored");
  const nodeList = document.querySelectorAll(".colored, .footer");
  console.log(nodeList.length);
  for (let i = 0; i < nodeList.length; i++) {
    changeColorButton.addEventListener("click", function () {
      let currentColor = nodeList[i].style.backgroundColor;
      console.log("0.5 = " + currentColor);

      if (currentColor === "rgb(0, 0, 0)") {
        const whiteC = "#FFFFFF";
        currentColor = whiteC;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("2 = " + currentColor);
      } else {
        const blackC = "#000000";
        currentColor = blackC;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("1 = " + currentColor);
      }
    });
  }
});

/* document.addEventListener("DOMContentLoaded", function () {
  const changeColorButton = document.getElementById("change-color");
  const colored = document.getElementById("colored");
  
  hangeColorButton.addEventListener("click", function () {
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
 */
