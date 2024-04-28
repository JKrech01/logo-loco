const {circle, square, triangle} = require('./library/shapes');

//Circle:
describe('circle', () => {
    Test('renders correctly', () => {
        const shape = new circle();
        var color =("yellow");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="100" height="100"= width"100" fill="${this.color}" />`)

    });
});

//Square:
describe('square', () => {
    Test('renders correctly', () => {
        const shape = new square();
        var color =("yellow");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect height="100" width="100" fill="${this.color}" />`)

    });
});

//Triangle:
describe('triangle', () => {
    Test('renders correctly', () => {
        const shape = new triangle();
        var color =("yellow");
        shape.setColror(color);
        expect(shape.render()).toEqual(`<polygon heigh="100" width="100" points="100,100 300,100 200,200 fill="${this.color}" />`)

    });
});

git.initateApp
