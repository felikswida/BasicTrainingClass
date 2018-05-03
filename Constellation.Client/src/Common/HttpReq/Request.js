import axios from 'axios';
import {requestError,requestFailure} from './Error'
export function Post (self,address,param,callBackSuccess,passingVariabel,callBackException){
    axios.post(address, param)
    .then(function (response) {
        if( response.status == 200) 
            callBackSuccess(self,response,passingVariabel)
        else
            requestFailure(self,response)
    })
    .catch(function (error) {
        requestError(self,error)
        callBackException(self,error,passingVariabel)
    })
    return true;
}
export function Get(self,address,param,callBackSuccess,passingVariabel,callBackException){
    axios.get(address, param)
    .then(function (response) {
        if( response.status == 200) 
            callBackSuccess(self,response,passingVariabel)
        else
            requestFailure(self,response)
    })
    .catch(function (error) {
        requestError(self,error)
        callBackException(self,error,passingVariabel)
    })
    return true;
}
export function Put(self,address,param,callBackSuccess,passingVariabel,callBackException){
    axios.put(address, param)
    .then(function (response) {
        if( response.status == 200) 
            callBackSuccess(self,response,passingVariabel)
        else
            requestFailure(self,response)
    })
    .catch(function (error) {
        requestError(self,error)
        callBackException(self,error,passingVariabel)
    })
    return true;
} 
export function Delete(self,address,param,callBackSuccess,passingVariabel,callBackException){
    axios.delete(address, param)
    .then(function (response) {
        if( response.status == 200) 
            callBackSuccess(self,response,passingVariabel)
        else
            requestFailure(self,response)
    })
    .catch(function (error) {
        requestError(self,error)
        callBackException(self,error,passingVariabel)
    })
    return true;
} 