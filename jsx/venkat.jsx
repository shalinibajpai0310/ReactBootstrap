import React from 'react'
import ReactDOM from  'react-dom'
import { BootstrapTable, TableHeaderColumn, InsertButton} from 'react-bootstrap-table'
// import {BootstrapTable,TableHeaderColumn,InsertButton} from './react-bootstrap-table-patch';
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



function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);
}
const cellEditProp = {
    mode: 'click'
};

// function createCustomInsertButton(onClick) {
//    return (
//     //   <InsertButton
//     //     btnText='CustomInsertText'
//     //     btnContextual='btn-warning'
//     //     className='my-custom-class'
//     //     btnGlyphicon='glyphicon-edit'/>
//     <InsertButton onClick={ () => handleInsertButtonClick(onClick) }/>
//     );
// }

class BootstrapGrid extends React.Component {

    myReactBootstrapTable_adj() {
       
        //---fix the data table based on the header if the header size is greater than the column width(datatable)
        var tables = document.getElementsByClassName("table");
        console.log("total no of tables", tables.length)
        console.log(tables)

        var l_header_table = null;
        var l_row_table = null;
        var l_wd = null;
        for (var i = 0; i < tables.length; i++) {
            console.log("---total no of tables", tables.length)
            console.log("tables ----------------------------------", i)
            if (i % 2 == 0) { //header
                console.log("header", i)
                l_header_table = tables[i]
            } else { // row table
                console.log("row", i)
                l_row_table = tables[i]
                var first_row = l_row_table.getElementsByTagName("TR")[0];
                var tds = first_row.getElementsByTagName('TD');
                var larr_col_size = []
                for (var j = 0; j < tds.length; j++) { // width of each cell
                    console.log(tds[j].innerText, tds[j].style.width, tds[j].style.offsetWidth, tds[j].getBoundingClientRect().width)
                    larr_col_size.push(tds[j].getBoundingClientRect().width)
                }

                console.log(l_row_table)
                console.log(larr_col_size)
                console.log(l_header_table)

                var first_row = l_header_table.getElementsByTagName("TR")[0];
                var h_tds = first_row.getElementsByTagName('TH');
                for (var k = 0; k < h_tds.length; k++) { // each cell
                    console.log(h_tds[k].innerText, larr_col_size[k])
                    l_wd = h_tds[k].getBoundingClientRect().width
                    console.log(l_wd, ' ...>... ', larr_col_size[k])
                    tds[k].style.width = l_wd + 'px'
                    tds[k].style.minWidth = l_wd + 'px'
                    /*if (  l_wd > larr_col_size[k]){// if header width is greater than row width then apply that to row
                     tds[k].style.width = l_wd+'px'
                     tds[k].style.minWidth  = l_wd+'px'
                     }else{
                     tds[k].style.width = larr_col_size[k]+'px'
                     tds[k].style.minWidth  = larr_col_size[k]+'px'
                     }*/

                }

            }
        }

        //---fix the header table based on column width in the data table
        var tables = document.getElementsByClassName("table");
        console.log(tables)

        l_header_table = null;
        for (var i = 0; i < tables.length; i++) {
            console.log("tables *******************************************-", i)
            if (i % 2 == 0) { //header
                console.log("header", i)
                l_header_table = tables[i]
            } else { // row table
                console.log("row", i)
                l_row_table = tables[i]
                var first_row = l_row_table.getElementsByTagName("TR")[0];
                var tds = first_row.getElementsByTagName('TD');
                var larr_col_size = []
                for (var j = 0; j < tds.length; j++) { // width of each cell
                    console.log(tds[j].innerText, tds[j].style.width, tds[j].style.offsetWidth, tds[j].getBoundingClientRect().width)
                    larr_col_size.push(tds[j].getBoundingClientRect().width)
                }
                console.log(l_row_table)
                console.log(larr_col_size)
                console.log(l_header_table)
                var first_row = l_header_table.getElementsByTagName("TR")[0];
                var h_tds = first_row.getElementsByTagName('TH');

                for (var k = 0; k < h_tds.length; k++) {
                    console.log(h_tds[k].innerText, larr_col_size[k])
                    l_wd = h_tds[k].getBoundingClientRect().width
                    console.log(l_wd, ' __>__ ', larr_col_size[k])

                    h_tds[k].style.width = larr_col_size[k] + 'px'
                    h_tds[k].style.minWidth = larr_col_size[k] + 'px'
                }

            }
        }
    }

