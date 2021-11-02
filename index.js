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


function  prependCat(x, name){
    x = [name, ...cats];
    console.log(x);
}
prependCat()

function removeLastCat(x){
   return x = cats.shift();

}
function removeFirstCat(x){
    return x = cats.pop();
}