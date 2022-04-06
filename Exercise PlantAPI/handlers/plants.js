const plants = require('../pkg/plant');
const validator= require('../pkg/plant/validate');

const getAll = async(req, res) => {
    try {
        let ps = await plants.getAllPlants();
        return res.status(200).send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error!`)
    }
};

const getOne = async(req, res) => {
    try {
        let ps = await plants.getOnePlant(req.params.id);
        return res.status(200).send(ps)
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error!`)
    }
};

const create = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Plant);
        let ps = await plants.addPlant(req.body);
        return res.status(204).send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error!`)
    }
};

const update = async(req, res) => {
    try {
        await validator.validate(req.body, validator.Plant);
        await plants.updatePlant(req.params.id, req.body);
        return res.status(204).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error !`)
    }
};
const remove = async(req, res) => {
    try {
        await plants.removePlant(req.params.id);
        return res.status(204).send("Deleted!")
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Internal server error!`)
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
  
};
