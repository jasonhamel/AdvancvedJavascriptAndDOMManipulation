let buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonClicked = this;
    buttonClicked.style.color = "white";
    var sound = new Audio("./sounds/tom-1.mp3");
    sound.play();
  });
}
