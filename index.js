// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
  console.log(cats)
}
cats;

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
}
cats;

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);}
    cats

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);

}

function appendCat(name){
  [...cats, name];
    console.log();

}


function  prependCat( name){
    return [name, ...cats];
}
prependCat()

function removeLastCat(){
    return cats.slice(0,-1);


}
function removeFirstCat(x){
    return cats.slice(1)
}

function appendCat(a){
    return [...cats,a]
}
