class Shape {
    setColor(colorInput) {
        this.color = colorInput;
    }
    setText(textInput) {
        this.text = textInput;
    }
    setTextColor(textColorInput){
        this.textColor = textColorInput;
    }
};

class Circle extends Shape{
    render() {
        if (!this.color){
            throw new Error(
                'Color of the shape is not defined'
            );
        } else {
            return `<circle cx='150' cy='100' r='80' fill='${this.color}'></circle>`
        }
    }
    renderText() {
        if (!this.textColor || !this.text) {
            throw new Error(
                'Both text color and text needs to be defined'
            );
        } else {
            return `<text x='150' y='120' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
        }
    }
};

class Triangle extends Shape{
    render() {
        if (!this.color){
            throw new Error(
                'Color of the shape is not defined'
            );
        } else {
            return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}'></polygon>`
        }
    }
    renderText() {
        if (!this.textColor || !this.text) {
            throw new Error(
                'Both text color and text needs to be defined'
            );
        } else {
            return `<text x='150' y='120' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
        }
    }
};

class Square extends Shape{
    render() {
        if (!this.color){
            throw new Error(
                'Color of the shape is not defined'
            );
        } else {
            return `<rect x="70" y="20" width="160" height="160" fill='${this.color}'></rect>`
        }
    }
    renderText() {
        if (!this.textColor || !this.text) {
            throw new Error(
                'Both text color and text needs to be defined'
            );
        } else {
            return `<text x='150' y='120' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
        }
    }
};

module.exports = {
    Circle,
    Square,
    Triangle
};