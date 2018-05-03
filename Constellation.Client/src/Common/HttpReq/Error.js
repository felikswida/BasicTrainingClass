export function requestError(self,errorParam){
    console.error(errorParam);
    console.error ("Error",errorParam.response)
    var message = errorParam == undefined ?"No Connection":(errorParam.response == undefined ||errorParam.response.data.message == undefined  )? errorParam.toString():errorParam.response.data.message 
    
    return true;
}

export function requestFailure(self,response){
    console.error("Failure",response.data.message);
    
    return true
}