//try catch throw
function validateNumb() {
    const message = document.querySelector("#errtry");
    message.innerHTML = "";
    let x = document.querySelector("#tryinp").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
        message.innerHTML = "Input is " + x;
    } catch (err) {
        message.innerHTML = "Input " + err;
    } finally {
        document.querySelector("#tryinp").value = "";
    }
}
document.getElementById("prevDefault").addEventListener("submit", function(e) {
    e.preventDefault();
});

function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
}

function onlyNumbers(str) {
    return /^[0-9]+$/.test(str)
}
//Form Validation
function formValidation() {
    const name = document.querySelector("#name").value
    const numb = document.querySelector("#numb").value
    const email = document.querySelector("#email").value
    const country = document.querySelector("#country").value
    console.log("country", country, "name", name, "numb", numb, "email", email, )
    if (name && numb && email && country != "-1") {
        document.querySelector("#valForm").innerHTML = ""
    } else {
        document.querySelector("#valForm").innerHTML = "Please fill every input field!"
    }
    if (country == "-1") {
        document.querySelector("#valCountry").innerHTML = "Select Your Country"

    } else {
        document.querySelector("#valCountry").innerHTML = ""

    }
    if (name === "") {
        document.querySelector("#valName").innerHTML = "Name is required!"
    } else {
        document.querySelector("#valName").innerHTML = ""
        if (onlyLettersAndSpaces(name)) {
            document.querySelector("#valName").innerHTML = ""
        } else {
            document.querySelector("#valName").innerHTML = "Numbers or Special Characters are not allowed!"
        }
    }
    if (numb === "") {
        document.querySelector("#valNumb").innerHTML = "Number is required!"
    } else {
        document.querySelector("#valNumb").innerHTML = ""
        if (onlyNumbers(numb)) {
            document.querySelector("#valNumb").innerHTML = ""
        } else {
            document.querySelector("#valNumb").innerHTML = "Only numbers are allowed"
        }
    }
    if (email === "") {
        document.querySelector("#valEmail").innerHTML = "Email is required"
    } else {
        const atpos = email.indexOf("@");
        const dotpos = email.lastIndexOf(".");
        if (atpos < 1 || (dotpos - atpos < 2)) {
            document.querySelector("#valEmail").innerHTML = "Enter Email in a right Format like: abc@gmail.com"
            return false;
        }
        document.querySelector("#valEmail").innerHTML = ""
        return (true);
    }
}

const animation = document.querySelector("#animation")
const anim = document.querySelector("#autoanimation")
const mouseAnim = document.querySelector("#mouseanimation")

//init
function init() {
    animation.style.width = "200px"
    animation.style.height = "200px"
    animation.style.backgroundColor = "#000"
    animation.style.position = 'relative';
    animation.style.left = '0px';
    anim.style.width = "200px"
    anim.style.height = "200px"
    anim.style.backgroundColor = "#ADD8E6"
    anim.style.position = 'relative';
    anim.style.left = '0px';
    mouseAnim.style.width = "200px"
    mouseAnim.style.height = "200px"
    mouseAnim.style.backgroundColor = "#355C7D"
    mouseAnim.style.position = 'relative';
    mouseAnim.style.left = '0px';
}
window.onload = init;
const windowWidth = window.screen.availWidth
var animate
let moveAutoLeft = false

//mouseover animation
mouseAnim.addEventListener("mouseover", function() {
    mouseAnim.style.backgroundColor = "#edc9af"
})

mouseAnim.addEventListener("mouseout", function() {
    mouseAnim.style.backgroundColor = "#355C7D"
})


//automated animation
function autoStart() {
    let animationPosition = parseInt(anim.style.left)

    if (((animationPosition + 230) <= windowWidth) && moveAutoLeft === false) {
        anim.style.left = animationPosition + 10 + 'px';

    } else {
        moveAutoLeft = true;
        animationPosition = animationPosition - 10
        anim.style.left = animationPosition + 'px';
        if (animationPosition === 0) {
            moveAutoLeft = false;
        }
    }

    animate = setTimeout(autoStart, 20);
}

function autoStop() {
    clearTimeout(animate);
    anim.style.left = '0px';
    moveAutoLeft = false;
}

function autoPause() {
    clearTimeout(animate);
    anim.style.left = animationPosition;
    moveAutoLeft = false;
}

//manual animatin

let moveLeft = false;

function moveDiv() {
    let animationPosition = parseInt(animation.style.left)

    if (((animationPosition + 230) <= windowWidth) && moveLeft === false) {
        animation.style.left = animationPosition + 10 + 'px';

    } else {
        moveLeft = true;
        animationPosition = animationPosition - 10
        animation.style.left = animationPosition + 'px';
        if (animationPosition === 0) {
            moveLeft = false;
        }
    }
}

//classes inheritance
class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
    present() {
        return 'I have a ' + this._carname;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this._model = model;
    }
    get modalname() {
        return this._model;
    }
    set modalname(x) {
        this._model = x;
    }
    show() {
        return this.present() + ', it is a ' + this._model;
    }
}

let myCar = new Model("Ford", "Mustang");
myCar.carname = "Volvo";
myCar.modalname = "ford"
document.querySelector("#inClass").innerHTML = myCar.show();

//Statics Method in class
class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
    static calculate(n = 1) {
        return n * 3;
    }
}

class SquaredTriple extends Triple {
    static longDescription;
    static description = 'I square the triple of any number you provide';
    static calculate(n) {
        return super.calculate(n) * super.calculate(n);
    }
}
// debugger;
console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));


//PlugIns
const pluginName = document.querySelector("#plugInName")
const pluginFilename = document.querySelector("#plugInFilename")
const pluginDesc = document.querySelector("#plugInDescription")

// for (i = 0; i < navigator.plugins.length; i++) {
//     pluginName.innerHTML = navigator.plugins[i].name
//     pluginFilename.innerHTML = navigator.plugins[i].filename
//     pluginDesc.innerHTML = navigator.plugins[i].description
// }

// Multimedia

// function play() {
//     if (!document.demo.IsPlaying()) {
//         document.demo.Play();
//     }
// }

// function stop() {
//     if (document.demo.IsPlaying()) {
//         document.demo.StopPlay();
//     }
// }

// function rewind() {
//     if (document.demo.IsPlaying()) {
//         document.demo.StopPlay();
//     }
//     document.demo.Rewind();
// }

//Navigator Properties
// const navigator = document.querySelector("#navProps")