    createRows() {
        let rows = [];
        for (let i = 1; i < 10000; i++) {
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
    handleInsertButtonClick(onClick) {
        // do your stuff
        // onClick();   if you call the onClick, the popup modal will appear!!!, so you need to mark it
        console.log("Hello");
    }

    createCustomInsertButton(onClick) {
        return (
            //   <InsertButton
            //     btnText='CustomInsertText'
            //     btnContextual='btn-warning'
            //     className='my-custom-class'
            //     btnGlyphicon='glyphicon-edit'/>
            <InsertButton onClick={this.handleInsertButtonClick.bind(this) }/>
        );
    }

    handleInsertBtnClick(e) {
        // var fakeRow = {
        //   id: 100,
        //   name: "Product one ",
        //   price: 240
        // };
        // insert a fake row
        var tableLength = this.createRows().length;
        console.log("Length ", tableLength);
        var fakeRow = {
            id: tableLength + 1,
            direct: this.refs.direct.value,
            region: this.refs.region.value,
            country: this.refs.country.value

        }
        var result = this.refs.table.handleAddRow(fakeRow);
        if (result) {  //some error happen, ex: doesn't assign row key or row key duplicated
            console.log(result);
        }
    }


    render() {
        const options = {
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                    text: '10', value: 10
                }, { text: '50', value: 50 }, { text: '100', value: 100 }, { text: '1000', value: 1000 }, {
                    text: 'All', value: (this.createRows()).length
                }], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: '<', // Previous page button text
            nextPage: '>',// Next page button text
            //   firstPage: 'First', // First page button text
            //   lastPage: 'Last', // Last page button text
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
            afterDeleteRow: onAfterDeleteRow, // A hook for after droping rows.
            onAdd: this.createCustomInsertButton
        };
        return (
            <div className="container">

               

                <BootstrapTable  ref='table' data={this.createRows() } deleteRow={ true } exportCSV={ true } cellEdit={ cellEditProp } striped selectRow={ selectRowProp } pagination={true} options={ options } insertRow>
                    <TableHeaderColumn  isKey dataField='id' export={ false }>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='direct' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Direct/HQ</TableHeaderColumn>
                    <TableHeaderColumn  dataField='region' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Region</TableHeaderColumn>
                    <TableHeaderColumn  dataField='country' headerAlign='center' dataAlign='center' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Country</TableHeaderColumn>
                    <TableHeaderColumn  dataField='operator' headerAlign='center' dataAlign='center' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Operator</TableHeaderColumn>
                    <TableHeaderColumn dataField='coverage' editable={ false } dataSort={true} dataFormat={ ProgressFormatter } filter={ { type: 'NumberFilter' } }>% Coverage</TableHeaderColumn>
                    <TableHeaderColumn  dataField='options' filter={ { type: 'RegexFilter', placeholder: 'Please enter a value' } }>Destination Operator Options</TableHeaderColumn>
                    <TableHeaderColumn  dataField='smpp' editable={ false } filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>SMPP/SS7</TableHeaderColumn>
                    <TableHeaderColumn  dataField='tpoa' editable={ false } filter={ { type: 'SelectFilter', options: ack } } dataFormat={ enumFormatter } formatExtraData={ ack }>Alphanumeric TPOA Supported</TableHeaderColumn>
                    <TableHeaderColumn  dataField='mobile' editable={ false } filter={ { type: 'SelectFilter', options: ack } } dataFormat={ enumFormatter } formatExtraData={ ack }>Mobile Ack</TableHeaderColumn>
                    <TableHeaderColumn dataField='first' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>1-2, 50, 000</TableHeaderColumn>
                    <TableHeaderColumn  dataField='second' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>2, 50, 001-5, 00, 000</TableHeaderColumn>
                    <TableHeaderColumn  dataField='third' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>5, 00, 001-10, 00, 000</TableHeaderColumn>
                    <TableHeaderColumn  dataField='fourth' dataFormat={ priceFormatter } filter={ { type: 'NumberFilter' } }
                        filterFormatted>10, 00, 001-Over</TableHeaderColumn>
                </BootstrapTable></div>
        );
    }

    componentDidMount() {
        console.log("Inside render outside return...");
        this.myReactBootstrapTable_adj();
    }
}

export default BootstrapGrid