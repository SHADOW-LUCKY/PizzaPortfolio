import fillout from "../models/orden.js";

const getOrden = async (req, res) => {
    try {
        const ordenes = await fillout.find();
        res.json(ordenes);
    } catch (error) {
        console.log(error);
    }
}

const createOrden = async (req, res) => {
    try {
        const orden = await fillout.create(req.body);
        res.json(orden);
    } catch (error) {
        console.log(error);
    }
}

const updateOrden = async (req, res) => {
    try {
        const orden = await fillout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(orden);
    } catch (error) {
        console.log(error);
    }
}

const deleteOrden = async (req, res) => {
    try {
        const orden = await fillout.findByIdAndDelete(req.params.id);
        res.json(orden);
    } catch (error) {
        console.log(error);
    }
}

export { getOrden, createOrden, updateOrden, deleteOrden };
