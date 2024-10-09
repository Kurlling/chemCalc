
// When I'm back:  Add functionality to the Mid entry Boxes

//  Crazy IDEA: Make it so that if you put {i} in an entry box it automatically puts the ith item in the ansLst

// Makes the two entry boxes in the top right of the website funcs when "Enter" is clicked

import { simpleBoxes } from "./funcs.js";
import {nextBox} from "./funcs.js";

simpleBoxes[0].addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        nextBox(simpleBoxes[0],simpleBoxes);
    }
}
);
simpleBoxes[1].addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        nextBox(simpleBoxes[1],simpleBoxes);
    }
}
);

// Highlights everything in the first box at the top right when clicked
document.getElementById("num1").addEventListener("focus", function(){
    document.getElementById("num1").select();
})



import { numerators } from "./funcs.js";
import { denominators } from "./funcs.js";
import { numeratorNextBox } from "./funcs.js";
import { denominatorNextBox } from "./funcs.js";

for (let i=0; i<numerators.length;i++){
    numerators[i].addEventListener("keypress", function(event){
        if (event.key == "Enter"){
            numeratorNextBox(numerators[i]);
        }
    })

    numerators[i].addEventListener("focus", function(){
        numerators[i].select();
    })
}

for (let i=0; i<denominators.length;i++){
    denominators[i].addEventListener("keypress", function(event){
        if (event.key == "Enter"){
            denominatorNextBox(denominators[i]);
        }
    })

    denominators[i].addEventListener("focus", function(){
        denominators[i].select();
    })
}