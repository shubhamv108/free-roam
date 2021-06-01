function populateValuesInTemplate(template, valueObject) {
    for (const [key, value] of Object.entries(valueObject)) {
        template = template.replace('@'+key, value);
    }
    return template;
}

module.exports = {
    populateValuesInTemplate
};