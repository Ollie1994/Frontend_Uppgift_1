/*https://www.w3schools.com/jsref/met_document_queryselectorall.asp*/
/*https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage*/
/*https://developer.chrome.com/docs/devtools/storage/localstorage*/
/*https://sabe.io/blog/javascript-change-text-color*/
/*https://stackoverflow.com/questions/40095117/looping-over-two-arrays-with-different-length-and-correctly-sorting-the-output*/

document.addEventListener("DOMContentLoaded", function () {
  let localStorageColor = localStorage.getItem("color");
  let localStorageColorText = localStorage.getItem("color");
  console.log(localStorageColor);
  if (localStorageColor === "dark") {
    localStorageColor = "rgb(0, 0, 0)";
    localStorageColorText = "rgb(255, 255 ,255)";
  } else {
    localStorageColor = "rgb(255, 255, 255)";
    localStorageColorText = "rgb(0, 0 ,0)";
  }
  const changeColorButton = document.getElementById("change-color");
  /*   const colored = document.getElementById("colored");  BEHÖVER JAG DENNA ????*/
  const nodeList = document.querySelectorAll(
    "body, html, .site-header, .footer, .aboutMe, .techSkills, .softSkills, .edBack, .navBar, .projects, .picOfMe, .picOfMeTwo"
  );
  const nodeListTextColor = document.querySelectorAll(
    ".line-md--light-dark, a, .site-header, .footer, .aboutMe, .techSkills, .softSkills, .edBack, .navBar, .projects, .picOfMe, .picOfMeTwo"
  );

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = localStorageColor;
    console.log("list" + nodeList[i]);
    for (let i = 0; i < nodeListTextColor.length; i++) {
      nodeListTextColor[i].style.color = localStorageColorText;
      console.log("list" + nodeListTextColor[i]);
    }
  }

  changeColorButton.addEventListener("click", function () {
    let i = 0;
    let currentColor = nodeList[i].style.backgroundColor;
    let currentColorText = nodeListTextColor[i].style.color;
    console.log("0.5 = " + currentColor);

    if (currentColor === "rgb(0, 0, 0)") {
      const whiteC = "rgb(255, 255, 255)";
      currentColor = whiteC;
      currentColorText = "rgb(0, 0, 0)";
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = currentColor;
        for (let i = 0; i < nodeListTextColor.length; i++) {
          nodeListTextColor[i].style.color = currentColorText;
          console.log("list" + nodeListTextColor[i]);
        }
      }
      console.log("Light = " + currentColor);
      localStorage.clear();
      localStorage.setItem("color", "light");
    } else {
      const blackC = "rgb(0, 0, 0)";
      currentColor = blackC;
      currentColorText = "rgb(255, 255, 255)";
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = currentColor;
        for (let i = 0; i < nodeListTextColor.length; i++) {
          nodeListTextColor[i].style.color = currentColorText;
          console.log("list" + nodeListTextColor[i]);
        }
      }
      console.log("Dark = " + currentColor);
      localStorage.clear();
      localStorage.setItem("color", "dark");
    }
  });
});

/*  console.log(nodeList.length);
  for (let i = 0; i < nodeList.length; i++) {
    changeColorButton.addEventListener("click", function () {
      let currentColor = nodeList[i].style.backgroundColor;
      let currentColorText = nodeListTextColor[i].style.color;
      console.log("0.5 = " + currentColor);

      if (currentColor === "rgb(36, 36, 36)") {
        const whiteC = "rgb(255, 255, 255)";
        currentColor = whiteC;
        currentColorText = "rgb(0, 0, 0)";
        nodeListTextColor[i].style.color = currentColorText;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("Light = " + currentColor);
        localStorage.clear();
        localStorage.setItem("color", "light");
      } else {
        const blackC = "rgb(36, 36, 36)";
        currentColor = blackC;
        currentColorText = "rgb(255, 255, 255)";
        nodeListTextColor[i].style.color = currentColorText;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("Dark = " + currentColor);
        localStorage.clear();
        localStorage.setItem("color", "dark");
      }
    });
  } 
});*/

/* document.addEventListener("DOMContentLoaded", function () {
  let localStorageColor = localStorage.getItem("color");
  console.log(localStorageColor);
  if (localStorageColor === "dark") {
    localStorageColor = "rgb(36, 36, 36)";
  } else {
    localStorageColor = "rgb(255, 255, 255)";
  }
  const changeColorButton = document.getElementById("change-color");
  /*   const colored = document.getElementById("colored");  BEHÖVER JAG DENNA ????*/
/*  const nodeList = document.querySelectorAll(
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

      if (currentColor === "rgb(36, 36, 36)") {
        const whiteC = "rgb(255, 255, 255)";
        currentColor = whiteC;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("2 = " + currentColor);
        localStorage.clear();
        localStorage.setItem("color", "light");
      } else {
        const blackC = "rgb(36, 36, 36)";
        currentColor = blackC;
        nodeList[i].style.backgroundColor = currentColor;
        console.log("1 = " + currentColor);
        localStorage.clear();
        localStorage.setItem("color", "dark");
      }
    });
  }
}); */

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
