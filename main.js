const snake = document.querySelector(".snake");
const ghost = document.querySelector(".ghost");
const msg = document.querySelector(".main p");
const pages = document.querySelectorAll("section");
const seats = document.querySelectorAll(".seats div");

for (var i=0; i < seats.length; ++i){
    seats[i].addEventListener("touchend",function(e){
        if (this.classList.contains("lime")){
            this.classList.remove("lime");
        } else {
            for (let j=0; j < seats.length; ++j){
                if (seats[j] == this){
                    this.classList.add("lime");
                } else {
                    seats[j].classList.remove("lime");
                }
            }
        }
    })
}


document.querySelector(".booking").addEventListener("input",function(e){
    this.value = this.value.match(/[a-h0-9]{0,8}/);
    if (this.value.length == 8){
        ghost.classList.add("hide");
        msg.innerText = "Checking for code...";
        snake.classList.remove("hide");
        if (this.value == "deadbeef"){
            //postAjax(jx,"quicksand.ttf","",showPage(2));
            setTimeout(function(){showPage(2)},1000,1);
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

var jx = newAjax();