
// Begin

window.addEventListener("load", function(){

    let main, maxHeight, range, innerDiv, count, colorArray, colorDivs, textDivs, currentCol,
        nilCol, button1, button2, button3, button4, min = 50, max = 100, margin = 100;

    colorArray = [
        "rgb(0, 0, 0)",
        "rgb(255, 255, 255)",
        "rgb(160, 4, 4)",
        "rgb(98, 65, 244)",
        "rgb(232, 66, 244)",
        "rgb(27, 2, 137)",
        "rgb(221, 138, 22)",
        "rgb(232, 222, 44)",
        "rgb(191, 232, 44)",
        "rgb(120, 153, 6)",
        "rgb(17, 214, 26)",
        "rgb(17, 214, 161)",
        "rgb(187, 17, 214)",
        "rgb(239, 26, 197)",
        "rgb(144, 0, 255)"
    ];

    setMainDiv();
    setDivs();
    addButtons();
    setInnerDivs(min, max, margin);
    nilCol = setColorDivs();

    range = document.getElementById("range");
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
    button3 = document.getElementById("button3");
    button4 = document.getElementById("button4");
    innerDiv = document.getElementsByName("innerDiv");

    for (let k = 0; k < innerDiv.length; k++) {

        innerDiv[k].addEventListener("click", function () {

            currentCol = this.style.backgroundColor;

            for (let i = 0; i < innerDiv.length; i++) {

                if (innerDiv[i].style.backgroundColor === currentCol) {
                    innerDiv[i].style.backgroundColor = nilCol; //Immer die Farbe, die NULL ist
                }
            } // DIV-loop

            colorDivs = document.getElementsByName("colorDiv");
            textDivs = document.getElementsByName("textDiv");

            removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

            for (let f = 0; f < colorArray.length; f++) {
                count = 0;

                for (let j = 0; j < innerDiv.length; j++) {

                    if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                        count += 1;
                    }
                } // Color-loop after click

                if (count > 0) {
                    addcolorDivs(colorArray[f], count);
                }

            } // Color-loop 2

            addcolorDivs(currentCol, 0);

            nilCol = currentCol;

        }); // changeColor

    } // set func loop


    range.addEventListener("change", function () {

        for (let i = 0; i < innerDiv.length; i++){
            innerDiv[i].style.backgroundColor = randColor(range.value);
        } // New Color Generator

        colorDivs = document.getElementsByName("colorDiv");
        textDivs = document.getElementsByName("textDiv");

        removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

        for (let f = 0; f < colorArray.length; f++) {
            count = 0;

            for (let j = 0; j < innerDiv.length; j++) {

                if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                    count += 1;
                }
            } // Color-loop after click

            if (count > 0) {
                addcolorDivs(colorArray[f], count);
            }

        } // Color-loop 3

        nilCol = colorArray[parseInt(range.value) + 1];

        addcolorDivs(nilCol, 0);

    }); //range-func


    button1.addEventListener("click", function () {

        removeInnerDivs();

        setInnerDivs(min + 10, max + 10, margin + 10);

        colorDivs = document.getElementsByName("colorDiv");
        textDivs = document.getElementsByName("textDiv");

        removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

        nilCol = setColorDivs();

        for (let k = 0; k < innerDiv.length; k++) {

            innerDiv[k].addEventListener("click", function () {

                currentCol = this.style.backgroundColor;

                for (let i = 0; i < innerDiv.length; i++) {

                    if (innerDiv[i].style.backgroundColor === currentCol) {
                        innerDiv[i].style.backgroundColor = nilCol; //Immer die Farbe, die NULL ist
                    }
                } // DIV-loop

                colorDivs = document.getElementsByName("colorDiv");
                textDivs = document.getElementsByName("textDiv");

                removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

                for (let f = 0; f < colorArray.length; f++) {
                    count = 0;

                    for (let j = 0; j < innerDiv.length; j++) {

                        if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                            count += 1;
                        }
                    } // Color-loop after click

                    if (count > 0) {
                        addcolorDivs(colorArray[f], count);
                    }

                } // Color-loop 2

                addcolorDivs(currentCol, 0);

                nilCol = currentCol;

            }); // changeColor

        } // set func loop

        min += 10; // Ändern
        max += 10;
        margin += 10;

    }); //Button + 10 Pixel


    button2.addEventListener("click", function () {

        removeInnerDivs();

        setInnerDivs(min, max, margin);

        colorDivs = document.getElementsByName("colorDiv");
        textDivs = document.getElementsByName("textDiv");

        removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

        nilCol = setColorDivs();

        for (let k = 0; k < innerDiv.length; k++) {

            innerDiv[k].addEventListener("click", function () {

                currentCol = this.style.backgroundColor;

                for (let i = 0; i < innerDiv.length; i++) {

                    if (innerDiv[i].style.backgroundColor === currentCol) {
                        innerDiv[i].style.backgroundColor = nilCol; //Immer die Farbe, die NULL ist
                    }
                } // DIV-loop

                colorDivs = document.getElementsByName("colorDiv");
                textDivs = document.getElementsByName("textDiv");

                removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

                for (let f = 0; f < colorArray.length; f++) {
                    count = 0;

                    for (let j = 0; j < innerDiv.length; j++) {

                        if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                            count += 1;
                        }
                    } // Color-loop after click

                    if (count > 0) {
                        addcolorDivs(colorArray[f], count);
                    }

                } // Color-loop 2

                addcolorDivs(currentCol, 0);

                nilCol = currentCol;

            }); // changeColor

        } // set func loop


        if (min > 10){min -= 10;} else {min = 1;}
        if (max > 10){max -= 10;} else {max = 5;}
        margin = max;

    }); // Button - 10 Pixel


    button3.addEventListener("click", function () {

        main = document.getElementById("mainDiv");
        maxHeight = main.style.height;
        maxHeight = maxHeight.replace("px", "");
        maxHeight = parseInt(maxHeight);

        removeInnerDivs();

        main.style.width = maxHeight + 50 + "px";
        main.style.height = maxHeight + 50 + "px";

        setInnerDivs(min, max, margin);

        colorDivs = document.getElementsByName("colorDiv");
        textDivs = document.getElementsByName("textDiv");

        removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

        nilCol = setColorDivs();

        for (let k = 0; k < innerDiv.length; k++) {

            innerDiv[k].addEventListener("click", function () {

                currentCol = this.style.backgroundColor;

                for (let i = 0; i < innerDiv.length; i++) {

                    if (innerDiv[i].style.backgroundColor === currentCol) {
                        innerDiv[i].style.backgroundColor = nilCol; //Immer die Farbe, die NULL ist
                    }
                } // DIV-loop

                colorDivs = document.getElementsByName("colorDiv");
                textDivs = document.getElementsByName("textDiv");

                removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

                for (let f = 0; f < colorArray.length; f++) {
                    count = 0;

                    for (let j = 0; j < innerDiv.length; j++) {

                        if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                            count += 1;
                        }
                    } // Color-loop after click

                    if (count > 0) {
                        addcolorDivs(colorArray[f], count);
                    }

                } // Color-loop 2

                addcolorDivs(currentCol, 0);

                nilCol = currentCol;

            }); // changeColor

        } // set func loop


    }); // Button + 50 Kante


    button4.addEventListener("click", function () {

        main = document.getElementById("mainDiv");
        maxHeight = main.style.height;
        maxHeight = maxHeight.replace("px", "");
        maxHeight = parseInt(maxHeight);

        removeInnerDivs();

        main.style.width = maxHeight - 50 + "px";
        main.style.height = maxHeight - 50 + "px";

        setInnerDivs(min, max, margin);

        colorDivs = document.getElementsByName("colorDiv");
        textDivs = document.getElementsByName("textDiv");

        removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

        nilCol = setColorDivs();

        for (let k = 0; k < innerDiv.length; k++) {

            innerDiv[k].addEventListener("click", function () {

                currentCol = this.style.backgroundColor;

                for (let i = 0; i < innerDiv.length; i++) {

                    if (innerDiv[i].style.backgroundColor === currentCol) {
                        innerDiv[i].style.backgroundColor = nilCol; //Immer die Farbe, die NULL ist
                    }
                } // DIV-loop

                colorDivs = document.getElementsByName("colorDiv");
                textDivs = document.getElementsByName("textDiv");

                removeColChilds( parseInt(colorDivs.length) + parseInt(textDivs.length) );

                for (let f = 0; f < colorArray.length; f++) {
                    count = 0;

                    for (let j = 0; j < innerDiv.length; j++) {

                        if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                            count += 1;
                        }
                    } // Color-loop after click

                    if (count > 0) {
                        addcolorDivs(colorArray[f], count);
                    }

                } // Color-loop 2

                addcolorDivs(currentCol, 0);

                nilCol = currentCol;

            }); // changeColor

        } // set func loop

    }); // Button - 50 Kante


}); // Events nach dem load

