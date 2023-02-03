const setChanges = document.getElementsByClassName("box")
window.onscroll = function () {
  yValue = setChanges[0].getBoundingClientRect().bottom;
  index = 1;

  let firstLetter = 65;

  while (yValue < window.innerHeight *0.4) {
    yValue = setChanges[index].getBoundingClientRect().bottom;

    index++;
    firstLetter+=2;
  }
  document.querySelector("span").textContent = String.fromCharCode(firstLetter);
  document.getElementById("second_header").textContent = String.fromCharCode(firstLetter +1);
};
