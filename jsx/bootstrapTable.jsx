import React from 'react'
import ReactDOM from  'react-dom'
import { BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'

function priceFormatter(cell, row) {
  return `<i class='glyphicon glyphicon-euro'></i> ${cell}`;
}


function ProgressFormatter(cell,row){
    const percentComplete = `${cell}` + '%';
    return (
            <div className="progress" style={{ marginTop: '20px' }}>
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: percentComplete }}>
                    {percentComplete}
                </div>
            </div>);
}

class BootstrapGrid extends React.Component{

    createRows() {
        let rows = [];
        for (let i = 1; i < 25; i++) {
            rows.push({
                id:i,
                direct: 'Direct',
                region: 'Asia',
                country: 'India',
                operator: 'India Telecom(Salaam)',
                coverage: i*10,
                options: 'Vodafone',
                smpp: 'SMPP',
                tpoa: 'No',
                mobile: 'No',
                first: '0.0270'+i,
                second: '0.0234'+i,
                third: '0.0450'+i,
                fourth: '1.2556'+i
            });
        }

        return rows;
    }

    render(){
        return(
        <div className="container">
        <BootstrapTable data={this.createRows()} striped>
            <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='direct'>Direct/HQ</TableHeaderColumn>
            <TableHeaderColumn dataField='region'>Region</TableHeaderColumn>
            <TableHeaderColumn dataField='country' headerAlign='center' dataAlign='center'>Destination Country</TableHeaderColumn>
            <TableHeaderColumn dataField='operator' headerAlign='center' dataAlign='center'>Destination Operator</TableHeaderColumn>
            <TableHeaderColumn dataField='coverage' dataSort={true} dataFormat={ ProgressFormatter }>% Coverage</TableHeaderColumn>
            <TableHeaderColumn dataField='options'>Destination Operator Options</TableHeaderColumn>
            <TableHeaderColumn dataField='smpp'>SMPP/SS7</TableHeaderColumn>
            <TableHeaderColumn dataField='tpoa'>Alphanumeric TPOA Supported</TableHeaderColumn>
            <TableHeaderColumn dataField='mobile'>Mobile Ack</TableHeaderColumn>
            <TableHeaderColumn dataField='first' dataFormat={ priceFormatter }>1-2,50,000</TableHeaderColumn>
            <TableHeaderColumn dataField='second' dataFormat={ priceFormatter }>2,50,001-5,00,000</TableHeaderColumn>
            <TableHeaderColumn dataField='third' dataFormat={ priceFormatter }>5,00,001-10,00,000</TableHeaderColumn>
            <TableHeaderColumn dataField='fourth' dataFormat={ priceFormatter }>10,00,001-Over</TableHeaderColumn>
  </BootstrapTable></div>
        );
    }
}

export default BootstrapGrid