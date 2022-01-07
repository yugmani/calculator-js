const btnAll = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");

for (let i = 0; i < btnAll.length; i++) {
  btnAll[i].addEventListener("click", function () {
    let inputValue = btnAll[i].getAttribute("data-num");
    screen.value += inputValue;
  });
}

btnEqual.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "Input Required";
    screen.style.color = "red";

    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

  let result = eval(screen.value);
  screen.value = result;
});

btnClear.addEventListener("click", function () {
  screen.value = "";
});
