function outstanding(){
    let i = document.getElementById("txt1").value;
    let j = document.getElementById("txt2").value;
    let k , l , m ;
    if (i > 0 && j > 0) {
        k = i / j * .1 ;
        l = i / j + k ;
        m = l * j ;
    }
    else{
        alert("Enter Valid Amount");
    }
    document.getElementById("tip").innerHTML = Math.round(k);
    document.getElementById("total").innerHTML = Math.round(l);
    document.getElementById("amount").innerHTML = Math.round(m);
}
function good(){
    let i = document.getElementById("txt1").value;
    let j = document.getElementById("txt2").value;
    let k , l , m ;
    if (i > 0 && j > 0) {
        k = i / j * .08 ;
        l = i / j + k ;
        m = l * j ;
    }
    else{
        alert("Enter Valid Amount");
    }
    document.getElementById("tip").innerHTML = Math.round(k);
    document.getElementById("total").innerHTML = Math.round(l);
    document.getElementById("amount").innerHTML = Math.round(m);
}
function itsOk(){
    let i = document.getElementById("txt1").value;
    let j = document.getElementById("txt2").value;
    let k , l , m ;
    if (i > 0 && j > 0) {
        k = i / j * .06 ;
        l = i / j + k ;
        m = l * j ;
    }
    else{
        alert("Enter Valid Amount");
    }
    document.getElementById("tip").innerHTML = Math.round(k);
    document.getElementById("total").innerHTML = Math.round(l);
    document.getElementById("amount").innerHTML = Math.round(m);
}
function notbad(){
    let i = document.getElementById("txt1").value;
    let j = document.getElementById("txt2").value;
    let k , l , m ;
    if (i > 0 && j > 0) {
        k = i / j * .04 ;
        l = i / j + k ;
        m = l * j ;
    }
    else{
        alert("Enter Valid Amount");
    }
    document.getElementById("tip").innerHTML = Math.round(k);
    document.getElementById("total").innerHTML = Math.round(l);
    document.getElementById("amount").innerHTML = Math.round(m);
}
function terrible(){
    let i = document.getElementById("txt1").value;
    let j = document.getElementById("txt2").value;
    let k , l , m ;
    if (i > 0 && j > 0) {
        k = i / j * .02 ;
        l = i / j + k ;
        m = l * j ;
    }
    else{
        alert("Enter Valid Amount");
    }
    document.getElementById("tip").innerHTML = Math.round(k);
    document.getElementById("total").innerHTML = Math.round(l);
    document.getElementById("amount").innerHTML = Math.round(m);
}
function self(){
    let i = document.getElementById("txt1").value;
    let j = document.getElementById("txt2").value;
    let k , l , m ;
    if (i > 0 && j > 0) {
        k = 0 ;
        l = i / j ;
        m = l * j ;
    }
    else{
        alert("Enter Valid Amount");
    }
    document.getElementById("tip").innerHTML = Math.round(k);
    document.getElementById("total").innerHTML = Math.round(l);
    document.getElementById("amount").innerHTML = Math.round(m);
}