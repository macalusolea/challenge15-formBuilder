class Field {

    #inputElement = document.createElement("input");

    constructor(name, type, label) {
        this.name = name;
        this.type = type;
        this.label = label;
    }

    renderField() {
        const divElement = document.createElement("div");
        divElement.classList.add("field-container");

        const labelElement = document.createElement("label");
        labelElement.innerText = this.label;

        this.#inputElement.name = this.name;
        this.#inputElement.type = this.type;

        divElement.append(labelElement);
        divElement.append(this.#inputElement);

        return divElement;
    }

    get value() {
        return this.#inputElement.value;
    }
}
export default Field;

