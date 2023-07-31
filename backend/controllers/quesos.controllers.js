import CHEESE from '../models/quesobase.js'

const getquesos = async(req, res) => {
    try {
        const data = await CHEESE.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const postquesos = async(req, res) => {
    try {
        const data = await CHEESE.create(req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const putquesos = async(req, res) => {
    try {
        const data = await CHEESE.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const delquesos = async(req, res) => {
    try {
        const data = await CHEESE.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

export { getquesos, postquesos, putquesos, delquesos }