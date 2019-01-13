// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
//
function LetterCapitalize(str) {

  // code goes here
  let hello = str.split(" ")
  let new_hello = []
  for (const one of hello) {
      new_hello.push( one.replace( one[0], one[0].toUpperCase() ) )
  }

  return new_hello.join(' ');

}


// their answer
function LetterCapitalize(str) {

  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can 
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });

}

import React, { Component } from 'react'

export default class answer extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
