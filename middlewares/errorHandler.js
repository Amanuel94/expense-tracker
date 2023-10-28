const {CustomAPIError} =  require('../errors/custom-error');
const errorHandlerMiddleware = (err,req, res, next)=>{
    console.log(err)
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).send({msg:err.message});
    }
    // console.log("err")
    // console.log(err)
    return res.status(500).send({msg:err});
}

module.exports = errorHandlerMiddleware;