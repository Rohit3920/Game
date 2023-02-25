// document.write("Hello, I'm developer Rohit")

alert("First Play in X player")

var c = 1;

function clc(val) {
    if (c <= 9) {
        if (c % 2 == 0) {
            document.getElementById(val.id).innerHTML = "O";
            c++;
        } else {
            document.getElementById(val.id).innerHTML = "X";
            c++;
        }


        if (check()) {
            alert("winner!!!");
            clear();
        }
    } else {
        alert("match draw!!!");
        clear();
    }
}

function clear() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = " ";
        c = 1;
    }
}

// function checkout() {

// }
function getData(div){
    return document.getElementById(div).innerHTML;
}

function check() {
    if (getData('div1') != "" &&
    getData('div2') != "" &&
    getData('div3') != "" &&
    getData('div1') == getData('div2') &&
    getData('div3') == getData('div2')) {
        return true;
    }

    if (getData('div4') != "" &&
    getData('div5') != "" &&
    getData('div6') != "" &&
    getData('div4') == getData('div5') &&
    getData('div5') == getData('div6')) {
        return true;
    }


    if (getData('div7') != "" &&
    getData('div8') != "" &&
    getData('div9') != "" &&
    getData('div7') == getData('div8') &&
    getData('div8') == getData('div9')) {
        return true;
    }

    if (getData('div1') != "" &&
    getData('div4') != "" &&
    getData('div7') != "" &&
    getData('div1') == getData('div4') &&
    getData('div4') == getData('div7')) {
        return true;
    }

    if (getData('div2') != "" &&
    getData('div5') != "" &&
    getData('div8') != "" &&
    getData('div5') == getData('div2') &&
    getData('div8') == getData('div2')) {
        return true;
    }

    if (getData('div3') != "" &&
    getData('div6') != "" &&
    getData('div9') != "" &&
    getData('div3') == getData('div6') &&
    getData('div6') == getData('div9')) {
        return true;
    }

    if (getData('div1') != "" &&
    getData('div5') != "" &&
    getData('div9') != "" &&
    getData('div1') == getData('div5') &&
    getData('div5') == getData('div9')) {
        return true;
    }

    if (getData('div3') != "" &&
    getData('div5') != "" &&
    getData('div7') != "" &&
    getData('div3') == getData('div5') &&
    getData('div5') == getData('div7')) {
        return true;
    }

}
