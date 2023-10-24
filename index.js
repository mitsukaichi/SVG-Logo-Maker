import inquirer from 'inquirer';
import * as fs from 'node:fs';
import {Circle, Triangle, Square} from "./lib/shapes.js";


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Provide up to 3 characters to add into the image',
        validate: function (input) {
            if (input.length > 3) {
                return ('You can only provide up to 3 characters');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Provide the name of the color of the text or a hexadecimal number'
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'Choose the shape',
        choices: ['circle','triangle','square'],
        validate: function (input) {
            if (input.length === 0) {
                return ('Please select one of these shapes')
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Provide the name of the color of the shape or a hexadecimal number'
    },
];

function outputFile(shapeElement, textElement){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shapeElement}
${textElement}
</svg>`
};

function createSvgContent(newShape,response){
    newShape.setColor(response.shape_color);
    newShape.setText(response.text);
    newShape.setTextColor(response.text_color);
    const shapeElement = newShape.render();
    const textElement = newShape.renderText();
    const svgContent = outputFile(shapeElement,textElement);
    return svgContent;
}

function createFile(fileName,input) {
    fs.writeFile(fileName,input,(err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}

function init() {
    inquirer
      .prompt(questions)
      .then((response) => {
        if (response.shape[0] === 'circle') {
            const newShape = new Circle;
            const svgContent = createSvgContent(newShape,response);
            createFile("./examples/logo.svg",svgContent);
        } else if (response.shape[0] === 'triangle') {
            const newShape = new Triangle;
            const svgContent = createSvgContent(newShape,response);
            createFile("./examples/logo.svg",svgContent);
        } else if (response.shape[0] === 'square') {
            const newShape = new Square;
            const svgContent = createSvgContent(newShape,response);
            createFile("./examples/logo.svg",svgContent);
        };
      });
  }
  
  // Function call to initialize app
  init();