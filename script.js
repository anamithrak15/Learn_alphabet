var num = document.querySelectorAll(".alpha").length;


for (var i = 0; i < num; i++) {
    document.querySelectorAll(".alpha")[i].addEventListener("click", function () {
        var buttonInner = this.innerHTML;
        makeSound(buttonInner);
        buttonAnimate(buttonInner);
    });

}


document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimate(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var alp1 = new Audio("audio/a.mp3");
            alp1.play();
            break;
        case "b":
            var alp2 = new Audio("audio/b.mp3");
            alp2.play();//callmethod
            break;
        case "c":
            var alp3 = new Audio("audio/c.mp3");
            alp3.play();
            break;
        case "d":
            var alp4 = new Audio("audio/d.mp3");
            alp4.play();
            break;
        case "e":
            var alp5 = new Audio("audio/e.mp3");
            alp5.play();
            break;
        case "f":
            var alp6 = new Audio("audio/f.mp3");
            alp6.play();
            break;
        case "g":
            var alp7 = new Audio("audio/g.mp3");
            alp7.play();
            break;
        case "h":
            var alp8 = new Audio("audio/h.mp3");
            alp8.play();
            break;
        case "i":
            var alp9 = new Audio("audio/i.mp3");
            alp9.play();//callmethod
            break;
        case "j":
            var alp10 = new Audio("audio/j.mp3");
            alp10.play();
            break;
        case "k":
            var alp11 = new Audio("audio/k.mp3");
            alp11.play();
            break;
        case "l":
            var alp12 = new Audio("audio/l.mp3");
            alp12.play();
            break;
        case "m":
            var alp13 = new Audio("audio/m.mp3");
            alp13.play();
            break;
        case "n":
            var alp14 = new Audio("audio/n.mp3");
            alp14.play();
            break;
        case "o":
            var alp15 = new Audio("audio/o.mp3");
            alp15.play();
            break;
        case "p":
            var alp16 = new Audio("audio/p.mp3");
            alp16.play();//callmethod
            break;
        case "q":
            var alp17 = new Audio("audio/q.mp3");
            alp17.play();
            break;
        case "r":
            var alp18 = new Audio("audio/r.mp3");
            alp18.play();
            break;
        case "s":
            var alp19 = new Audio("audio/s.mp3");
            alp19.play();
            break;
        case "t":
            var alp20 = new Audio("audio/t.mp3");
            alp20.play();
            break;
        case "u":
            var alp21 = new Audio("audio/u.mp3");
            alp21.play();
            break;
        case "v":
            var alp22 = new Audio("audio/v.mp3");
            alp22.play();
            break;
        case "w":
            var alp23 = new Audio("audio/w.mp3");
            alp23.play();//callmethod
            break;
        case "x":
            var alp24 = new Audio("audio/x.mp3");
            alp24.play();
            break;
        case "y":
            var alp25 = new Audio("audio/y.mp3");
            alp25.play();
            break;
        case "z":
            var alp26 = new Audio("audio/z.mp3");
            alp26.play();
            break;

        default:
            console.log(buttonInner);
    }
}

function buttonAnimate(currentKey) {
    var activeButton = document.$("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}

