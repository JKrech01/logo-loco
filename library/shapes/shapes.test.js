const {circle, square, triangle} = require('./library/shapes');

//Circle:
describe('circle', () => {
    Test('renders correctly', () => {
        const shape = new circle();
        var color =("yellow");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`)

    });
});

//Square:
describe('square', () => {
    Test('renders correctly', () => {
        const shape = new square();
        var color =("yellow");
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect width='200' height='200' x='10' y='10' fill="${this.color}" />`)

    });
});

//Triangle:
describe('triangle', () => {
    Test('renders correctly', () => {
        const shape = new triangle();
        var color =("yellow");
        shape.setColror(color);
        expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill="${this.color}" />`)

    });
});

git.initateApp
