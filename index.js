// Imports the 'fs' module, which provides an API for interacting with the file system.

const fileSystem = require("./node_modules/graceful-fs/graceful-fs.js")
const inquirer = require("inquirer");
const {circle, square, triangle} = require("./library/shapes/shape");

// //having isues with inquirer - trying this instead

// import("inquirer").then((inquirer) => {

// }).catch((error) => {
//      console.error(error);
//  });

// const jest = require('jest');

// const {circle, square, triangle} = require("./library/shapes/shape.js");


class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">`
    }
    setTextElement(text,color){
        this.textElement = `<text x="50%" y="50%" fill="${color}" dy=".3em">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}
// Questions for user input
const questions =[
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the log (cannot be more than 3 characters):',
validate: function (input) {
return input.length <= 3 ? true : 'Text must not be more than 3 characters.';
}
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color:',
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(answers);
});


//git.initateApp
//moved to shape.js
// class Circle {
//     constructor(color) {
//         this.color = color;
//         this.cx = "150";
//         this.cy = "100";
//         this.r = "80";
//         this.fill = color;
//     }
// }

// render() {
//     return `<circle cx"${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
// }

// inquirer.prompt([
//     {
//         type: "list",
//         message: "Shape Type",
//         name: "shape",
//         choices: ["Circle", "Square", "Triangle"]
//     },
//     {
//         type: "input",
//         message: "Text Color",
//         name: "textColor",
//     },
//     {
//         type: "input",
//         message: "Shape Color",
//         name: "shapeColor",
//     },

// ]).then(response => {
//     let shape;
//     let textColor;

//     switch (response.shape) {
//         case "Circle":
//             shape = new Circle(response.shapeColor)
//             break;
//         case "Square":
//             shape = new Square(response.shapeColor)
//             break;
//         case "Triangle":
//             shape = new Triangle(response.shapeColor)
//             break;
//             default:
//                 console.log("Invalid shape type selected.");
//     }
//     textColor = response.textColor;
// })
/* inquirer questions:

? enter the text for the logo (must not be more than 3 characters.)
? Enter a text color
? Select a shape for the log (use arrow keys)

)   circle
    square
    triangle

    ? Enter a shape color

? svg class
class Svg {
    constructor() {
        this.version = "1.1";
        this.width = "300";
        this.height = "200";
        this.xmlns = "http://www.w3.org/2000/svg";
    }

    render() {
        return `<svg version=${this.version} width=${this.width}  height=${this.height} xmlns=${this.xmlns} /svg">`
    }
}
*/