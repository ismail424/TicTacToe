const tile = document.querySelectorAll(".all_divs")


// Array med status på alla rutor // 
let status =["", "", "",
             "", "", "",
             "", "", ""];



// Funktion som kommer köras när en av knapparna blir nertryckta // 
function knapp_tryck(vilken_tile){
    var element = document.getElementById("tt" + vilken_tile);
    var index_format = vilken_tile - 1;
    
    //Kollar om knappen du tryckt på har redan ett "X"
    if (status[index_format] == "x"){
        //Om den har redan ett x så stopar den programmet direkt!
        return;
    }


    element.classList.add("circle");
    status[index_format] = "o";
    console.log(status);

    if(status.includes("") == true){
    robot_move(vilken_tile);
    }
    else{
        spel_slut();
    }  
}


// robot drag funktionen // 
function robot_move(nummer_redan_vald) {
    while (true){
        
    var random_number = Math.floor(Math.random() * 10); 
    if (random_number != 0){
    var index_format = random_number - 1
        if (status[index_format] == ""){
            status[index_format] = "x";
            var element = document.getElementById("tt" + random_number);
            console.log(random_number,element);
            element.classList.add("cross");
            break;
    }
    }   
    }
}

// Den här funktioen körs när spelet är slut // 
function spel_slut(){
    alert("spelet är slut");

    var spelet_slut =document.getElementById("section")
    spelet_slut.classList.add("game_over");
}



// Listen evenet som kör knapp_tryck funktionen när man trycker på en knapp // 
tile[0].addEventListener("click", function(){knapp_tryck(1)})
tile[1].addEventListener("click", function(){knapp_tryck(2)})
tile[2].addEventListener("click", function(){knapp_tryck(3)})
tile[3].addEventListener("click", function(){knapp_tryck(4)})
tile[4].addEventListener("click", function(){knapp_tryck(5)})
tile[5].addEventListener("click", function(){knapp_tryck(6)})
tile[6].addEventListener("click", function(){knapp_tryck(7)})
tile[7].addEventListener("click", function(){knapp_tryck(8)})
tile[8].addEventListener("click", function(){knapp_tryck(9)})

// status[0] = "Georgie";
// console.log(status);
    
// var element = document.getElementById("tt" + Math.floor(Math.random() * 10); );
//     element.classList.add("circle");

// var element = document.getElementById("tt1");
//    element.classList.add("circle");


// var element = document.getElementById("");
//    element.classList.add("cross");
