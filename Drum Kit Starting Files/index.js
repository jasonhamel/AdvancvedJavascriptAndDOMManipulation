let buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonClicked = this;
    var sound;
    switch (buttonClicked.innerHTML) {
      case "w":
        sound = new Audio("./sounds/crash.mp3");
        break;
      case "a":
        sound = new Audio("./sounds/kick-bass.mp3");
        break;
      case "s":
        sound = new Audio("./sounds/snare.mp3");
        break;
      case "d":
        sound = new Audio("./sounds/tom-1.mp3");
        break;
      case "j":
        sound = new Audio("./sounds/tom-2.mp3");
        break;
      case "k":
        sound = new Audio("./sounds/tom-3.mp3");
        break;
      case "l":
        sound = new Audio("./sounds/tom-4.mp3");
        break;
    }
    sound.play();
  });
}
