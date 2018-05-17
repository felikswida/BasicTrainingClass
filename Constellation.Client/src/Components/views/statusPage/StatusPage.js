import React from 'react';
import style from './StatusPage.less';
import * as StatusService from '../../service/StatusService'
import FmlxProgressBar from "fmlx-component/components/FmlxProgressBar";
import Button from "fmlx-component/components/FmlxButton"
import * as APPDATA from '../../../AppData/ConstellationAppData'

class StatusPage extends React.Component{
    
    constructor(props) {
        super(props);
        this.update = this.update.bind(this)
        // var subject = new ObserverPattern.Subject()
        // console.log (subject)
        this.state = {
            status : {
                status : APPDATA.Enum.Status.IDLE,
                percentage : 0
            }
        }
    }
    resetStatusPage (){
        this.setState ({
            status : {
                status : APPDATA.Enum.Status.IDLE,
                percentage : 0
            }
        })
    }
    toString (){
        return "[Status Page]"
    }
    update (statusService){
        console.log (this.toString()+" - UPDATE",statusService)
        this.setState ({
            status : statusService
        })
    }
    onClick(id){
        switch (id){
            case APPDATA.Name.START:              
                StatusService.registerObserver(this)   
            break;
            case APPDATA.Name.STOP:
                StatusService.removeObserver(this)
                this.resetStatusPage()
            break;
        }
    }
    render (){
        var isConstellationRunning = this.state.status.status == APPDATA.Enum.Status.RUNNING? true : false 
        return(
            <div>
                Status Component : {this.state.status.status}
                <div>
                    {!isConstellationRunning &&<Button
                        key={APPDATA.Name.START}
                        text={APPDATA.Name.START}
                        bsSize="large"
                        handleClick={(id) => this.onClick(APPDATA.Name.START)}
                    />}{
                        isConstellationRunning && <Button
                        key={APPDATA.Name.STOP}
                        text={APPDATA.Name.STOP}
                        bsSize="large"
                        handleClick={(id) => this.onClick(APPDATA.Name.STOP)}
                    />}

                </div>
                <div className = "row center">
                    <FmlxProgressBar
                        style={FmlxProgressBar.styles.error}
                        width="450pt"
                        height="20pt"
                        label={"running for " + parseInt(this.state.status.percentage) + "%"}
                        progress={parseInt(this.state.status.percentage)}
                    />
                </div>

            </div>
        )
    } 

}export default StatusPage;