function setMainDiv(){
    let div = document.createElement("DIV");
    div.setAttribute("id", "mainDiv");
    div.style.height = "600px";
    div.style.width = "600px";
    div.style.margin = "auto";
    div.style.backgroundColor = "#949aa3";
    document.body.appendChild(div);
}

function addInnerDiv(numb, topBot, color){
    let main, elem;

    main = document.getElementById("mainDiv");
    elem = document.createElement("DIV");
    elem.setAttribute("name", "innerDiv");

    elem.style.height = numb + "px";
    elem.style.width = numb + "px";
    elem.style.marginTop = topBot + "px";
    elem.style.marginBottom = topBot + "px";
    elem.style.cssFloat = "left";
    elem.style.backgroundColor = color;
    elem.style.borderRadius = "100px";

    main.appendChild(elem);
}

function setInnerDivs(min, max, margin) {

    let main, maxWidth, maxHeight, number, abstand = 0,
        range, color;

    main = document.getElementById("mainDiv");
    range = document.getElementById("range");

    maxHeight = main.style.height;
    maxHeight = maxHeight.replace("px", "");
    maxHeight = parseInt(maxHeight);

    maxWidth= main.style.width;
    maxWidth = maxWidth.replace("px", "");
    maxWidth = parseInt(maxWidth);

    while (maxHeight > 0) {

        if (maxHeight >= margin) {
            while (maxWidth > 0) {

                number = numberGen(min, max);
                color = randColor(parseInt(range.value));

                if (number <= maxWidth) {
                    addInnerDiv(number, ((margin - number) - abstand) / 2, color);
                    maxWidth = maxWidth - number;
                } else {
                    addInnerDiv(maxWidth, ((margin - maxWidth) - abstand) / 2, color);
                    maxWidth -= maxWidth;
                }

            } // while Horizontal 1
        } else {
            while (maxWidth > 0) {

                number = numberGen(maxHeight / 2, maxHeight);
                color = randColor(parseInt(range.value));

                if (number <= maxWidth) {
                    addInnerDiv(number, ((maxHeight - number) - abstand) / 2, color);
                    maxWidth = maxWidth - number;
                } else {
                    addInnerDiv(maxWidth, ((maxHeight - maxWidth) - abstand) / 2, color);
                    maxWidth -= maxWidth;
                }

            } // while Horizontal 2
        }

        maxWidth= main.style.width;
        maxWidth = maxWidth.replace("px", "");
        maxWidth = parseInt(maxWidth);

        maxHeight -= margin;
    }// while Vertikal

}

