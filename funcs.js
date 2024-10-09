// List of fractions in mid row
let midFractLst = Array();
midFractLst.push(document.getElementById('midFraction1'));
midFractLst.push(document.getElementById('midFraction2'));
midFractLst.push(document.getElementById('midFraction3'));
midFractLst.push(document.getElementById('midFraction4'));
midFractLst.push(document.getElementById('midFraction5'));


// List of numerators/denominators in the midesection
let numerators = Array();
numerators.push(document.getElementById("numerator1"));
numerators.push(document.getElementById("numerator2"));
numerators.push(document.getElementById("numerator3"));
numerators.push(document.getElementById("numerator4"));
numerators.push(document.getElementById("numerator5"));
export {numerators};

let denominators = Array();
denominators.push(document.getElementById("denominator1"));denominators.push(document.getElementById("denominator2"));
denominators.push(document.getElementById("denominator3"));
denominators.push(document.getElementById("denominator4"));
denominators.push(document.getElementById("denominator5"));
export {denominators}

// Makes list of the two entry boxes in the top right of the website
let simpleBoxes = Array();
simpleBoxes.push(document.getElementById("num1"));
simpleBoxes.push(document.getElementById("num2"));
export {simpleBoxes};

// List of buttons in the top right of website
let buttonGrp = Array();
buttonGrp.push(document.getElementById('plus'));
buttonGrp.push(document.getElementById('minus'));
buttonGrp.push(document.getElementById('multiply'));
buttonGrp.push(document.getElementById('divide'));
export {buttonGrp};

// lstAns entry inputs
let simpleAns = document.getElementById("answer1");

// Ans boxes
let simpleAnsLst = document.getElementById("shortAns");

// var that keeps the answers in answer list in order
let onAns = 0;
// List that keeps the shortAnsLst in check
let cap = Array();

// Gets data from amu.txt and turns it into two neat arrays asynchrously
// P.S. async & await just make the actions in the function go chronologically, but it does not make the function itself go chronologicall in the entire program
async function get_list() {
    let response = await fetch('amu.txt')
    .then(result => {
        return result.text();
    })

    // Makes two arrays, one with the element symbols, and the other with the element amu's
    response = response.split('\n')
    let elementList = Array();
    let amuList = Array();
    for (let i = 0; i<response.length;i++){
        elementList.push(response[i].split(' ')[0]);
        amuList.push(response[i].split(' ')[1]);
    }
    return {elementList,amuList};

}

// Func that does the math
export async function simpleCompute(){
    let eleLst = await get_list().then(result => {
        return result['elementList'];
    })
    let massLst = await get_list().then(result => {
        return result['amuList'];
    })
    let numLst = Array();

    for (let i=0; i <simpleBoxes.length; i++){
        if (!isNaN(parseFloat(simpleBoxes[i].value))){
            // console.log("normal number");
            // console.log("normal box");
            numLst.push(parseFloat(simpleBoxes[i].value));
            continue;
        }
            console.log('here');
            for (let j=0; j<eleLst.length; j++){
                if (simpleBoxes[i].value.toLowerCase().indexOf(eleLst[j].toLowerCase())  != -1){
                    numLst.push(parseFloat(massLst[j]));
                    break;
                }
            }
        }


    // console.log(numLst);
    let result;
    for (let i=0; i < buttonGrp.length;i++){
        if (buttonGrp[i].disabled == true){
            switch (buttonGrp[i]){
                case buttonGrp[0]:
                result = numLst[0] + numLst[1];
                    break;

                case buttonGrp[1]:
                    result = numLst[0] - numLst[1];
                    break;
                    
                case buttonGrp[2]:
                    result = numLst[0] * numLst[1];
                    break;
                    
                case buttonGrp[3]:
                    result = numLst[0] / numLst[1];
                    break;

            }
        }
    }


    // When I'm back:  make the result appear on screen and in the past response box
    //                  find a way to make the calc detect sceintific notation
    // console.log(result);
    if (result.toString().length > 6){
        result = result.toExponential(6);
    }
    simpleAns.innerHTML = result.toString();

    if (cap.length == 5){
        cap.splice(0,1);
    }
    onAns ++;
    cap.push([onAns,result.toString()]);
    simpleAnsLst.innerHTML = ""
    for (let i=0;i<cap.length;i++){
        let presentVal = simpleAnsLst.innerHTML;
        simpleAnsLst.innerHTML = presentVal +"<br>"+cap[i][0].toString()+"    "+cap[i][1];
    // console.log(simpleAnsLst.innerHTML);
    }

}


