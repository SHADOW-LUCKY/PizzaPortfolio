import BORD from '../models/bordes.js'

const getbord = async(req,res)=>{
    try {
        let data = await BORD.find()
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
}

const postbord = async(req,res)=>{
    try {
        let data = await BORD.create(req.body)
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
}

const delbord = async(req,res)=>{
    try {
        let data = await BORD.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
}

const putbord = async(req,res)=>{
    try {
        let data = await BORD.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
}

export {
    getbord,
    postbord,
    delbord,
    putbord
}