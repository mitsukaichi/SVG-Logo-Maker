class Shapes {
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

class Circle extends Shapes{
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



export default Circle;