const dbConnect = require('../mongodb')
const mongodb = require('mongodb')

const updatedata = async (req,res) => {
    let data = await dbConnect()
    let result = await data.updateOne(
        {_id:new mongodb.ObjectId(req.params.id)},
        {$set: req.body}
    )
    res.send({result:"update"})
    }

    module.exports = {updatedata}

