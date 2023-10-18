const PcModel = require('../models/pcModel')

async function newPc(req, res) {
    try {
        const pc = await PcModel.create(req.body)
        res.status(200).json({ name: pc.name, text: pc.text, price: pc.price })


    } catch (error) {
        console.log(error)
    }
}

async function getAllPc(req, res) {
    try {
        const pc = await PcModel.find()
        res.json(pc)
    } catch (error) {
        console.log(error)
    }
}

async function getPcById(req, res) {
    try {
        const pc = await PcModel.findById(req.params.id)
        res.json(pc)
    } catch (error) {
        console.log(error)
    }

}

async function updatePcById(req, res) {
    try {
        const pcUpdate = await PcModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(pcUpdate)
    } catch (error) {
        console.log(error)
    }
}

async function deletePcById(req, res) {
    try {
        const pcDelete = await PcModel.findByIdAndDelete(req.params.id)
        if (!pcDelete) { res.json("This computer doesn´t exist") }
        else { res.json(pcDelete) }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    newPc,
    getAllPc,
    getPcById,
    updatePcById,
    deletePcById
}
