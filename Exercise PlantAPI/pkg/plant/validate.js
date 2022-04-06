const { Validator } = require('node-input-validator');

const Plant = {
    name: 'required|String',
    likes_sun:  'required|number',
    likeswater:  'required|number',
    has_flower:' required|Boolean',
    has_thorns: 'required|Boolean',
    found_on_contients:'require|Array',
    current_location: 'require|Object',
    last_watering_date:' required|Date',
    created:' required|Date',
};

const validate = async(data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Plant,
    validate
}
