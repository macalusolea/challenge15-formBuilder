import Field from "./Field.js";
import Form from "./Form.js";


const form = new Form("Sign up");
const email = new Field("email", "email", "Enter an email");
const password = new Field("password", "password", "Enter a password");
const date = new Field("date", "date", "Enter a birth date");


form.addField(email).addField(password).addField(date).renderForm();