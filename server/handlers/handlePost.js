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


  function handleGetPost() {
    return async (req, res) => {

      const page = req.query.page ?? 1


      try {
        const data = await Posts.findAll({
          limit : page * 7,
          offset : (page - 1) * 7
        })
        res.send({data})
      } catch {
        res.send({message : "Data fetching Failed"})
      }

    }
  }

module.exports = {handlePost, handleGetPost}