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
            return `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
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
            return `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
        }
    }
};


export {
    Circle,
    Triangle
}