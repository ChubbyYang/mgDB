module.exports=function(model) {
  return promise = new Promise(function(resolve, reject){
    model.find({}, function(err, res){
        if (err) {
            console.log("Error:" + err);
            reject(err);
        }
        else {
            console.log("Res:" + res);
            resolve(res);
        }      
    })
  })
};