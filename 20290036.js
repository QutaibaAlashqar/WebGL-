var gelwebexit;
var theta;
var locationofTHETA;
var isDirClockwise = false;
var delay = 50;
var program;
var isAnimated = false;
var start;
var colorlocation, colorA = "1.0", colorB = "0.7", colorC = "0.0", colorD = "1.0";
var lcolorA, lcolorB, lcolorC, lcolorD;
var bgcolorA = "0.0", bgcolorB = "0.0", bgcolorC = "0.0", bgcolorD = "1.0";
var checkboxQ = true, checkboxR = true;
var checvaribleKcolorQ = true, checvaribleKcolorR = true;
var checvaribleKscaleQ = true, checvaribleKscaleR = true;
var checvaribleKrotationQ = true, checvaribleKrotationR = true;
var theXdimvalue = 0, theYdimvalue = 0, Bvalue = 1, RleterXdimvalue = 0, RleterYdimvalue = 0, RletterBvalue = 0;
var lTheta = 0;
var keyhColor = 0;
var keybColor = 0;
var keydown = 67;
var is3D = false;

window.onload = function init() {
    window.addEventListener("keyup",
        function () {
            switch (event.keyCode) {
                case 67: // 'c' key
                    keydownColors(0);
                    break;
                case 86: // 'v' key
                    keydownColors(1);
                    break;
                case 38: // up key
                    theYdim += 0.1;
                    changeColor();
                    break;
                case 40: // down key
                    theYdim -= 0.1;
                    changeColor();
                    break;
                case 37: // left key
                    theXdim -= 0.1;
                    changeColor();
                    break;
                case 39: // right key
                    theXdim += 0.1;
                    changeColor();
                    break;
                case 74: // 'j' key
                    oRletterBvalueas += 0.1;
                    changeColor();
                    break;
                case 75: // 'k' key
                    oRletterBvalueas -= 0.1;
                    changeColor();
                    break;
                case 82: // 'r' key
                    startanimation();
                    break;
                case 68: // 'd' key
                    dimfun();
                    break;
            }
        });
    function keydownColors(A) {
        if (A == 0) {
            switch (keyhColor % 6) {
                case 0:
                    colorA = "1.0"; colorB = "1.0"; colorC = "1.0"; colorD = "1.0";
                    changeColor();
                    break;
                case 1:
                    colorA = "0.0"; colorB = "1.0"; colorC = "0.0"; colorD = "1.0";
                    changeColor();
                    break;
                case 2:
                    colorA = "0.0"; colorB = "0.0"; colorC = "1.0"; colorD = "1.0";
                    changeColor();
                    break;
                case 3:
                    colorA = "1.0"; colorB = "1.0"; colorC = "0.0"; colorD = "1.0";
                    changeColor();
                    break;
                case 4:
                    colorA = "1.0"; colorB = "0.5"; colorC = "0.0"; colorD = "1.0";
                    changeColor();
                    break;
                case 5:
                    colorA = "0.0"; colorB = "1.0"; colorC = "1.0"; colorD = "1.0";
                    changeColor();
                    break;
            }
            keyhColor++;
        } else {
            switch (keybColor % 6) {
                case 0:
                    bgcolorA = "0.0"; bgcolorB = "0.6"; bgcolorC = "0.6"; bgcolorD = "1.0";
                    changebackgroundColor();
                    break;
                case 1:
                    bgcolorA = "1.0"; bgcolorB = "0.0"; bgcolorC = "0.0"; bgcolorD = "1.0";
                    changebackgroundColor();
                    break;
                case 2:
                    bgcolorA = "0.5"; bgcolorB = "0.5"; bgcolorC = "0.0"; bgcolorD = "1.0";
                    changebackgroundColor();
                    break;
                case 3:
                    bgcolorA = "0.0"; bgcolorB = "0.5"; bgcolorC = "1.0"; bgcolorD = "1.0";
                    changebackgroundColor();
                    break;
                case 4:
                    bgcolorA = "0.5"; bgcolorB = "0.0"; bgcolorC = "0.0"; bgcolorD = "1.0";
                    changebackgroundColor();
                    break;
                case 5:
                    bgcolorA = "0.5"; bgcolorB = "0.5"; bgcolorC = "0.5"; bgcolorD = "1.0";
                    changebackgroundColor();
                    break;
            }
            keybColor++;
        }
    }
    const canvas = document.querySelector("#gbackgroundtablo");
    gelwebexit = WebGLUtils.setupWebGL(canvas);
    gelwebexit.clearColor(bgcolorA, bgcolorB, bgcolorC, bgcolorD);
    program = initShaders(gelwebexit, "vertex-shader", "fragment-shader")
    gelwebexit.useProgram(program);
    start = document.getElementById("start");
    start.addEventListener("click", startanimation);
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var checkcolQ = document.getElementById("checvaribleKcolorQ");
    var checkcolR = document.getElementById("checvaribleKcolorR");
    var scaleQ = document.getElementById("checvaribleKscaleQ");
    var scaleR = document.getElementById("checvaribleKscaleR");
    var rotationQ = document.getElementById("checvaribleKrotationQ");
    var rotationR = document.getElementById("checvaribleKrotationR");
    var colorbuttonONE = document.getElementById("colorone");
    var colorbuttonTOW = document.getElementById("colortow");
    var colorbuttonTHREE = document.getElementById("colorthree");
    var dimanstionbuttonONE = document.getElementById("dimanistionone");
    var dimanstionbuttonTOW = document.getElementById("dimanistiontow");
    var dimanstionbuttonTHREE = document.getElementById("dimanistionthree");
    var rotationButtonONE = document.getElementById("rotationone");
    var rotationButtonTOW = document.getElementById("rotationtow");
    var rotationButtonTHREE = document.getElementById("rotationthree");
    var colorpas = document.getElementById("colorpas");
    var dimanistionbas = document.getElementById("dimanistionbas");
    var rotasionbas = document.getElementById("rotasionbas");
    var dimONE = document.getElementById("dim");
    var dimTOW = document.getElementById("dim1");
    var dimTHREE = document.getElementById("dim2");

    colorbuttonONE.onclick = function () {
        colorpas.style.display = "block";
        dimanistionbas.style.display = "none";
        rotasionbas.style.display = "none";
    }
    colorbuttonTOW.onclick = function () {
        colorpas.style.display = "block";
        dimanistionbas.style.display = "none";
        rotasionbas.style.display = "none";
    }
    colorbuttonTHREE.onclick = function () {
        colorpas.style.display = "block";
        dimanistionbas.style.display = "none";
        rotasionbas.style.display = "none";
    }
    dimanstionbuttonONE.onclick = function () {
        dimanistionbas.style.display = "block";
        colorpas.style.display = "none";
        rotasionbas.style.display = "none";
    }
    dimanstionbuttonTOW.onclick = function () {
        dimanistionbas.style.display = "block";
        colorpas.style.display = "none";
        rotasionbas.style.display = "none";
    }
    dimanstionbuttonTHREE.onclick = function () {
        dimanistionbas.style.display = "block";
        colorpas.style.display = "none";
        rotasionbas.style.display = "none";
    }
    rotationButtonONE.onclick = function () {
        rotasionbas.style.display = "block";
        dimanistionbas.style.display = "none";
        colorpas.style.display = "none";
    }
    rotationButtonTOW.onclick = function () {
        rotasionbas.style.display = "block";
        dimanistionbas.style.display = "none";
        colorpas.style.display = "none";
    }
    rotationButtonTHREE.onclick = function () {
        rotasionbas.style.display = "block";
        dimanistionbas.style.display = "none";
        colorpas.style.display = "none";
    }
    dimONE.addEventListener("click", dimfun);
    dimTOW.addEventListener("click", dimfun);
    dimTHREE.addEventListener("click", dimfun);
    document.getElementById("slide").onchange = function () { delay = 100 - this.value; };
    document.getElementById("colorA").onchange = function () {
        colorA = this.value;
        changeColor();
    }
    document.getElementById("colorB").onchange = function () {
        colorB = this.value;
        changeColor();
    }
    document.getElementById("colorC").onchange = function () {
        colorC = this.value;
        changeColor();
    }
    document.getElementById("colorD").onchange = function () {
        colorD = this.value;
        changeColor();
    }
    document.getElementById("bgcolorA").onchange = function () {
        bgcolorA = this.value;
        changebackgroundColor();
    }
    document.getElementById("bgcolorB").onchange = function () {
        bgcolorB = this.value;
        changebackgroundColor();
    }
    document.getElementById("bgcolorC").onchange = function () {
        bgcolorC = this.value;
        changebackgroundColor();
    }
    document.getElementById("bgcolorD").onchange = function () {
        bgcolorD = this.value;
        changebackgroundColor();
    }
    checkcolQ.onclick = function () {
        if (this.checked) {
            colorA = lcolorA; colorB = lcolorB; colorC = lcolorC; colorD = lcolorD;
            checvaribleKcolorQ = true;
            changeColor();
        } else {
            lcolorA = colorA; lcolorB = colorB; lcolorC = colorC; lcolorD = colorD;
            checvaribleKcolorQ = false;
            changeColor();
        }
    }
    scaleQ.onclick = function () {
        if (this.checked) {
            checvaribleKscaleQ = true;
        } else {
            checvaribleKscaleQ = false;
            RleterXdimvalue = theXdimvalue;
            RleterYdimvalue = theYdimvalue;
            RletterBvalue = Bvalue;
        }
        changeColor();
    }
    scaleR.onclick = function () {
        if (this.checked) {
            checvaribleKscaleR = true;
        } else {
            checvaribleKscaleR = false;
            RleterXdimvalue = theXdimvalue;
            RleterYdimvalue = theYdimvalue;
            RletterBvalue = Bvalue;
        }
        changeColor();
    }
    checkcolR.onclick = function () {
        if (this.checked) {
            colorA = lcolorA; colorB = lcolorB; colorC = lcolorC; colorD = lcolorD;
            checvaribleKcolorR = true;
            changeColor();
        } else {
            lcolorA = colorA; lcolorB = colorB; lcolorC = colorC; lcolorD = colorD;
            checvaribleKcolorR = false;
            changeColor();
        }
    }
    rotationQ.onclick = function () {
        if (this.checked) {
            checvaribleKrotationQ = true;
        } else {
            checvaribleKrotationQ = false;
        }
        lTheta = theta;
        changeColor();
    }
    rotationR.onclick = function () {
        if (this.checked) {
            checvaribleKrotationR = true;
        } else {
            checvaribleKrotationR = false;
        }
        lTheta = theta;
        changeColor();
    }
    document.getElementById("scaleX").onchange = function () {
        theXdimvalue = Number(this.value);
        changebackgroundColor();
    }
    document.getElementById("scaleY").onchange = function () {
        theYdimvalue = Number(this.value);
        changebackgroundColor();
    }
    document.getElementById("olbk").onchange = function () {
        Bvalue = Number(this.value);
        changebackgroundColor();
    }
    locationofTHETA = gelwebexit.getUniformLocation(program, "theta");
    colorlocation = gelwebexit.getUniformLocation(program, "myColor");
    theta = 0;
    gelwebexit.uniform1f(locationofTHETA, theta);
    changeColor();

    left.onclick = function () {
        isDirClockwise = false;
    }
    right.onclick = function () {
        isDirClockwise = true;
    }
}
function dimfun() {
    if (is3D) {
        is3D = false;
        this.innerHTML = "3D";
    } else {
        is3D = true;
        this.innerHTML = "2D";
    } changeColor();
}
function startanimation() {
    if (!isAnimated) {
        changeColor(1.0, 1.0, 0.0, 1.0);
        requestAnimFrame(render);
        isAnimated = true;
        start.innerHTML = "Stop";
    } else {
        changeColor(1.0, 0.0, 0.0, 1.0);
        isAnimated = false;
        start.innerHTML = "Start";
    }
}
function changeColor() {
    if (checvaribleKcolorQ && checvaribleKcolorR) {
        gelwebexit.clear(gelwebexit.COLOR_BUFFER_BIT);
        gelwebexit.uniform4f(colorlocation, colorA, colorB, colorC, colorD);
        myrotation("Q"); myrotation("R");
    } else if (checvaribleKcolorQ) {
        gelwebexit.clear(gelwebexit.COLOR_BUFFER_BIT);
        gelwebexit.uniform4f(colorlocation, colorA, colorB, colorC, colorD);
        myrotation("Q");
        gelwebexit.uniform4f(colorlocation, lcolorA, lcolorB, lcolorC, lcolorD);
        myrotation("R");
    } else if (checvaribleKcolorR) {
        gelwebexit.clear(gelwebexit.COLOR_BUFFER_BIT);
        gelwebexit.uniform4f(colorlocation, colorA, colorB, colorC, colorD);
        myrotation("Q");
        gelwebexit.uniform4f(colorlocation, lcolorA, lcolorB, lcolorC, lcolorD);
        myrotation("R");
    } else {
        gelwebexit.clear(gelwebexit.COLOR_BUFFER_BIT);
        myrotation("Q"); myrotation("R");
    }
}
function myrotation(QletterwithR) {
    if (QletterwithR == "Q") {
        if (checvaribleKrotationQ) {
            gelwebexit.uniform1f(locationofTHETA, theta);
            theQletter();
        } else {
            gelwebexit.uniform1f(locationofTHETA, lTheta);
            theQletter();
        }
    } else if (QletterwithR == "R") {
        if (checvaribleKrotationR) {
            gelwebexit.uniform1f(locationofTHETA, theta);
            theRletter();
        } else {
            gelwebexit.uniform1f(locationofTHETA, lTheta);
            theRletter();
        }
    }
}
function changebackgroundColor() {
    gelwebexit.clearColor(bgcolorA, bgcolorB, bgcolorC, bgcolorD);
    gelwebexit.clear(gelwebexit.COLOR_BUFFER_BIT);
    changeColor();
}
function render() {
    setTimeout(function () {
        gelwebexit.clear(gelwebexit.COLOR_BUFFER_BIT);
        theta += (isDirClockwise ? -0.1 : 0.1);
        changeColor();
        if (isAnimated) {
            render();
        }
    }, delay);
}
function theQletter() {
    if (checkboxQ) {
        scale("Q", -0.85, 0.4, -0.85, -0.4, -0.7, -0.4);
        scale("Q", -0.85, 0.4, -0.7, 0.4, -0.7, -0.4);
        scale("Q", -0.85, 0.4, -0.7, 0.4, -0.65, 0.7);
        scale("Q", -0.6, 0.55, -0.7, 0.4, -0.65, 0.7);
        scale("Q", -0.6, 0.55, -0.4, 0.55, -0.65, 0.7);
        scale("Q", -0.35, 0.7, -0.4, 0.55, -0.65, 0.7);
        scale("Q", -0.35, 0.7, -0.4, 0.55, -0.3, 0.4);
        scale("Q", -0.35, 0.7, -0.15, 0.4, -0.3, 0.4);
        scale("Q", -0.3, 0.4, -0.3, -0.4, -0.15, -0.4);
        scale("Q", -0.3, 0.4, -0.15, 0.4, -0.15, -0.4);
        scale("Q", -0.85, -0.4, -0.7, -0.4, -0.65, -0.7);
        scale("Q", -0.6, -0.55, -0.7, -0.4, -0.65, -0.7);
        scale("Q", -0.6, -0.55, -0.4, -0.55, -0.65, -0.7);
        scale("Q", -0.35, -0.7, -0.4, -0.55, -0.65, -0.7);
        scale("Q", -0.35, -0.7, -0.4, -0.55, -0.3, -0.4);
        scale("Q", -0.35, -0.7, -0.15, -0.4, -0.3, -0.4);
        scale("Q", -0.45, -0.35, -0.5, -0.45, -0.2, -0.7);
        scale("Q", -0.45, -0.35, -0.15, -0.6, -0.2, -0.7);
        if (is3D) {
            scale3d("|", "Q", 40, -0.7, -0.6, -0.65, -0.65);
            scale3d("|", "Q", 32, -0.15, -0.4, -0.1, -0.45);
            scale3d("-", "Q", 8, -0.6, 0.55, -0.55, 0.5);
            scale3d("-", "Q", 12, -0.65, -0.7, -0.6, -0.75);
            scale3d("/Q1", "Q", 20, -0.35, -0.7, -0.3, -0.75);
            scale3d("/Q1", "Q", 10, -0.7, 0.4, -0.65, 0.35);
            scale3d("/Q2", "Q", 6, -0.2, -0.7, -0.15, -0.75);
        }
    }
}
function theRletter() {
    if (checkboxR) {
        scale("R", 0.15, 0.7, 0.15, -0.7, 0.3, 0.7);
        scale("R", 0.15, -0.7, 0.3, -0.7, 0.3, 0.7);
        scale("R", 0.5, 0.7, 0.3, 0.55, 0.3, 0.7);
        scale("R", 0.5, 0.7, 0.3, 0.55, 0.475, 0.55);
        scale("R", 0.5, 0.7, 0.6, 0.43, 0.475, 0.55);
        scale("R", 0.5, 0.7, 0.6, 0.43, 0.75, 0.43);
        scale("R", 0.6, 0.2, 0.6, 0.43, 0.75, 0.43);
        scale("R", 0.6, 0.2, 0.75, 0.2, 0.75, 0.43);
        scale("R", 0.6, 0.2, 0.75, 0.2, 0.475, 0.075);
        scale("R", 0.575, 0.0, 0.75, 0.2, 0.475, 0.075);
        scale("R", 0.575, 0.0, 0.475, -0.075, 0.475, 0.075);
        scale("R", 0.3, -0.075, 0.475, -0.075, 0.475, 0.075);
        scale("R", 0.3, -0.075, 0.3, 0.075, 0.475, 0.075);
        scale("R", 0.575, 0.0, 0.475, -0.075, 0.75, -0.7);
        scale("R", 0.6, -0.7, 0.475, -0.075, 0.75, -0.7);
        if (is3D) {
            scale3d("-", "R", 6, 0.6, -0.7, 0.65, -0.75);
            scale3d("-", "R", 6, 0.6, -0.7, 0.65, -0.75);
            scale3d("-", "R", 6, 0.15, -0.7, 0.20, -0.75);
            scale3d("-", "R", 7, 0.30, 0.55, 0.35, 0.5);
            scale3d("|", "R", 24, 0.3, -0.7, 0.35, -0.75);
            scale3d("|", "R", 18, 0.3, 0.1, 0.35, 0.05);
            scale3d("-", "R", 6, 0.3, -0.075, 0.35, -0.125);
            scale3d("|", "R", 9, 0.75, 0.2, 0.80, 0.15);
            scale3d("/R", "R", 12, 0.575, 0.0, 0.625, -0.05);
            scale3d("\R", "R", 28, 0.75, -0.7, 0.8, -0.75);
        }
    }
}
function scale(QletterwithR, a, b, c, d, e, f) {
    if (checvaribleKscaleQ && checvaribleKscaleR) {
        triangles((a + theXdimvalue) * Bvalue, (b + theYdimvalue) * Bvalue, (c + theXdimvalue) * Bvalue, (d + theYdimvalue) * Bvalue, (e + theXdimvalue) * Bvalue, (f + theYdimvalue) * Bvalue);
    } else if (checvaribleKscaleQ) {
        if (QletterwithR == "Q") {
            triangles((a + theXdimvalue) * Bvalue, (b + theYdimvalue) * Bvalue, (c + theXdimvalue) * Bvalue, (d + theYdimvalue) * Bvalue, (e + theXdimvalue) * Bvalue, (f + theYdimvalue) * Bvalue);
        } else {
            triangles((a + RleterXdimvalue) * RletterBvalue, (b + RleterYdimvalue) * RletterBvalue, (c + RleterXdimvalue) * RletterBvalue, (d + RleterYdimvalue) * RletterBvalue, (e + RleterXdimvalue) * RletterBvalue, (f + RleterYdimvalue) * RletterBvalue);
        }
    } else if (checvaribleKscaleR) {
        if (QletterwithR == "R") {
            triangles((a + theXdimvalue) * Bvalue, (b + theYdimvalue) * Bvalue, (c + theXdimvalue) * Bvalue, (d + theYdimvalue) * Bvalue, (e + theXdimvalue) * Bvalue, (f + theYdimvalue) * Bvalue);
        } else {
            triangles((a + RleterXdimvalue) * RletterBvalue, (b + RleterYdimvalue) * RletterBvalue, (c + RleterXdimvalue) * RletterBvalue, (d + RleterYdimvalue) * RletterBvalue, (e + RleterXdimvalue) * RletterBvalue, (f + RleterYdimvalue) * RletterBvalue);
        }
    } else {
        triangles((a + RleterXdimvalue) * RletterBvalue, (b + RleterYdimvalue) * RletterBvalue, (c + RleterXdimvalue) * RletterBvalue, (d + RleterYdimvalue) * RletterBvalue, (e + RleterXdimvalue) * RletterBvalue, (f + RleterYdimvalue) * RletterBvalue);
    }
}
function scale3d(k, QletterwithR, h, a, b, c, d) {
    for (var i = 0; i <= h; i++) {
        if (checvaribleKscaleQ && checvaribleKscaleR) {
            if (k == "-") {
                chartline3d((a + 0.025 * i + theXdimvalue) * Bvalue, (b + theYdimvalue) * Bvalue, (c + 0.025 * i + theXdimvalue) * Bvalue, (d + theYdimvalue) * Bvalue);
            } else if (k == "|") {
                chartline3d((a + theXdimvalue) * Bvalue, (b + 0.025 * i + theYdimvalue) * Bvalue, (c + theXdimvalue) * Bvalue, (d + 0.025 * i + theYdimvalue) * Bvalue);
            } else if (k == "/Q1") {
                chartline3d((a + 0.01 * i + theXdimvalue) * Bvalue, (b + 0.015 * i + theYdimvalue) * Bvalue, (c + 0.01 * i + theXdimvalue) * Bvalue, (d + 0.015 * i + theYdimvalue) * Bvalue);
            } else if (k == "/Q2") {
                chartline3d((a + 0.0075 * i + theXdimvalue) * Bvalue, (b + 0.016 * i + theYdimvalue) * Bvalue, (c + 0.0075 * i + theXdimvalue) * Bvalue, (d + 0.016 * i + theYdimvalue) * Bvalue);
            } else if (k == "/R") {
                chartline3d((a + 0.0135 * i + theXdimvalue) * Bvalue, (b + 0.0155 * i + theYdimvalue) * Bvalue, (c + 0.0135 * i + theXdimvalue) * Bvalue, (d + 0.0155 * i + theYdimvalue) * Bvalue);
            } else if (k == "\R") {
                chartline3d((a - 0.0063 * i + theXdimvalue) * Bvalue, (b + 0.025 * i + theYdimvalue) * Bvalue, (c - 0.0063 * i + theXdimvalue) * Bvalue, (d + 0.025 * i + theYdimvalue) * Bvalue);
            }
        } else if (checvaribleKscaleQ) {
            if (QletterwithR == "Q") {
                if (k == "-") {
                    chartline3d((a + 0.025 * i + theXdimvalue) * Bvalue, (b + theYdimvalue) * Bvalue, (c + 0.025 * i + theXdimvalue) * Bvalue, (d + theYdimvalue) * Bvalue);
                } else if (k == "|") {
                    chartline3d((a + theXdimvalue) * Bvalue, (b + 0.025 * i + theYdimvalue) * Bvalue, (c + theXdimvalue) * Bvalue, (d + 0.025 * i + theYdimvalue) * Bvalue);
                } else if (k == "/Q1") {
                    chartline3d((a + 0.01 * i + theXdimvalue) * Bvalue, (b + 0.015 * i + theYdimvalue) * Bvalue, (c + 0.01 * i + theXdimvalue) * Bvalue, (d + 0.015 * i + theYdimvalue) * Bvalue);
                } else if (k == "/Q2") {
                    chartline3d((a + 0.0075 * i + theXdimvalue) * Bvalue, (b + 0.016 * i + theYdimvalue) * Bvalue, (c + 0.0075 * i + theXdimvalue) * Bvalue, (d + 0.016 * i + theYdimvalue) * Bvalue);
                } else if (k == "/R") {
                    chartline3d((a + 0.0135 * i + theXdimvalue) * Bvalue, (b + 0.0155 * i + theYdimvalue) * Bvalue, (c + 0.0135 * i + theXdimvalue) * Bvalue, (d + 0.0155 * i + theYdimvalue) * Bvalue);
                } else if (k == "\R") {
                    chartline3d((a - 0.0063 * i + theXdimvalue) * Bvalue, (b + 0.025 * i + theYdimvalue) * Bvalue, (c - 0.0063 * i + theXdimvalue) * Bvalue, (d + 0.025 * i + theYdimvalue) * Bvalue);
                }
            } else {
                if (k == "-") {
                    chartline3d((a + 0.025 * i + RleterXdimvalue) * RletterBvalue, (b + RleterYdimvalue) * RletterBvalue, (c + 0.025 * i + RleterXdimvalue) * RletterBvalue, (d + RleterYdimvalue) * RletterBvalue);
                } else if (k == "|") {
                    chartline3d((a + RleterXdimvalue) * RletterBvalue, (b + 0.025 * i + RleterYdimvalue) * RletterBvalue, (c + RleterXdimvalue) * RletterBvalue, (d + 0.025 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "/Q1") {
                    chartline3d((a + 0.01 * i + RleterXdimvalue) * RletterBvalue, (b + 0.015 * i + RleterYdimvalue) * RletterBvalue, (c + 0.01 * i + RleterXdimvalue) * RletterBvalue, (d + 0.015 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "/Q2") {
                    chartline3d((a + 0.0075 * i + RleterXdimvalue) * RletterBvalue, (b + 0.016 * i + RleterYdimvalue) * RletterBvalue, (c + 0.0075 * i + RleterXdimvalue) * RletterBvalue, (d + 0.016 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "/R") {
                    chartline3d((a + 0.0135 * i + RleterXdimvalue) * RletterBvalue, (b + 0.0155 * i + RleterYdimvalue) * RletterBvalue, (c + 0.0135 * i + RleterXdimvalue) * RletterBvalue, (d + 0.0155 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "\R") {
                    chartline3d((a - 0.0063 * i + RleterXdimvalue) * RletterBvalue, (b + 0.025 * i + RleterYdimvalue) * RletterBvalue, (c - 0.0063 * i + RleterXdimvalue) * RletterBvalue, (d + 0.025 * i + RleterYdimvalue) * RletterBvalue);
                }
            }
        } else if (checvaribleKscaleR) {
            if (QletterwithR == "R") {
                if (k == "-") {
                    chartline3d((a + 0.025 * i + theXdimvalue) * Bvalue, (b + theYdimvalue) * Bvalue, (c + 0.025 * i + theXdimvalue) * Bvalue, (d + theYdimvalue) * Bvalue);
                } else if (k == "|") {
                    chartline3d((a + theXdimvalue) * Bvalue, (b + 0.025 * i + theYdimvalue) * Bvalue, (c + theXdimvalue) * Bvalue, (d + 0.025 * i + theYdimvalue) * Bvalue);
                } else if (k == "/Q1") {
                    chartline3d((a + 0.01 * i + theXdimvalue) * Bvalue, (b + 0.015 * i + theYdimvalue) * Bvalue, (c + 0.01 * i + theXdimvalue) * Bvalue, (d + 0.015 * i + theYdimvalue) * Bvalue);
                } else if (k == "/Q2") {
                    chartline3d((a + 0.0075 * i + theXdimvalue) * Bvalue, (b + 0.016 * i + theYdimvalue) * Bvalue, (c + 0.0075 * i + theXdimvalue) * Bvalue, (d + 0.016 * i + theYdimvalue) * Bvalue);
                } else if (k == "/R") {
                    chartline3d((a + 0.0135 * i + theXdimvalue) * Bvalue, (b + 0.0155 * i + theYdimvalue) * Bvalue, (c + 0.0135 * i + theXdimvalue) * Bvalue, (d + 0.0155 * i + theYdimvalue) * Bvalue);
                } else if (k == "\R") {
                    chartline3d((a - 0.0063 * i + theXdimvalue) * Bvalue, (b + 0.025 * i + theYdimvalue) * Bvalue, (c - 0.0063 * i + theXdimvalue) * Bvalue, (d + 0.025 * i + theYdimvalue) * Bvalue);
                }
            } else {
                if (k == "-") {
                    chartline3d((a + 0.025 * i + RleterXdimvalue) * RletterBvalue, (b + RleterYdimvalue) * RletterBvalue, (c + 0.025 * i + RleterXdimvalue) * RletterBvalue, (d + RleterYdimvalue) * RletterBvalue);
                } else if (k == "|") {
                    chartline3d((a + RleterXdimvalue) * RletterBvalue, (b + 0.025 * i + RleterYdimvalue) * RletterBvalue, (c + RleterXdimvalue) * RletterBvalue, (d + 0.025 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "/Q1") {
                    chartline3d((a + 0.01 * i + RleterXdimvalue) * RletterBvalue, (b + 0.015 * i + RleterYdimvalue) * RletterBvalue, (c + 0.01 * i + RleterXdimvalue) * RletterBvalue, (d + 0.015 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "/Q2") {
                    chartline3d((a + 0.0075 * i + RleterXdimvalue) * RletterBvalue, (b + 0.016 * i + RleterYdimvalue) * RletterBvalue, (c + 0.0075 * i + RleterXdimvalue) * RletterBvalue, (d + 0.016 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "/R") {
                    chartline3d((a + 0.0135 * i + RleterXdimvalue) * RletterBvalue, (b + 0.0155 * i + RleterYdimvalue) * RletterBvalue, (c + 0.0135 * i + RleterXdimvalue) * RletterBvalue, (d + 0.0155 * i + RleterYdimvalue) * RletterBvalue);
                } else if (k == "\R") {
                    chartline3d((a - 0.0063 * i + RleterXdimvalue) * RletterBvalue, (b + 0.025 * i + RleterYdimvalue) * RletterBvalue, (c - 0.0063 * i + RleterXdimvalue) * RletterBvalue, (d + 0.025 * i + RleterYdimvalue) * RletterBvalue);
                }
            }
        }
    }
}
function triangles(a, b, c, d, e, f) {
    var vertices = new Float32Array(
        [a, b, c, d, e, f]);
    var bufferId = gelwebexit.createBuffer();
    gelwebexit.bindBuffer(gelwebexit.ARRAY_BUFFER, bufferId);
    gelwebexit.bufferData(gelwebexit.ARRAY_BUFFER, vertices, gelwebexit.STATIC_DRAW);
    var vPosition = gelwebexit.getAttribLocation(program, "vPosition");
    gelwebexit.vertexAttribPointer(vPosition, 2, gelwebexit.FLOAT, false, 0, 0);
    gelwebexit.enableVertexAttribArray(vPosition);
    gelwebexit.drawArrays(gelwebexit.TRIANGLE_FAN, 0, 3);
}
function chartline3d(a, b, c, d) {
    var vertices = new Float32Array(
        [a, b, c, d]);
    var bufferId = gelwebexit.createBuffer();
    gelwebexit.bindBuffer(gelwebexit.ARRAY_BUFFER, bufferId);
    gelwebexit.bufferData(gelwebexit.ARRAY_BUFFER, vertices, gelwebexit.STATIC_DRAW);
    var vPosition = gelwebexit.getAttribLocation(program, "vPosition");
    gelwebexit.vertexAttribPointer(vPosition, 2, gelwebexit.FLOAT, false, 0, 0);
    gelwebexit.enableVertexAttribArray(vPosition);
    gelwebexit.drawArrays(gelwebexit.LINES, 0, 2);
}