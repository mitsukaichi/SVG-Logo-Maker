const shapes = require('./shapes.js');
/*
import {Circle, Triangle, Square} from "./lib/shapes.js";
*/

describe('Circle', () => {
    describe('render', () => {
        it('should generate the circle HTML element with set color', () => {
            let newShape = new shapes.Circle;
            newShape.setColor("blue");
            expect(newShape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='blue'></circle>`) 
        }
        )
    });
    describe('render', () => {
        it('should throw error when render() is executed withtout color', () => {
            function cb() {
                let newShape = new shapes.Circle;
                newShape.render()
            };
            let error = 'Color of the shape is not defined';
            expect(cb).toThrow(error) 
        }
        )
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should generate the rectangle HTML element with set color', () => {
            let newShape = new shapes.Square;
            newShape.setColor("blue");
            expect(newShape.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill='blue'></rect>`) 
        }
        )
    });
    describe('render', () => {
        it('should throw error when render() is executed withtout color', () => {
            function cb() {
                let newShape = new shapes.Square;
                newShape.render()
            };
            let error = 'Color of the shape is not defined';
            expect(cb).toThrow(error) 
        }
        )
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should generate the polygon HTML element with set color', () => {
            let newShape = new shapes.Triangle;
            newShape.setColor("blue");
            expect(newShape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill='blue'></polygon>`) 
        }
        )
    });
    describe('render', () => {
        it('should throw error when render() is executed withtout color', () => {
            function cb() {
                let newShape = new shapes.Triangle;
                newShape.render()
            };
            let error = 'Color of the shape is not defined';
            expect(cb).toThrow(error) 
        }
        )
    });
})