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
        return `<circle cx='150' cy='100' r='80' fill='${this.color}'></circle>`
    }
    renderText() {
        return `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textcolor}'>${this.text}</text>`;
    }
};

const newCircle = new Circle;
newCircle.setColor("blue");
newCircle.setText("hoge");
newCircle.setTextColor("pink");
console.log(newCircle.render());
console.log(newCircle.renderText());
