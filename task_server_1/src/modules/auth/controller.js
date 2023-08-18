module.exports.userRegister = async(req,res)=>{
    try {
      res.status(200).json({
        message:"pages welcome"
      })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error:error.message
        })
    }
}