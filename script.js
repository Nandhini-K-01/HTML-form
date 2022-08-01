function createlabel(tag,an,av,con){
    var label = document.createElement(tag);
    label.setAttribute(an,av);
    label.innerHTML = con;
    return label;
}

function createinput(tag,an1,av1,an2,av2){
    var input = document.createElement(tag);
    input.setAttribute(an1,av1);
    input.setAttribute(an2,av2);
    return input;
}

function linebreak(breaker){
    var b = document.createElement(breaker);
    return b;
}
var b1 = linebreak("br");
var b2 = linebreak("br");
var firstlabel = createlabel("label","for","first","First Name");
var firstinput = createinput("input","type","text","id","first");

document.body.append(firstlabel,b1,firstinput,b2);

var lastlabel = createlabel("label","for","last","Last Name");
var lastinput = createinput("input","type","text","id","last");
// var b1 = linebreak("br");
// var b2 = linebreak("br");
document.body.append(lastlabel,b1,lastinput,b2);

var emaillabel = createlabel("label","for","email","Email");
var emailinput = createinput("input","type","text","id","email");
var b1 = linebreak("br");
var b2 = linebreak("br");
document.body.append(emaillabel,b1,emailinput,b2);

var phonelabel = createlabel("label","for","phone","Phone Number");
var phoneinput = createinput("input","type","text","id","phone");
var b1 = linebreak("br");
var b2 = linebreak("br");
document.body.append(phonelabel,b1,phoneinput,b2);

var button = createlabel("button","type","button","Submit");
document.body.append(button);