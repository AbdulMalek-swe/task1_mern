module.exports.userRegister = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    }
}