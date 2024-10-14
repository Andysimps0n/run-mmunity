const {Users} = require('../models')


function handleLogin() {
  return async (req, res)=>{

    const user = await Users.findOne({ where : {name : req.body.name}})

    if (user == null) {
      return res.send({message : "Login Failed", error : "Unknown User"})
    } else if (user.password == req.body.password) {
      return res.send({message : "Login Success"})
    } else {
      return res.send({message : "Login Failed", error : "Wrong Password", shit: 'treu'})
    }

  }
}


function handleSignUp() {
  return async (req, res)=>{

    const data = req.body;
    const isNameTaken = await Users.findOne({where : {name : req.body.name}})

    if (isNameTaken) {
      return res.send({message : "taken"})
    } else {
      try {
        await Users.create(data)
        return res.json({message : "Signup Success"})
      } catch {
        return res.json({message : "Signup Failed"})
      }
    }
  }
}

module.exports = { handleSignUp, handleLogin };
