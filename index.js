import inquirer from 'inquirer';

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
]

function init() {
    inquirer
      .prompt(questions)
      .then((response) => {
        console.log(response);
      });
  }
  
  // Function call to initialize app
  init();