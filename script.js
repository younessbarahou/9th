var value;
var statuss ;
var allstatus;
var a = document.getElementById('uno');
var b = document.getElementById('dos');
var c = document.getElementById('tres');
var d = document.getElementById('quatro');
var e = document.getElementById('cinco');
function activate1() {
     console.log("You clicked : 1");
     value = 1;
     return  statuss=true;
}
function activate2() {
     console.log("You Clicked : 2");
     value = 2;
    return statuss =true;
}
function activate3() {
     console.log("You Clicked : 3");
     value = 3;
    return statuss =true;
}
function activate4() {
     console.log("You Clicked : 4");
     value = 4;
    return statuss =true;
}
function activate5() {
    console.log("You Clicked : 5");
    value = 5;
    return statuss =true;
}
function submit(){
    sessionStorage.setItem("value",value);
    if (statuss===true){
        allstatus === true;
        window.open("submit.html","_self");
    }
    else{
        document.getElementById('empty').style.display= "block";
        console.error("You should click a value");
    }
}
