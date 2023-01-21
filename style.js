var result = document.getElementById('result')


function clr() {
    result.value = ""
}

function display(e) {
    result.value += e
}

function fun(a) {
    if (result.value.length < 1) {
        clr()
    } else {
        result.value += a
    }
}

function equals() {
    if (result.value.length < 1) {
        clr()
    } else {
        var q = eval(result.value);
        result.value = q
    }
}