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

const qualityType = {
  SMPP: 'SMPP',
  SS7: 'SS7',
};

const ack = {
    Yes:'Yes',
    No:'No'
};

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  showOnlySelected: true
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function formatFloat(cell, row) {
  return parseFloat(cell);
}

function onAfterInsertRow(row) {
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}

const options = {
  afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
   afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}
const cellEditProp = {
  mode: 'click'
};


class BootstrapGrid extends React.Component{

    createRows() {
        let rows = [];
        for (let i = 1; i < 50; i++) {
            if( i % 2 === 0){
                rows.push({
                    id: i,
                    direct: 'Direct',
                    region: 'Asia',
                    country: 'India',
                    operator: 'India Telecom(Salaam)',
                    coverage: i * 500/100,
                    options: 'Vodafone',
                    smpp: 'SMPP',
                    tpoa: 'No',
                    mobile: 'No',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            }else if( i % 3 === 0 ){
                 rows.push({
                    id: i,
                    direct: 'Classic',
                    region: 'Africa',
                    country: 'U.S',
                    operator: 'U.S Telecom(Salaam)',
                    coverage: i * 500/100,
                    options: 'Idea',
                    smpp: 'SS7',
                    tpoa: 'Yes',
                    mobile: 'Yes',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            }else if(i % 5 === 0){
                 rows.push({
                    id: i,
                    direct: 'Direct',
                    region: 'Asia',
                    country: 'India',
                    operator: 'India Telecom(Salaam)',
                    coverage: i * 500/100,
                    options: 'Vodafone',
                    smpp: 'SMPP',
                    tpoa: 'No',
                    mobile: 'No',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            }else{
                rows.push({
                    id: i,
                    direct: 'Classic',
                    region: 'Africa',
                    country: 'U.S',
                    operator: 'U.S Telecom(Salaam)',
                    coverage: i * 500/100,
                    options: 'Idea',
                     smpp: 'SS7',
                    tpoa: 'Yes',
                    mobile: 'Yes',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            }
            
        }

        return rows;
    }

    render(){
        return(
        <div className="container">
        <BootstrapTable data={this.createRows()} deleteRow={ true } exportCSV={ true } insertRow={ true } cellEdit={ cellEditProp } striped selectRow={ selectRowProp } pagination>
            <TableHeaderColumn isKey dataField='id' export={ false }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='direct' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Direct/HQ</TableHeaderColumn>
            <TableHeaderColumn dataField='region' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Region</TableHeaderColumn>
            <TableHeaderColumn dataField='country' headerAlign='center' dataAlign='center' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Country</TableHeaderColumn>
            <TableHeaderColumn dataField='operator' headerAlign='center' dataAlign='center' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Operator</TableHeaderColumn>
            <TableHeaderColumn dataField='coverage' editable={ false } dataSort={true} dataFormat={ ProgressFormatter } filter={ { type: 'NumberFilter'} }>% Coverage</TableHeaderColumn>
            <TableHeaderColumn dataField='options' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Operator Options</TableHeaderColumn>
            <TableHeaderColumn dataField='smpp' editable={ false } filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>SMPP/SS7</TableHeaderColumn>
            <TableHeaderColumn dataField='tpoa' editable={ false } filter={ { type: 'SelectFilter', options: ack } } dataFormat={ enumFormatter } formatExtraData={ ack }>Alphanumeric TPOA Supported</TableHeaderColumn>
            <TableHeaderColumn dataField='mobile' editable={ false } filter={ { type: 'SelectFilter', options: ack } } dataFormat={ enumFormatter } formatExtraData={ ack }>Mobile Ack</TableHeaderColumn>
            <TableHeaderColumn dataField='first' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter'} } dataFormat={ formatFloat }
          filterFormatted>1-2,50,000</TableHeaderColumn>
            <TableHeaderColumn dataField='second' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter'} } dataFormat={ formatFloat }
          filterFormatted>2,50,001-5,00,000</TableHeaderColumn>
            <TableHeaderColumn dataField='third' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter'} } dataFormat={ formatFloat }
          filterFormatted>5,00,001-10,00,000</TableHeaderColumn>
            <TableHeaderColumn dataField='fourth' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter'} } dataFormat={ formatFloat }
          filterFormatted>10,00,001-Over</TableHeaderColumn>
  </BootstrapTable></div>
        );
    }
}

export default BootstrapGrid