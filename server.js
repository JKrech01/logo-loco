const inquirer = require('inquirer');
const fs = require('fs');
//can't get this to work

// Prompt the user for input
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the letters (cannot be more than 3 characters):'
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Enter the shape (Triangle, Circle, or Square):'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter the color of the shape:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color of the text:'
    }
])

    .then((answers) => {
        // Process the user input
        const { shape, text, color, textColor } = answers;
        let svgContent = '';

        // Generate SVG content based on the shape and color
        switch (shape.toLowerCase()) {
            case 'triangle':
                svgContent = `<svg width="300" height="200">
                <polygon points="150,18 244,182 56,182" fill="${color}" />
                <text x="100" y="100" fill="${textColor}">${text}</text>
              </svg>`;
                break;
            case 'circle':
                svgContent = `<svg width="300" height="200">
            <circle cx="100" cy="100" r="80" fill="${color}" />
            <text x="60" y="110" fill="${textColor}">${text}</text>
          </svg>`;
                break;
            case 'square':
                svgContent = `<svg width="300" height="200">
                <rect x="50" y="50" width="100" height="100" fill="${color}" />
                <text x="60" y="110" fill="${textColor}">${text}</text>
              </svg>`;
                break;
            default:
                console.log('Invalid shape entered. Please enter Triangle, Circle, or Square.');
                return;
        }

        // Write the SVG content to a file
        fs.writeFileSync('output.svg', `<svg width="300" height="200">${svgContent}</svg>`);
        console.log('SVG file created successfully.');
    });

// function init() {
//     inquirer.prompt(questions)
//         .then(answers => {
//             console.log(answers);
//         });
// }
//init();