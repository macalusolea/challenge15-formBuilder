import Field from "./Field.js";

class Form {
    #fields = [];
    #formElement = document.createElement("form");

    constructor(title) {
        this.title = title;
    }

    addField(field) {
        if (field instanceof Field) {
            this.#fields.push(field);
        } else {
            throw new Error("Mettre le bon champs stp");
        }
        return this;
    }

    renderForm() {
        const titleElement = document.createElement("h1");
        titleElement.textContent = this.title;
        this.#formElement.append(titleElement);

        this.#fields.forEach((field) => {
            const fieldElement = field.renderField();
            this.#formElement.append(fieldElement);
        });

        const buttonElement = document.createElement("button");
        buttonElement.type = "submit";
        buttonElement.textContent = "Submit";
        this.#formElement.append(buttonElement);

        this.#formElement.addEventListener("submit", this.#submit.bind(this));

        document.body.append(this.#formElement);
    }

    #submit(e) {
        // Prevent page from refreshing on form submit.
        e.preventDefault();

        // Collect the values from the form fields. formData will be an array of objects
        // with key-value pairs referring to each field's name and value. 
        const formData = this.#fields.map((field) => {
            return {
                [field.name]: field.value
            };
        });

        // Find the toast element and add the "show" class to it. 
        const toastElement = document.querySelector("#toast");
        toastElement.classList.add("show");

        // Set the text content of the toast element to be a JSON representation of formData.
        toastElement.textContent = formData.map((el) => JSON.stringify(el));

        // Wait 5 seconds, then remove the show class from the toast. 
        setTimeout(() => {
            toastElement.classList.remove("show");
        }, 5000);

        return formData;
    }
}
export default Form;