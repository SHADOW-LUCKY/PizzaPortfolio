import TOP from '../models/toppings.js';

const getToppings = async (req, res) => {
    try {
        const toppings = await TOP.find();
        res.json(toppings);
    } catch (error) {
        console.log(error);
    }
}

const createTopping = async (req, res) => {
    try {
        const topping = await TOP.create(req.body);
        res.json(topping);
    } catch (error) {
        console.log(error);
    }
}

const deleteTopping = async (req, res) => {
    try {
        const topping = await TOP.findByIdAndDelete(req.params.id);
        res.json(topping);
    } catch (error) {
        console.log(error);
    }
}

const updateTopping = async (req, res) => {
    try {
        const topping = await TOP.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(topping);
    } catch (error) {
        console.log(error);
    }
}

export { getToppings, createTopping, deleteTopping, updateTopping,}
