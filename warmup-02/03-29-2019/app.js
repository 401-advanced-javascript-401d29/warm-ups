'use strict'

const superagent = require('superagent');

const fetchPeoplewithPromises = () => {

  return superagent.get('https://swapi.co/api/people/')

  .then(response => {
    return response.body.results.map(character => {
      let urlArray = [];
      urlArray.push(superagent.get(character.url));
      return urlArray;
    })
    .then(response => {
      console.log(urlArray);
    })
    .catch(error);
    //Note: response.body.results[0] correctly returns the Luke Skywalker object
  });

};

console.log(fetchPeoplewithPromises());