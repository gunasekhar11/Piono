var noofdrumbuttons = $(".key").length;
for (var i = 0; i < noofdrumbuttons; i++) {
   document.querySelectorAll(".key")[i].addEventListener("click", clickon);
}

function clickon() {
   var buttonInnerHTML = this.innerHTML;
   soundOn(buttonInnerHTML)

}

document.addEventListener("keypress", function(event) {
   makesoundof(event.key)
   buttonanimation(event.key)
});

function soundOn(a) {
   var audio = new Audio("Sounds/" + a + ".mp3")
   audio.play()
   $(".notes").text("♫ Enjoy The Music ♫")
}


function makesoundof(key) {
   switch (key) {
      case "a":
         var tom1 = new Audio('Sounds/1.mp3')
         tom1.play()
         break;
      case "s":
         var tom2 = new Audio('Sounds/2.mp3')
         tom2.play()
         break;
      case "d":
         var tom3 = new Audio('Sounds/3.mp3')
         tom3.play()
         break;
      case "f":
         var tom1 = new Audio('Sounds/4.mp3')
         tom1.play()
         break;
      case "g":
         var tom1 = new Audio('Sounds/5.mp3')
         tom1.play()
         break;
      case "h":
         var tom1 = new Audio('Sounds/6.mp3')
         tom1.play()
         break;
      case "j":
         var tom1 = new Audio('Sounds/7.mp3')
         tom1.play()
         break;
      case "k":
         var tom1 = new Audio('Sounds/8.mp3')
         tom1.play()
         break;
      case "l":
         var tom1 = new Audio('Sounds/9.mp3')
         tom1.play()
         break;
      case "q":
         var tom1 = new Audio('Sounds/10.mp3')
         tom1.play()
         break;
      case "w":
         var tom1 = new Audio('Sounds/11.mp3')
         tom1.play()
         break;
      case "e":
         var tom1 = new Audio('Sounds/12.mp3')
         tom1.play()
         break;
      case "r":
         var tom1 = new Audio('Sounds/13.mp3')
         tom1.play()
         break;
      case "t":
         var tom1 = new Audio('Sounds/14.mp3')
         tom1.play()
         break;
      case "y":
         var tom1 = new Audio('Sounds/15.mp3')
         tom1.play()
         break;
      case "u":
         var tom1 = new Audio('Sounds/16.mp3')
         tom1.play()
         break;
      case "i":
         var tom1 = new Audio('Sounds/17.mp3')
         tom1.play()
         break;
      case "o":
         var tom1 = new Audio('Sounds/18.mp3')
         tom1.play()
         break;
      case "p":
         var tom1 = new Audio('Sounds/19.mp3')
         tom1.play()
         break;
      case "z":
         var tom1 = new Audio('Sounds/20.mp3')
         tom1.play()
         break;
      case "x":
         var tom1 = new Audio('Sounds/21.mp3')
         tom1.play()
         break;
      case "c":
         var tom1 = new Audio('Sounds/22.mp3')
         tom1.play()
         break;
      case "A":
         var tom1 = new Audio('Sounds/23.mp3')
         tom1.play()
         break;
      case "S":
         var tom1 = new Audio('Sounds/24.mp3')
         tom1.play()
         break;
      case "D":
         var tom1 = new Audio('Sounds/25.mp3')
         tom1.play()
         break;
      case "F":
         var tom1 = new Audio('Sounds/26.mp3')
         tom1.play()
         break;
      case "G":
         var tom1 = new Audio('Sounds/27.mp3')
         tom1.play()
         break;
      case "H":
         var tom1 = new Audio('Sounds/28.mp3')
         tom1.play()
         break;
      case "J":
         var tom1 = new Audio('Sounds/29.mp3')
         tom1.play()
         break;
      case "K":
         var tom1 = new Audio('Sounds/30.mp3')
         tom1.play()
         break;
      case "L":
         var tom1 = new Audio('Sounds/31.mp3')
         tom1.play()
         break;
      case "Q":
         var tom1 = new Audio('Sounds/32.mp3')
         tom1.play()
         break;
      case "W":
         var tom1 = new Audio('Sounds/33.mp3')
         tom1.play()
         break;
      case "E":
         var tom1 = new Audio('Sounds/34.mp3')
         tom1.play()
         break;
      case "I":
         var tom1 = new Audio('Sounds/35.mp3')
         tom1.play()
         break;
      case "O":
         var tom1 = new Audio('Sounds/36.mp3')
         tom1.play()
         break;
      case "P":
         var tom1 = new Audio('Sounds/37.mp3')
         tom1.play()
         break;


      default:

   }
}

function buttonanimation(currentkey) {
   var activebutton = document.querySelector("." + currentkey)
   activebutton.classList.add("pressed");
   // var blackactivebutton=document.querySelector(".x"+currentkey)
   // blackactivebutton.classList.add("pressed");


   setTimeout(function() {
      activebutton.classList.remove("pressed");
      // blackactivebutton.classList.remove("pressed");

   }, 125);
}
