
const dbConnect = require('../mongodb')
const mongodb = require('mongodb')
const deletedata= async (req,res)=>{
    let data = await dbConnect()
    
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send("Record Deleted")
}

module.exports= {deletedata}