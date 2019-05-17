// Begin

window.addEventListener( "load", function(){

    let canvas, ctx, maxWidth, maxHight, winkel, windstaerke;

    canvas = document.getElementById("einCanvas");
    ctx = canvas.getContext("2d");
    maxHight = canvas.getAttribute("height");
    maxWidth = canvas.getAttribute("width");

    winkel = prompt("Der Winkel");
    windstaerke = prompt("Die Windstärke");

    ctx.save();
    ctx.clearRect(0, 0, maxWidth, maxHight);
    draw();
    ctx.translate(maxWidth/2, maxHight/2);
    ctx.rotate(winkel * Math.PI/180);
    ctx.translate(-maxWidth/2, -maxHight/2);
    drawFlag(windstaerke);
    ctx.restore();

});

function draw(){

    drawClouds();
    drawOcean();
    alert ("Hello");

}

function drawClouds(){
    let canvas = document.getElementById("einCanvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#0000ff";
    ctx.lineWidth = 1;

    //Cloud 1
    ctx.beginPath();
    ctx.moveTo(70, 70);
    ctx.bezierCurveTo(60, range(100), range(150), range(100), range(140), 70);
    ctx.bezierCurveTo(160, range(80), range(160), range(40), range(140), 50);
    ctx.bezierCurveTo(150, range(10), range(60), range(10), range(70), 50);
    ctx.bezierCurveTo(60, range(40), range(40), range(80) , range(70),70);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    //Cloud 2
    ctx.beginPath();
    ctx.moveTo(170, 120);
    ctx.bezierCurveTo(160, range(150), range(250), range(150), range(240), 120);
    ctx.bezierCurveTo(260, range(130), range(260), range(90), range(240), 100);
    ctx.bezierCurveTo(250, range(60), range(160), range(60), range(170), 100);
    ctx.bezierCurveTo(160, range(90), range(140), range(130) , range(170),120);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    //Cloud 3
    ctx.beginPath();
    ctx.moveTo(270, 70);
    ctx.bezierCurveTo(260, range(100), range(350), range(100), range(340), 70);
    ctx.bezierCurveTo(360, range(80), range(360), range(40), range(340), 50);
    ctx.bezierCurveTo(350, range(10), range(260), range(10), range(270), 50);
    ctx.bezierCurveTo(260, range(40), range(240), range(80) , range(270),70);
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
    ctx.bezierCurveTo(-50, 500 , 50, 500, range(50), 450);
    ctx.bezierCurveTo(50, 500, 150, 500, range(150), 450);
    ctx.bezierCurveTo(150, 500, 250, 500, range(250), 450);
    ctx.bezierCurveTo(250, 500, 350, 500, range(350), 450);
    ctx.bezierCurveTo(350, 500, 450, 500, range(450), 450);
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
            ctx = drawStrichGroß(ctx, abstand);
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

function drawStrichGroß(ctx, entf) {

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

function range (number){

    rand = Math.floor(Math.random() * 20);

    return (number - rand);
}


















// End
