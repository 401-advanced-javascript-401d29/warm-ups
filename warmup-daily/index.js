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
const map = (array, callback) => {
  const newArray = []

  for(let i = 0 ; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

const reduce = (array) => {

}

const filter = (array) => {

}

map(numArray, );
reduce(numArray);
filter(numArray);


//////////////////////////////////////////////////////////////
// Objects
//////////////////////////////////////////////////////////////

// Begin with the starter code below …

// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.

// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it

// Create a state object with keys of people and stuff that contain the people and stuff data.

// Do this using object destructuring assignment

// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)

// Prove that the original people, stuff, and state are unchanged.