'use strict'

//////////////////////////////////////////////////////////////
// Arrays
//////////////////////////////////////////////////////////////

// Create an array of numbers, 1 through 10

// Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.

// Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

// Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

const numArray = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0 ; i < numArray.length ; i++) {
  console.log(numArray[i]);
};

const whileLoop = (array) => {
  let counter = 0;
  while(counter < array.length){
    console.log(array[counter]);
    counter ++;
  }
};

whileLoop(numArray);

//map makes a new array
const map = (array) => {
  const newArray = []

  for(let i = 0 ; i < array.length; i++) {
    newArray[i] = array[i] +1;
  }
  return newArray;

}

const reduce = (array) => {
  let sum = 0;
  for(let i = 0 ; i < array.length ; i++) {
    sum += array[i];
  }
  return sum;
};

//filtering for the even numbers in array

const filterEven = (array) => {
  let evenArray = [];
  for(let i = 0 ; i < array.length ; i++) {
    if(array[i] % 2 === 0) evenArray.push(array[i]);
  }
  return evenArray;
}

//filtering for the odd numbers in array

const filterOdd = (array) => {
  let oddArray = [];
  for( let i =0 ; i < array.length ; i ++) {
    if(array[i] % 2 === 1) oddArray.push(array[i]);
  }
  return oddArray;
}

console.log(map(numArray), 'i am mapping');
console.log(reduce(numArray), 'i am reducing');
console.log(filterEven(numArray), 'i am filtering only even numbers');
console.log(filterOdd(numArray), 'i am filtering only odd')


//////////////////////////////////////////////////////////////
// Objects
//////////////////////////////////////////////////////////////

// Begin with the starter code below …

const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};


// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.

let newPeople = ['Odie', ...people, 'Garfield'];
console.log('newPeople: ', newPeople);

// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it

const newStuff = {...stuff, cars:[...stuff.cars, 'Subaru']};
console.log('newStuff :', newStuff)

// Create a state object with keys of people and stuff that contain the people and stuff data.

let state = {people, stuff};
console.log('state: ', state);

// Do this using object destructuring assignment

let stateWithSpread = {people: [...people], stuff: [...stuff]};
console.log('stateWithSpread: ', stateWithSpread);

// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)

let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Subaru']}};
console.log('newState: ', newState);

// Prove that the original people, stuff, and state are unchanged.

//console.logs above