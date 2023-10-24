/*
Loop with:
 for
 while
 map
 for Each
 for of
 */

const communes = [
    "Carrefour",
    "Delmas",
    "Pétion-Ville",
    "tabarre",
    "Croix-des-Bouquet",
    "Gantier",
    "Gressier"
]

/*function loopFor(){
debugger;
    for(let i = 0; i < communes.length; i+=1){
        console.log(communes[i]);
    }
}

loopFor()*/



/*function loopWhile(){
let i = 0;
while( i < communes.length){
    console.log(communes[i]);
    i+=1;
}

}

loopWhile();*/


/*function loopMap(){

     communes.map((element) => {
        console.log(element);
    })
}

loopMap();*/


/*function loopForEach(){

    communes.forEach((element) => {
       console.log(element);
   })
}

loopForEach();*/


function loopForOf(){

    for (let element of communes){
        console.log(element);
    }
}

loopForOf();