function numberGen(min, max) {
    let random;

    random = Math.round(Math.random() * (max - min)) + min;
    return random;
}

function randColor(max) {
    let min = 0, rand;
    let colorArray = [
        "#000000",
        "#ffffff",
        "#a00404",
        "#6241f4",
        "#e842f4",
        "#1b0289",
        "#dd8a16",
        "#e8de2c",
        "#bfe82c",
        "#789906",
        "#11d61a",
        "#11d6a1",
        "#bb11d6",
        "#ef1ac5",
        "#9000ff"
    ]; // 15 verschiedene Farben

    rand = Math.round(Math.random() * (max - min)) + min;

    return colorArray[rand];
}

function setDivs() {

    let butDiv, rangeDiv, colDiv;
    butDiv = document.createElement("DIV");
    rangeDiv = document.createElement("DIV");
    colDiv = document.createElement("DIV");

    butDiv.setAttribute("id", "butDiv");
    butDiv.style.textAlign = "center";

    rangeDiv.setAttribute("id", "rangeDiv");
    rangeDiv.style.textAlign = "center";

    colDiv.setAttribute("id", "colDiv");
    colDiv.style.display = "flex";
    colDiv.style.alignItems = "center";
    colDiv.style.justifyContent = "center";

    document.body.appendChild(butDiv);
    document.body.appendChild(rangeDiv);
    document.body.appendChild(colDiv);

}

