// Begin

window.addEventListener("load", function(){

    let rotate = document.getElementById("rotate");
    let flag = document.getElementById("flag");
    let canvas = document.getElementById("einCanvas");
    let ctx = canvas.getContext("2d");
    let maxHight = canvas.getAttribute("height");
    let maxWidth = canvas.getAttribute("width");
    let windrichtung = document.getElementById("richtung");
    let richtung = ["N", "NO", "O", "SO", "S", "SW", "W", "NW", "N"];

    draw();
    drawFlag(flag.value);

    windrichtung.innerText = "-";

    rotate.addEventListener("input", function () {

        let rotation = [0, 45, 90, 135, 180, 225, 270, 315, 360];

        if (flag.value !== "0") {
            ctx.save();
            ctx.clearRect(0, 0, maxWidth, maxHight);
            draw();
            ctx.translate(maxWidth / 2, maxHight / 2);
            ctx.rotate(rotation[rotate.value] * Math.PI / 180);
            ctx.translate(-maxWidth / 2, -maxHight / 2);
            drawFlag(flag.value);
            ctx.restore();

            windrichtung.innerText = richtung[rotate.value];
        } else {
            windrichtung.innerText = "-";
        }
    });

    flag.addEventListener("input", function () {

            ctx.save();
            ctx.clearRect(0, 0, maxWidth, maxHight);
            draw();
            drawFlag(flag.value);
            ctx.restore();

        if (flag.value !== "0") {
            windrichtung.innerText = richtung[rotate.value];
        } else {
            windrichtung.innerText = "-";
        }
    });

});

function draw(){

    drawClouds();
    drawOcean();

}

function drawClouds(){
    let canvas = document.getElementById("einCanvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#0000ff";
    ctx.lineWidth = 1;

    //Cloud 1
    ctx.beginPath();
    ctx.moveTo(70, 70);
    ctx.bezierCurveTo(60,100,150,100,140, 70);
    ctx.bezierCurveTo(160,80, 160,40, 140, 50);
    ctx.bezierCurveTo(150, 10, 60, 10, 70, 50);
    ctx.bezierCurveTo(60, 40, 40, 80 , 70,70);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    //Cloud 2
    ctx.beginPath();
    ctx.moveTo(170, 120);
    ctx.bezierCurveTo(160, 150, 250, 150, 240, 120);
    ctx.bezierCurveTo(260, 130, 260, 90, 240, 100);
    ctx.bezierCurveTo(250, 60, 160, 60, 170, 100);
    ctx.bezierCurveTo(160, 90, 140, 130, 170,120);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    //Cloud 3
    ctx.beginPath();
    ctx.moveTo(270, 70);
    ctx.bezierCurveTo(260, 100, 350, 100, 340, 70);
    ctx.bezierCurveTo(360, 80, 360, 40, 340, 50);
    ctx.bezierCurveTo(350, 10, 260, 10, 270, 50);
    ctx.bezierCurveTo(260, 40, 240, 80, 270,70);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

}

function drawOcean(){
    let canvas = document.getElementById("einCanvas");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(-50, 450);
    ctx.bezierCurveTo(-50, 500 , 50, 500, 50, 450);
    ctx.bezierCurveTo(50, 500, 150, 500, 150, 450);
    ctx.bezierCurveTo(150, 500, 250, 500, 250, 450);
    ctx.bezierCurveTo(250, 500, 350, 500, 350, 450);
    ctx.bezierCurveTo(350, 500, 450, 500, 450, 450);
    ctx.bezierCurveTo(450, 500, 550, 500, 550, 450);
    ctx.lineTo(550, 650);
    ctx.lineTo(-50, 650);
    ctx.lineTo(-50, 450);
    ctx.closePath();

    ctx.fillStyle = "#2268d8";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
}

function drawFlag(type) {
    let canvas = document.getElementById("einCanvas");
    let ctx = canvas.getContext("2d");

    let maxHight = canvas.getAttribute("height");
    let maxWidth = canvas.getAttribute("width");
    var min = Math.min(maxWidth, maxHight);
    var radius = 0.1 * min/2;
    var phiStart = 0;
    var phiEnde = 2 * Math.PI; // Bogenmaß
    var mathPositiv = true;

    var x = maxWidth / 2;
    var y = maxHight / 2;

    ctx.strokeStyle = "black";
    ctx.lineJoin = "round";

    if (parseInt(type) === 0){
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc((maxWidth / 2), (maxHight / 2), radius, phiStart, phiEnde, mathPositiv);
        ctx.stroke();

    } else {

        let drei, restdrei, zehn, restzehn, fuenf, i, abstand = 0;

        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + 5, y);
        ctx.lineTo(x - 5, y);
        ctx.lineTo(x - 5, y - 200);
        ctx.lineTo(x + 5, y - 200);

        drei = Math.floor(parseInt(type) / 50);
        restdrei = parseInt(type) % 50;

        for (i = 0; i < drei; i++){
            ctx = drawDreieck(ctx, abstand);
            abstand += 40;
        }

        zehn = Math.floor(restdrei / 10);
        restzehn = restdrei % 10;

        for (i = 0; i < zehn; i++){
            ctx = drawStrichGross(ctx, abstand);
            abstand += 20;
        }

        fuenf = Math.floor(restzehn / 5);

        for (i = 0; i < fuenf; i++){
            ctx = drawStrichKlein(ctx, abstand);
            abstand +=20
        }

        console.log("Anzahl 5er Fahnen: " + fuenf + "\n" +
        "Anzahl 10er Fahnen: " + zehn + "\n" +
        "Anzahl 50er Fahnen: " + drei);

        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

    }
}

function drawStrichKlein(ctx, entf) {

    let canvas = document.getElementById("einCanvas");

    let maxHight = canvas.getAttribute("height");
    let maxWidth = canvas.getAttribute("width");

    let dxEnde = maxWidth / 2 + 5;
    let dyEnde = maxHight / 2 - 200;

    ctx.moveTo(dxEnde, dyEnde + entf);
    ctx.lineTo(dxEnde + 30, dyEnde - 10 + entf);
    ctx.lineTo(dxEnde + 30, dyEnde + entf);
    ctx.lineTo(dxEnde, dyEnde + entf + 10);

    return ctx;

}

function drawStrichGross(ctx, entf) {

    let canvas = document.getElementById("einCanvas");

    let maxHight = canvas.getAttribute("height");
    let maxWidth = canvas.getAttribute("width");

    let dxEnde = maxWidth / 2 + 5;
    let dyEnde = maxHight / 2 - 200;

    ctx.moveTo(dxEnde, dyEnde + entf);
    ctx.lineTo(dxEnde + 60, dyEnde - 20 + entf);
    ctx.lineTo(dxEnde + 60, dyEnde - 10 + entf);
    ctx.lineTo(dxEnde, dyEnde + entf + 10);

    return ctx;

}

function drawDreieck(ctx, entf) {

    let canvas = document.getElementById("einCanvas");

    let maxHight = canvas.getAttribute("height");
    let maxWidth = canvas.getAttribute("width");

    let dxEnde = maxWidth / 2 + 5;
    let dyEnde = maxHight / 2 - 200;
    let ausgleich = 10;

    ctx.moveTo(dxEnde, dyEnde + entf + 20 + ausgleich);
    ctx.lineTo(dxEnde + 60, dyEnde + entf + ausgleich);
    ctx.lineTo(dxEnde, dyEnde + entf);

    return ctx;

}


















// End
