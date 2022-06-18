const inputText = document.getElementById("text");
const btnSubmit = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");
const span = document.querySelector(".span");

btnSubmit.addEventListener("click", () => {
    span.innerText = vowelsCounter();
    inputText.value = "";
})

const vowelsCounter = () => {

    let str = inputText.value;

    let counter = 0;

  str = str.toLowerCase().split("");

  str.map((e) => {
    if (e == "a") {
      counter += 1;
    } else if (e == "e") {
      counter += 1;
    } else if (e == "i") {
      counter += 1;
    } else if (e == "o") {
      counter += 1;
    } else if (e == "e") {
      counter += 1;
    } else if (e == "u") {
      counter += 1;
    }
  })
  return counter;
}
