const {Circle, Square, Triangle} = require('./shapes');

//Circle:
describe('Circle', () => {
    Test('renders correctly', () => {
        const shape = new Circle();
        var color =("yellow");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="100" height="100"= width"100" fill="${this.color}" />`)

    });
});

//Square:
describe('Square', () => {
    Test('renders correctly', () => {
        const shape = new Square();
        var color =("yellow");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect height="100" width="100" fill="${this.color}" />`)

    });
});

//Triangle:
describe('Triangle', () => {
    Test('renders correctly', () => {
        const shape = new Triangle();
        var color =("yellow");
        shape.setColror(color);
        expect(shape.render()).toEqual(`<polygon heigh="100" width="100" points="100,100 300,100 200,200 fill="${this.color}" />`)

    });
});

git.initateApp