// Makes one entry box go to another and makes the last one begin the computing part
export function nextBox(ele,lst){
    if (ele != lst.at(-1)){
        console.log(ele, lst.at(-1));
        lst[lst.indexOf(ele)+1].focus();
        lst[lst.indexOf(ele)+1].select()
    }
    else{
        simpleCompute();
    }
}


let currentAns = 0;
let listOfAns = Array();

let finalAns = document.getElementById("finalAns");
let finalAnsList = document.getElementById("ansList"); 

async function fractCompute(){
    let eleLst = await get_list().then(result => {
        return result['elementList'];
    })
    let massLst = await get_list().then(result => {
        return result['amuList'];
    })
    let topNumLst = Array();

    for (let i=0; i <numerators.length; i++){
        if (midFractLst[i].style.visibility == "hidden"){
            break
        }
        if (!isNaN(parseFloat(numerators[i].value))){
            console.log("normal number");
            console.log("normal box");
            topNumLst.push(parseFloat(numerators[i].value));
            continue;
        }
            console.log('here');
            for (let j=0; j<eleLst.length; j++){
                if (numerators[i].value.toLowerCase().indexOf(eleLst[j].toLowerCase())  != -1){
                    topNumLst.push(parseFloat(massLst[j]));
                    break;
                }
            }
        }

    let bottomNumLst = Array();

    for (let i=0; i <denominators.length; i++){
        if (midFractLst[i].style.visibility == "hidden"){
            break
        }
        if (!isNaN(parseFloat(denominators[i].value))){
            console.log("normal number");
            console.log("normal box");
            bottomNumLst.push(parseFloat(denominators[i].value));
            continue;
        }
            console.log('here');
            for (let j=0; j<eleLst.length; j++){
                if (denominators[i].value.toLowerCase().indexOf(eleLst[j].toLowerCase())  != -1){
                    bottomNumLst.push(parseFloat(massLst[j]));
                    break;
                }
            }
        }

    let topNum = 1;
    let bottomNum = 1;
    for (let i=0;i < topNumLst.length;i++){
        topNum = topNum * topNumLst[i];
        bottomNum = bottomNum * bottomNumLst[i];
    }

    console.log(topNum, bottomNum);
    let result = topNum / bottomNum;

    if (result.toString().length > 6){
        result = result.toExponential(6);
    }
    finalAns.innerHTML = result.toString();

    if (listOfAns.length == 10){
        listOfAns.splice(0,1);
    }
    currentAns ++;
    listOfAns.push([currentAns,result.toString()]);
    finalAnsList.innerHTML = ""
    for (let i=0;i<listOfAns.length;i++){
        let presentVal = finalAnsList.innerHTML;
        finalAnsList.innerHTML = presentVal +"<br>"+listOfAns[i][0].toString()+"    "+listOfAns[i][1];
    // console.log(simpleAnsLst.innerHTML);
    }

}




export function numeratorNextBox(ele){

    denominators[numerators.indexOf(ele)].focus();
    denominators[numerators.indexOf(ele)].select()
}

export function denominatorNextBox(ele){
    
    if (ele != denominators.at(-1)){
        if (midFractLst[denominators.indexOf(ele)+1].style.visibility != "hidden" ){
            numerators[denominators.indexOf(ele)+1].focus();
            numerators[denominators.indexOf(ele)+1].select();
        }else{
            console.log('computing');
            fractCompute();
        }

    }
    else{
        console.log('computing')
        fractCompute();
    }
}
