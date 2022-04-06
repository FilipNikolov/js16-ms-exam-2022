const plants = require('../pkg/plant');
const validator= require('../pkg/plant/validate');

const getAllPlants = async(req, res) => {
    try {
        let ps = await plants.getAllPlants();
        return res.status(200).send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error!`)
    }
};