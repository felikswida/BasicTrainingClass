import React from 'react';
import {Post,Get,Delete,Put} from '../../Common/HttpReq/Request'
import * as APPDATA from '../../AppData/ConstellationAppData'
// interfal of updating status
const Interval = 2000
// observer list of StatusService
var observers = []
// value given to the observe
var statusService = {
    status : APPDATA.Enum.Status.IDLE,
    percentage : 0}
class StatusService extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            observer : []
        }
    }
    toString (){
        return "[Status Service]"
    }
    failedGetStatus(){
        console.log (this.toString()+" - [Failed Get Status]")
    }
    successGetStatus (){
        this.statusChanged()
        notifyAllObservers()
    }
    statusChanged(){
        var percent = statusService.percentage +=1
        statusService = {            
            status : APPDATA.Enum.Status.RUNNING,
            percentage : percent <=100 ? percent :0
        }
    }
    componentDidMount() {
        var param = {}
        var passingVarabel = {}
        setInterval(() => {
            this.successGetStatus()
            // Get(this,STATUS_ADDRESS,param,this.successGetStatus,passingVariabel,this.failedGetStatus)
        }, Interval);
    }
    render (){
        return(
            <div/>
        )
    } 

}export default StatusService;
//--------------------------- OBSERVER PATTERN -------------------------

/**
 * Register observer  of status service
 */
export var registerObserver =function(observer){
    observers.push(observer)
    console.log ("[Register Observer]",observers)
}

/**
 * Notify all Observer and update the status
 */
export var notifyAllObservers = function (){
    for (var i = 0 ; i < observers.length ;i++){
        observers[i].update(statusService)
    }
}

/**
 * notify to selected obeserver
 * @param observer
 */
export var notifyObserver = function (observer){
    var index = observers.indexOf(observer)
    if (index>-1)
        observers[index].update(status)
}

/**
 * remove observer from list of observer
 */
export var removeObserver = function (observer){
    var index = observers.indexOf(observer)
    if (index > -1){
        observers.splice(index,1)
        console.log ("[Remove Observer]",observers)
    }
}

//--------------------------- END OF OBSERVER PATTERN -------------------------