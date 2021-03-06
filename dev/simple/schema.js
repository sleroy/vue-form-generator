import fecha from "fecha";

import {
    validators
} from "../../src";

let customAsyncValidator = function(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value)
                resolve();
            else
                resolve(["Invalid value from async validator"]);
        }, 1000);
    });
};

module.exports = {
    fields: [

        /***********/
        /*  INPUT  */
        /***********/
        {
            type: "input",
            inputType: "hidden",
            label: "--- INPUT ---",
            model: "",
            styleClasses: "alert alert-info"
        },
        {
            type: "input",
            inputType: "hidden",
            label: "Hidden",
            model: "id",
            inputName: "hiddenField"
        },
        {
            type: "input",
            inputType: "text",
            label: "First name",
            model: "firstName",
            featured: true,
            required: true,
            help: "First name of user",
            placeholder: "User's first name",
            styleClasses: "half-width",
            validator: validators.string,
            onChanged(model, newVal, oldVal, field) {
                console.log(`Model's name changed from ${oldVal} to ${newVal}. Model:`, model);
            },
            onValidated(model, errors, field) {
                if (errors.length > 0)
                    console.warn("Validation error in Name field! Errors:", errors);
            }
        }, {
            type: "input",
            inputType: "text",
            label: "Last name",
            model: "lastName",
            featured: true,
            required: true,
            placeholder: "User's last name",
            styleClasses: "half-width",
            style: "input-lg",
            validator: validators.string
        }, {
            type: "input",
            inputType: "url",
            label: "URL",
            model: "website",
            placeholder: "Enter your website",
            inputName: "website",
            validator: customAsyncValidator //validators.url
        }, {
            type: "input",
            inputType: "tel",
            label: "Telephone",
            model: "phone",
            placeholder: "Enter your phone number",
            styleClasses: "half-width"
        }
    ]
};