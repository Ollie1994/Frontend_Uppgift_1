/* https://www.w3schools.com/jsref/met_document_queryselectorall.asp */
document.addEventListener("DOMContentLoaded", function () {
  let localStorageColor = localStorage.getItem("color");
  console.log(localStorageColor);
  if (localStorageColor === "dark") {
    localStorageColor = "rgb(0, 0, 0)";
  } else {
    localStorageColor = "rgb(255, 255, 255)";
  }
  const changeColorButton = document.getElementById("change-color");
  /*   const colored = document.getElementById("colored");  BEHÖVER JAG DENNA ????*/
  const nodeList = document.querySelectorAll(
    ".header, .footer, .aboutMe, .techSkills, .softSkills, .edBack, .navBar, .projects, .picOfMe, .picOfMeTwo"
  );

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = localStorageColor;
    console.log("list" + nodeList[i]);
  }

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
        localStorage.clear();
        localStorage.setItem("color", "light");
      } else {
        const blackC = "#000000";
        currentColor = blackC;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("1 = " + currentColor);
        localStorage.clear();
        localStorage.setItem("color", "dark");
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
