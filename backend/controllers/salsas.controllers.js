import SAUCE from '../models/salsabase.js'

const getsalsa = async (req, res) => {
    try {
        let data = await SAUCE.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const postSalsa = async (req, res) => {
    try {
        let data = await SAUCE.create(req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const delSalsa = async (req, res) => {
    try {
        let data = await SAUCE.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const putSalsa = async (req, res) => {
    try {
        let data = await SAUCE.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

export {
    getsalsa,
    postSalsa,
    delSalsa,
    putSalsa
}