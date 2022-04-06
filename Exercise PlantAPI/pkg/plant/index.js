const mongoose = require('mongoose');

const Plant = mongoose.model(
    'plants', {
        name: String,
        likes_sun:  { type: Number, min: 1, max: 10 },
        likes_water:  { type: Number, min: 1, max: 10 },
        has_flower: Boolean,
        has_thorns:Boolean,
        found_on_contients:Array,
        current_location: {city:String, country:String},
        last_watering_date: Date,
        created:Date
    },
    'plants'
);
const addPlant = async(plants) => {
    let p = new Plant(plants);
    return await p.save();
};
const removePlant = async(id) => {
    return await Plant.deleteOne({ _id: id });
};
const updatePlant = async(id, plants) => {
    return await Plant.updateOne({ _id: id }, plants);
};
const getAllPlants = async(req, res) => {
    return await Plant.find({});
};
const getOnePlant = async(id) => {
    return await Plant.findOne({ _id: id });
};

module.exports = {
    addPlant,
    removePlant,
    updatePlant,
    getAllPlants,
    getOnePlant
};