const body = document.querySelector("body");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const allowedkeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById('clear').addEventListener('click', function () {
  input.value = "";
  input.focus();
  resultInput.value = "";
});

const calculate = () => {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
};

document.getElementById("igual").addEventListener('click', calculate);

document.getElementById("themeSwitcher").addEventListener("click", alternarModo);

function alternarModo() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}



// document.getElementById("toggleTheme").addEventListener("click", alternarModo)

// document.getElementById("themeSwitcher").addEventListener("click", function() {
//     const main = document.querySelector("main")
//     main.temaInicial.toggle("dark-mode", "light-mode")
    
//     if (temaInicial === "dark-mode") {
//       main.setAttribute("light-mode")
//     } else {
//       main.setAttribute("dark-mode")
//     }
//   })

// document.getElementById("themeSwitcher").addEventListener("click", function() {
//     const main = document.querySelector("main")
//     const temaInicial = main.toggle("temaInicial")
  
//     if (temaInicial === "dark-mode") {
//       main.toggle("light-mode")
//     } else {
//       main.toggle("dark-mode")
//     }
//   })
  


