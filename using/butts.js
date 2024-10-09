// func that the top right buttons use to turn themselves off, and the other buttons around them on when clicked

let buttonGrp = Array();
buttonGrp.push(document.getElementById('plus'));
buttonGrp.push(document.getElementById('minus'));
buttonGrp.push(document.getElementById('multiply'));
buttonGrp.push(document.getElementById('divide'));
function chosen(button){
    for (let i=0;i < buttonGrp.length; i++){
        if (document.getElementById(button) == buttonGrp[i]){
            buttonGrp[i].disabled = true;
            console.log("here")
        } else{
            buttonGrp[i].disabled = false;
        }
    }   
}


// Adds functionality to add/Remove buttons

let midFractLst = Array();
midFractLst.push(document.getElementById('midFraction1'));
midFractLst.push(document.getElementById('midFraction2'));
midFractLst.push(document.getElementById('midFraction3'));
midFractLst.push(document.getElementById('midFraction4'));
midFractLst.push(document.getElementById('midFraction5'));

let midMultSigns = Array();
midMultSigns.push(document.getElementById("midMult1"));
midMultSigns.push(document.getElementById("midMult2"));
midMultSigns.push(document.getElementById("midMult3"));
midMultSigns.push(document.getElementById("midMult4"));


function addFract(){
    for (let i=0;i<midMultSigns.length;i++){
        if (midMultSigns[i].style.visibility == "hidden"){
            midMultSigns[i].style.visibility = "visible";
            break;
        }
    }

    for (let i=0;i<midFractLst.length;i++){
        if (midFractLst[i].style.visibility == "hidden"){
            midFractLst[i].style.visibility = "visible";
            break;
        }
    }
}

function RemoveFract(){
    for (let i=midMultSigns.length - 1;i>-1;i--){
        if (midMultSigns[i].style.visibility == "visible"){
            midMultSigns[i].style.visibility = "hidden";
            break;
        }
    }

    for (let i=midFractLst.length - 1;i>0;i--){

        console.log(i);
        console.log(midFractLst[i]);
        console.log('seperate');
        if (midFractLst[i].style.visibility == "visible"){
            midFractLst[i].style.visibility = "hidden";
            break;
        }
    }
}