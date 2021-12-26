const cars = ["1.2", "1.3", "1.4", "1.5", "1.6", "1.7"];
let text = "";
for(let i =0; i< cars.length; i++){
    text +='<img src="img/' + cars[i] + '.png" width="100"></img>';
}

// ocupamo innerHTML para mostrar el arreglo 
document.getElementById("demo").innerHTML=text;

let b3 =document.getElementById("btn_push"); 
b3.onclick=funcionPush;


function funcionPush(e){
cars.push("imagen","1.8");
text="";
for(let i = 0; i< cars.length; i++){
    text +='<img src="img/' + cars[i] + '.png" width="100"></img>';
}
document.getElementById("boton").innerHTML=text;

let b4 =document.getElementById("boton");
b4.onclick=funcionPush;

document.getElementById("demo").innerHTML=text;
}
// analizando POP
// al hacer click en shift elminamos el primer elemento
let b4 =document.getElementById("btn_pop"); 
b4.onclick=funcionPop;

function funcionPop(e){
    if(cars.length > 0) {
        cars.pop();
        text="";
    for(let i = 0; i< cars.length; i++){
        text +='<img src="img/' + cars[i] + '.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=text;
    }else{
        alert("No puedo seguir eliminando valores, ya que el arreglo esta vacio.");
    }
    }

    // shift 
    let b1 =document.getElementById("btn_shift"); 
b1.onclick=funcionShift;

function funcionShift(e){
    if(cars.length > 0) {
        cars.shift();
        text="";
    for(let i = 0; i< cars.length; i++){
        text +='<img src="img/' + cars[i] + '.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=text;
    }else{
        alert("No puedo seguir eliminando valores, ya que el arreglo esta vacio.");
    }
    }

    // unshift

 let b2 =document.getElementById("btn_unshift"); 
b2.onclick=funcionUnshift;


function funcionUnshift(e){
cars.unshift("1.8");
text="";
for(let i = 0; i< cars.length; i++){
    text +='<img src="img/' + cars[i] + '.png" width="100"></img>';
}
document.getElementById("demo").innerHTML=text;
}


// al hacer en Slice crearemos un nuevo arreglo temporal indicando el begin y el end 

let b5 = document.getElementById("btn_slice");
b5.onclick=funcionSlice;
function funcionSlice(e){
    begin = document.getElementById("begin").value;
    end=document.getElementById("end").value;
    if(bigin = ! "" && end != ""){

        console.log(begin);
        console.log(end);
        new_array = cars.slice(bigin, end);
        text= "";
        for(let i=0 ; i< new_array.length; i++){
            text +='<img src="img/' + new_array[i] + '.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML=text;
    }else{
        alert("No puedo seguir eliminando valores, ya que el arreglo esta vacio.");
    }
}








    