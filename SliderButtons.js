var mainButtonSelector = true;

function rotateButton(){
    console.log(mainButtonSelector)
    if(mainButtonSelector == true){
        console.log("im in true");
        document.getElementById("halfCircle").style.transform = "rotate(180deg)";
        document.getElementById("halfCircle").style.transition = "all 1s ease-in-out";
        mainButtonSelector = false;
    }
    else if(mainButtonSelector == false){
        console.log("im in false");
        document.getElementById("halfCircle").style.transform = "rotate(0deg)";
        document.getElementById("halfCircle").style.transition = "all 1s ease-in-out";
        mainButtonSelector = true;
    }
    
    console.log(mainButtonSelector)


}