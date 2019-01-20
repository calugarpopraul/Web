'use strict'

//1
function a() {}
function b() {
    a = 10;
    return;
}

b();
console.log(`a=` + a);

//2
for (var i = 0; i < 5; i++) 
{

    (function(i)
    {
        setTimeout(function(){
         console.log(i);
        },i*1000);
    })(i);
}

//3
setTimeout(function(){	
    try {	
    throw 'example';		
    throw new Exception('example');			
        } catch (err) {
        console.log(err);				
    }
}, 1000)

//4
class Animal {

    constructor(type, color) {

        this.type = type;
        this.color = color;
        this.setColor = function(color) { _name = name; }

    }

    get color() {
        return this.color;
    }   
}

class Dog extends Animal {

    constructor(dogType) {

        this.dogType = function(dogType) { _dogType = dogType; }
    }

    get dogType() {
        return this.dogType;
    }
    
}

class Fish extends Animal {

    constructor(fishType) {

        this.fishType = function(fishType) { _fishType = fishType; };
    }

    get fishType () {
        return this.fishType;
    }
}

class DogType {
    constructor(typeName, furColor) {
        this.typeName = typeName;
        this.furColor = function(furColor) { _furColor = furColor; }
    }

    get furColor() {
        return this.furColor;
    }
}

// 5
// setTimeout(() => console.log('Blocked'), 1000);
// function blocking(n) {
//     let a = 0;
//     for(let i = 0; i < 1000; i++) {
//         for(let j = 0; j < i * 10000; j++) {
//             if(i < j) {
//                 a++;
//                 console.log(a);
//             }
//         }
//     }
// }

// function blocking() {
//     let a = 0;
//     for(let i = 0; i < 1000; i++) {
//         for(let j = 0; j < i * 10000; j++) {
//             if(i < j) {
//                 a++;
//                 console.log(a);
//             }
//         }
//     }
// }
// setTimeout(() => {
//     blocking();
// },1000);

//6
var pos = 0;
var elem = document.getElementById("toMove"); 

function move() { 
    pos+=20; 
    elem.style.left = pos + 'px';     
}

function resetIndex(){
   pos = 8;
   elem.style.left = pos+'px';
}

