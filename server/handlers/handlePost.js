const {Posts} = require('../models')

function handlePost(){
  return async (req, res) => {
    const data = req.body

    try {
      await Posts.create(data)
      res.send({message:"Posting Succeed", isPosted : true})
    } catch (error) {
      res.send({message: "Posting Failed", isPosted : false, error : error})
    }
  }
}

module.exports = {handlePost}