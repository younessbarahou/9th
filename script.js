let value = 0;
let buttons = document.querySelectorAll("div.numbers button");
buttons.forEach(function(button, index) {
        button.onclick = function() {
        value = index + 1;
          console.log("You clicked button at index:", value);
        };
      });
document.getElementById('submit').onclick = () =>
{
    if (value != 0)
    {
        sessionStorage.setItem("value",value);
        window.open("submit.html" , "_self");
    }
    else
    {
        document.getElementById('empty').style.display= "block";
        console.error("You should click a value");
    }
}