function addButtons() {

    let button1, button2, button3, button4, butDiv, range, rangeDiv, textElement;

    butDiv = document.getElementById("butDiv");
    rangeDiv = document.getElementById("rangeDiv");

    button1 = document.createElement("BUTTON");
    button1.innerText = "\u00F8 + 10 Pixel";
    button1.setAttribute("id", "button1");

    button2 = document.createElement("BUTTON");
    button2.innerText = "\u00F8 - 10 Pixel";
    button2.setAttribute("id", "button2");

    button3 = document.createElement("BUTTON");
    button3.innerText = "Kante + 50 Pixel";
    button3.setAttribute("id", "button3");

    button4 = document.createElement("BUTTON");
    button4.innerText = "Kante - 50 Pixel";
    button4.setAttribute("id", "button4");

    textElement = document.createElement("SPAN");
    textElement.innerText = "Anzahl Farben \xa0 \xa0";

    range = document.createElement("INPUT");
    range.setAttribute("id", "range");
    range.setAttribute("type", "range");
    range.setAttribute("min" , "2");
    range.setAttribute("max" , "13");
    range.setAttribute("value" , "2");

    butDiv.appendChild(button1);
    butDiv.appendChild(button2);
    butDiv.appendChild(button3);
    butDiv.appendChild(button4);
    rangeDiv.appendChild(textElement);
    rangeDiv.appendChild(range);
}

function addcolorDivs(color, anzahl) {

    let colDiv, mainColDiv, colText;
    colDiv = document.createElement("DIV");
    colText = document.createElement("SPAN");
    mainColDiv = document.getElementById("colDiv");


    colDiv.style.width = "15px";
    colDiv.style.height = "10px";
    colDiv.style.backgroundColor = color;
    colDiv.style.border = "1px solid black";
    colDiv.style.cssFloat = "left";
    colDiv.style.marginRight = "5px";
    colDiv.style.marginLeft = "5px";
    colDiv.setAttribute("name", "colorDiv");

    colText.innerText =": " + anzahl;
    colText.style.cssFloat = "left";
    colText.setAttribute("name", "textDiv");

    mainColDiv.appendChild(colDiv);
    mainColDiv.appendChild(colText);

}

function removeColChilds(count) {

    let colorDiv, child;

    colorDiv = document.getElementById("colDiv");

    for (let i = 0; i < count; i++){
        child = colorDiv.firstChild;
        colorDiv.removeChild(child);
    }

}

function removeInnerDivs() {
    let mainDiv, child;

    mainDiv = document.getElementById("mainDiv");

    while(mainDiv.firstChild){
        child = mainDiv.firstChild;
        mainDiv.removeChild(child);
    }

}

function setColorDivs() {

    let range, innerDiv, count, colorArray, nilCol;

    innerDiv = document.getElementsByName("innerDiv");
    range = document.getElementById("range");

    colorArray = [
        "rgb(0, 0, 0)",
        "rgb(255, 255, 255)",
        "rgb(160, 4, 4)",
        "rgb(98, 65, 244)",
        "rgb(232, 66, 244)",
        "rgb(27, 2, 137)",
        "rgb(221, 138, 22)",
        "rgb(232, 222, 44)",
        "rgb(191, 232, 44)",
        "rgb(120, 153, 6)",
        "rgb(17, 214, 26)",
        "rgb(17, 214, 161)",
        "rgb(187, 17, 214)",
        "rgb(239, 26, 197)",
        "rgb(144, 0, 255)"
    ];

    for (let f = 0; f < colorArray.length; f++) {
        count = 0;

        for (let j = 0; j < innerDiv.length; j++) {

            if (innerDiv[j].style.backgroundColor === colorArray[f]) {
                count += 1;
            }
        } // DIV-loop

        if (count > 0) {
            addcolorDivs(colorArray[f], count);
        }

    } // Color-loop

    nilCol = colorArray[parseInt(range.value) + 1];

    addcolorDivs(nilCol, 0);

    return nilCol;

}















//End