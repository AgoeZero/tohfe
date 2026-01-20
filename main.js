const snake = document.querySelector(".snake");
const ghost = document.querySelector(".ghost");
const msg = document.querySelector(".main p");
const pages = document.querySelectorAll("section");
const seats = document.querySelectorAll(".seats div");
const fields = pages[4].querySelectorAll("p");
const error = document.querySelector(".error");
var seat = 0;

for (var i=0; i < seats.length; ++i){
    seats[i].addEventListener("touchend",function(e){
        if (this.classList.contains("lime")){
            this.classList.remove("lime");
        } else {
            for (let j=0; j < seats.length; ++j){
                if (seats[j] == this){
                    this.classList.add("lime");
                    seat = this.innerText;
                } else {
                    seats[j].classList.remove("lime");
                }
            }
        }
    })
}


document.querySelector(".booking").addEventListener("input",function(e){
    this.value = this.value.toLowerCase();
    this.value = this.value.match(/[a-h0-9]{0,8}/);
    if (this.value.length == 8){
        ghost.classList.add("hide");
        msg.innerText = "Checking for code...";
        snake.classList.remove("hide");
        if (this.value == "deadbeef"){
            //postAjax(jx,"quicksand.ttf","",showPage(2));
            this.value="";
            setTimeout(function(){snake.classList.add("hide");msg.innerText="";this.value="";showPage(2)},1000,1);
        } else {
            snake.classList.add("hide");
            ghost.classList.remove("hide");
            msg.innerText = "Oops! This code was not found.";
        }
    }
})

function showPage(n){
    for (let i=0; i < pages.length; ++i){
        if (n == i){
            pages[i].classList.remove("hide");
        } else {
            pages[i].classList.add("hide");
        }
    }
}

document.querySelector(".your-details button").addEventListener("click",function(){
    var inputs = document.querySelectorAll(".your-details input[type=text]");
    if (inputs[0].value.match(/^[A-Za-z]+\s[A-Za-z\s]+$/)){
        fields[0].innerText = inputs[0].value;
    } else {
        error.innerText = "Please enter your full name."
        inputs[0].focus();
        return;
    }
    if (inputs[1].value.match(/^0[235][0-9]{8,8}$/)){
        fields[1].innerText = inputs[1].value;
    } else {
        error.innerText = "Please enter a valid phone number";
        inputs[1].focus();
        return;
    }
    fields[2].innerHTML = "<b>#"+seat+"</b>";
    showPage(4);
})

var jx = newAjax();