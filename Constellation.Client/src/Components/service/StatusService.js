import React from 'react';
import {Post,Get,Delete,Put} from '../../../Controller/HttpReq/Request'
const Interval = 2
class StatusService extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var param = {}
        var passingVarabel = {}
        setInterval(() => {        
            Get(this,STATUS_ADDRESS,param,callBackSuccess,passingVariabel,callBackException)

        }, Interval);
    }
    render (){
        return(
            <div/>
        )
    } 

}export default StatusService;