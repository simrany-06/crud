const dbConnect= require('../mongodb')

const createdata = async (req,res) =>  {
    const db = await dbConnect()
    const result =await db.insert(req.body)
    res.json({
        message:result
    })

}

module.exports ={createdata}

