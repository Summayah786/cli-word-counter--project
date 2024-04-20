#!/usr/bin/env node 
//Import the inquirer module which is a command line interface for Node.js
import inquirer from "inquirer";
//Decalrae a constant 'answers and assign it to the inquirer.prompt function 
const answers = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'input',
        message: 'Enter your sentence to count the word:'
    }
]);
const words = answers.Sentence.trim().split(' ');
//Print the array of words to the console 
console.log(words);
//Print the word count of the sentence to the console.
console.log("Your sentence word count is " + words.length);
