import React from 'react'
import ReactDOM from  'react-dom'
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

function priceFormatter(cell, row) {
    return `<i class='glyphicon glyphicon-euro'></i> ${cell}`;
}


function ProgressFormatter(cell, row) {
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
    Yes: 'Yes',
    No: 'No'
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

function handleInsertButtonClick() {
    console.log("Button Clicked");
}

function createCustomInsertButton() {
    return (
        <InsertButton onClick={ this.handleInsertButtonClick() }/>
    );
}

class BootstrapGrid extends React.Component {

    createRows() {
        let rows = [];
        for (let i = 1; i < 100; i++) {
            if (i % 2 === 0) {
                rows.push({
                    id: i,
                    direct: 'Direct',
                    region: 'Asia',
                    country: 'India',
                    operator: 'India Telecom(Salaam)',
                    coverage: i * 500 / 100,
                    options: 'Vodafone',
                    smpp: 'SMPP',
                    tpoa: 'No',
                    mobile: 'No',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            } else if (i % 3 === 0) {
                rows.push({
                    id: i,
                    direct: 'Classic',
                    region: 'Africa',
                    country: 'U.S',
                    operator: 'U.S Telecom(Salaam)',
                    coverage: i * 500 / 100,
                    options: 'Idea',
                    smpp: 'SS7',
                    tpoa: 'Yes',
                    mobile: 'Yes',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            } else if (i % 5 === 0) {
                rows.push({
                    id: i,
                    direct: 'Direct',
                    region: 'Asia',
                    country: 'India',
                    operator: 'India Telecom(Salaam)',
                    coverage: i * 500 / 100,
                    options: 'Vodafone',
                    smpp: 'SMPP',
                    tpoa: 'No',
                    mobile: 'No',
                    first: '0.0270' + i,
                    second: '0.0234' + i,
                    third: '0.0450' + i,
                    fourth: '1.2556' + i
                });
            } else {
                rows.push({
                    id: i,
                    direct: 'Classic',
                    region: 'Africa',
                    country: 'U.S',
                    operator: 'U.S Telecom(Salaam)',
                    coverage: i * 500 / 100,
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

    render() {
        const options = {
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                    text: '10', value: 10
                }, { text: '50', value: 50 }, {
                    text: 'All', value: (this.createRows()).length
                }], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: '<', // Previous page button text
            nextPage: '>', // Next page button text
            //   firstPage: 'First', // First page button text
            //   lastPage: 'Last', // Last page button text
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            onAdd: this.createCustomInsertButton
        };
        return (
            <div className="container">
                <BootstrapTable data={this.createRows() } deleteRow={ true } exportCSV={ true } cellEdit={ cellEditProp } striped selectRow={ selectRowProp } pagination={true} options={ options } insertRow>
                    <TableHeaderColumn row="0" rowSpan='3' isKey dataField='id' export={ false }>ID</TableHeaderColumn>
                    <TableHeaderColumn row="0" rowSpan='3' dataField='direct' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Direct/HQ</TableHeaderColumn>
                    <TableHeaderColumn row="0" rowSpan='3' dataField='region' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Region</TableHeaderColumn>
                    <TableHeaderColumn row="0" rowSpan='3' dataField='country' headerAlign='center' dataAlign='center' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Country</TableHeaderColumn>
                    <TableHeaderColumn row="0" rowSpan='3' dataField='operator' headerAlign='center' dataAlign='center' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Operator</TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='5' headerAlign='center'>By Performance</TableHeaderColumn>
                    <TableHeaderColumn row="1" rowSpan='2' dataField='coverage' editable={ false } dataSort={true} dataFormat={ ProgressFormatter } filter={ { type: 'NumberFilter' } }>% Coverage</TableHeaderColumn>
                    <TableHeaderColumn row="1"  rowSpan='2' dataField='options' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Operator Options</TableHeaderColumn>
                    <TableHeaderColumn row="1"   rowSpan='2' dataField='smpp' editable={ false } filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>SMPP/SS7</TableHeaderColumn>
                    <TableHeaderColumn row="1"  rowSpan='2' dataField='tpoa' editable={ false } filter={ { type: 'SelectFilter', options: ack } } dataFormat={ enumFormatter } formatExtraData={ ack }>Alphanumeric TPOA Supported</TableHeaderColumn>
                    <TableHeaderColumn row="1"  rowSpan='2' dataField='mobile' editable={ false } filter={ { type: 'SelectFilter', options: ack } } dataFormat={ enumFormatter } formatExtraData={ ack }>Mobile Ack</TableHeaderColumn>
                    <TableHeaderColumn row='0'  colSpan='4'  headerAlign='center'>By Price</TableHeaderColumn>
                    <TableHeaderColumn row='1'  colSpan='4'  headerAlign='center'>Volume Banded SMS MT Fee (Max) </TableHeaderColumn>
                    <TableHeaderColumn row="2" dataField='first' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>1-2, 50, 000</TableHeaderColumn>
                    <TableHeaderColumn row="2" dataField='second' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>2, 50, 001-5, 00, 000</TableHeaderColumn>
                    <TableHeaderColumn row="2" dataField='third' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>5, 00, 001-10, 00, 000</TableHeaderColumn>
                    <TableHeaderColumn row="2" dataField='fourth' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>10, 00, 001-Over</TableHeaderColumn>
                </BootstrapTable></div>
        );
    }
}

export default BootstrapGrid