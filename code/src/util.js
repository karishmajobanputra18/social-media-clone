
util = {
FormDataJsonN(formData) {
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        return JSON.stringify(object);
    }

}