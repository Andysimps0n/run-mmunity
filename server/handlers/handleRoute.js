const {Routes} = require('../models')


function handleGetRoutes() {
  return async (req, res)=>{
    const routes = await Routes.findAll()
    res.send({data :routes})
  }
}


function handleSaveRoute() {
  return async (req, res)=>{
    const data = req.body

    
    try {
        await Routes.create(data)
        res.send({message:"Route Saving Succeed", isPosted : true})
      } catch (error) {
        res.send({message: "Route Saving Failed", isPosted : false, error : error})
      }
  }
}

module.exports = { handleSaveRoute, handleGetRoutes };
