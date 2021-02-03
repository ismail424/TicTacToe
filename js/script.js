const tile = document.querySelectorAll(".all_divs")
var robot_score = 0;
var du_score = 0;

// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// Array med status på alla rutor // 
let status =["", "", "",
             "", "", "",
             "", "", ""];



// Funktion som kommer köras när en av knapparna blir nertryckta // 
function knapp_tryck(vilken_tile){
    var element = document.getElementById("tt" + vilken_tile);
    var index_format = vilken_tile - 1;

    //Break om någon har vunnit
    if(vinst_kontroll()){
        return;
    }

    //Kollar om knappen du tryckt på har redan ett "X"
    if (status[index_format] == "x"){
        //Om den har redan ett x så stopar den programmet direkt!
        return;
    }


    element.classList.add("circle");
    status[index_format] = "o";
    console.log(status);

    //Kollar om vi har vunnit
    if(vinst_kontroll()){
        vunnit();
        return;
    }

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
            element.classList.add("cross");
            //Kollar om roboten har vunnit
            if(vinst_kontroll()){
                robot_vunnit();
                return;
            }

            break;
    }
    }   
    }
}

// Den här funktioen körs när spelet är slut // 
function spel_slut(){
    var spelet_slut =document.getElementById("section")
    spelet_slut.innerHTML = "Spelet är slut";
    document.getElementById("spela_igen").classList.add("spela_igen");
    document.getElementById("spela_igen").innerHTML = "Spela igen?";


}

// Den här funktioen körs när man har vunnnit // 
function vunnit(){
    var vunnit_spel =document.getElementById("section")
    vunnit_spel.innerHTML = "Du har vunnit";
    du_score += 1;
    document.getElementById("du_score").innerHTML = du_score;
    document.getElementById("spela_igen").classList.add("spela_igen");
    document.getElementById("spela_igen").innerHTML = "Spela igen?";
}

// Den här funktioen körs när roboten  har vunnnit // 
function robot_vunnit(){
    var vunnit_spel =document.getElementById("section")
    vunnit_spel.innerHTML = "Roboten har vunnit";
    robot_score += 1;
    document.getElementById("robot_score").innerHTML = robot_score;
    document.getElementById("spela_igen").classList.add("spela_igen");
    document.getElementById("spela_igen").innerHTML = "Spela igen?";

}

// Den här funktioen kollar om man har vunnit// 
function vinst_kontroll(){

    // Kontrollerar om man har vunnit genom top_left
    if(status[0] != ""){var top_left = status[0];}
    else{top_left == "random_ovikit_sak1"}

    if(status[1] != ""){var top_middle = status[1];}
    else{top_middle == "random_ovikit_sak12"}

    if(status[2] != ""){var top_right = status[2];}
    else{top_right == "random_ovikit_sak13"}

    if(status[3] != ""){var middle_left = status[3];}
    else{middle_left == "random_ovikit_sak145"}

    if(status[6] != ""){var bottom_left = status[6];}
    else{bottom_left== "random_ovikit_sak16"}
    

    // Kontrollerar om man har vunnit horisontellt
    if (status[1] == top_left && status[2] == top_left){return true;}
    if (status[4] == middle_left && status[5] == middle_left){return true;}
    if (status[7] == bottom_left && status[8] == bottom_left){return true;}

    //Kontrollerar om man har vunnit vertikallt
    if (status[3] == top_left && status[6] == top_left){return true; }

    if (status[4] == top_middle && status[7] == top_middle){return true;}
    if (status[5] == top_right && status[8] == top_right){return true;}
    

    //Kontrollerar om man har vunnit diagonalt
    if (status[4] == top_right && status[6] == top_right){;return true;}
    if (status[4] == top_left && status[8] == top_left){;return true;}

    //Om man inte har vuunnit så fortsätter spelet

    return false;
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


function spela_igen(){
    for(var i=1;i< 10;i+=1){
        var element = document.getElementById("tt" + i);
        console.log(element);
        element.classList.remove("circle"); 
        element.classList.remove("cross");
    }
    status =["", "", "","", "", "","", "", ""];
    document.getElementById("spela_igen").classList.remove("spela_igen");
    document.getElementById("spela_igen").innerHTML = "";
    document.getElementById("section").innerHTML = "";
    

}

//Listen när man trycker spela igen
document.getElementById("spela_igen").addEventListener("click", spela_igen)
