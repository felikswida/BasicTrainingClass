import React from 'react';
import style from './StatusPage.less';
import * as StatusService from '../../service/StatusService'

class StatusPage extends React.Component{
    
    constructor(props) {
        super(props);
        this.update = this.update.bind(this)
        // var subject = new ObserverPattern.Subject()
        // console.log (subject)
        this.state  = {
            status : "STATUS"
        }
        StatusService.registerObserver(this)
    }
    toString (){
        return "[Status Page]"
    }
    update (status){
        console.log (this.toString()+" - UPDATE",status)
        this.setState ({
            status : status
        })
    }
    render (){
        return(
            <div>
                Status Component : {this.state.status}
            </div>
        )
    } 

}export default StatusPage;