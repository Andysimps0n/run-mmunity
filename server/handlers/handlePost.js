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
          limit : 7,
          offset : (page - 1) * 7
        })
        res.send({data})
      } catch {
        res.send({message : "Data fetching Failed"})
      }

    }
  }

  function handleLike() {
    return async (req, res ) => {
      const {id} = req.body
      const {hasLikedBool} = req.body

      const row = await Posts.findOne({where : {id : id}})
      const currentLike = row.like
      const newLike = hasLikedBool ? currentLike + 1 : currentLike - 1

      await Posts.update(
        {like : newLike},
        {where : {id : id}}
      )



      res.send({message : newLike})
    }
  }

module.exports = {handleLike, handlePost, handleGetPost}