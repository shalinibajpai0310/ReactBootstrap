import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Griddle_Table from './Griddle_Table.jsx';
import NormalEditableTable from './NormalEditableTable.jsx';
import Mui_Data_Table from './Mui_Data_Table.jsx';
import Mui_Editable_Table from './Mui_Editable_Table.jsx'
import Stepper from './Stepper.jsx';
import Datagrid from './Datagrid.jsx';
import Header from './Header.jsx';
import RemoteStorePaging from './bootstrapTable.jsx'

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            steps: ['Step One', 'Step Two', 'Step Three', 'Step Four'],
            currentStep: 0,
        };
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrevious = this.onClickPrevious.bind(this);
        this.tenp = this.temp.bind(this);
    }

    onClickNext() {
        const { steps, currentStep } = this.state;
        this.setState({
            currentStep: currentStep + 1,
        });
    }

    onClickPrevious() {
        const { steps, currentStep } = this.state;
        this.setState({
            currentStep: currentStep - 1,
        });
    }

    doRender(){
        const { steps, currentStep } = this.state;
        if(currentStep==0)
            return <RemoteStorePaging/>
     }

    temp(a){
      console.log("temp called"+a);
    }

    render() {
        const { steps, currentStep } = this.state;
        const previousButtonStyle = { backgroundColor: '#008bc7',fontSize: '1.575rem' ,float:'left', width: 125, padding: 16, textAlign: 'center', margin: '10px 105px auto', cursor: 'pointer', marginTop: 32, borderColor: '#008bc7', color: '#ffffff' };
        const nextButtonStyle = { backgroundColor: '#008bc7',fontSize: '1.575rem' ,float:'right', width: 125, padding: 16, textAlign: 'center',     margin: '10px 71px 12px', cursor: 'pointer', marginTop: 32, borderColor: '#008bc7', color: '#ffffff' };
        return (
            <div>
                <Header/>
                <div onClick={()=>this.temp(this.props.activeStep)}><Stepper steps={ steps } activeStep={ currentStep } /></div>
                {this.doRender()}
                <div style={  previousButtonStyle } onClick={ this.onClickPrevious }>Previous</div>
                <div style={  nextButtonStyle } onClick={ this.onClickNext }>Next</div>
            </div>
        );
    }
};

export default Wizard