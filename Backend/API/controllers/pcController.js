const PcModel = require('../models/pcModel')

async function newPc(req, res) {
try {
    const pc = await PcModel.create(req.body)
        res.status(200).json({ name: pc.name, text: pc.text })


} catch (error) {
    console.log(error)
}
}

module.exports = {
    newPc,
}
