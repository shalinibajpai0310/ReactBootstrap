import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const tableData = [
    {
        direct: 'Direct',
        region: 'Asia',
        country: 'India',
        operator: 'India Telecom(Salaam)',
        coverage: '0.29',
        options: '',
        smpp: 'SMPP',
        tpao: 'No',
        mobile: 'No',
        first: '€ 0.0270',
        second: '€ 0.0234',
        third: '€ 0.0450',
        fourth: '€ 1.2556'
    },
    {
        direct: 'Direct',
        region: 'Asia',
        country: 'India',
        operator: 'India Telecom(Salaam)',
        coverage: '0.29',
        options: '',
        smpp: 'SMPP',
        tpao: 'No',
        mobile: 'No',
        first: '€ 0.0270',
        second: '€ 0.0234',
        third: '€ 0.0450',
        fourth: '€ 1.2556'
    }
];

export default class TableExampleComplex extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px'
        };
    }




    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="13" tooltip="Standard" style={{textAlign: 'left', fontSize: '17px'}}>
                                Standard
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Direct/HQ" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Direct/HQ</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Region" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Region</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Destination Country" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Destination Country</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Destination Operator" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Destination Operator</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Percent Coverage" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Percent Coverage</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Destination Operator Options" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Destination Operator Options</TableHeaderColumn>
                            <TableHeaderColumn tooltip="SMPP/SS7" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>SMPP/SS7</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Alphanumeric TPOA Supported" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Alphanumeric TPOA Supported</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Mobile Ack" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>Mobile Ack</TableHeaderColumn>
                            <TableHeaderColumn tooltip="1-2,50,000" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>1-2,50,000</TableHeaderColumn>
                            <TableHeaderColumn tooltip="2,50,001-5,00,000" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>2,50,001-5,00,000</TableHeaderColumn>
                            <TableHeaderColumn tooltip="5,00,001-10,00,000" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>5,00,001-10,00,000</TableHeaderColumn>
                            <TableHeaderColumn tooltip="10,00,001-Over" style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>10,00,001-Over</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.direct}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.region}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.country}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.operator}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.coverage}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.options}</TableRowColumn >
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.smpp}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.tpao}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.mobile}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.first}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.second}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.third}</TableRowColumn>
                                <TableRowColumn style={{      whiteSpace:'normal', width:'10%' ,    position:'relative' }}>{row.fourth}</TableRowColumn>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        );
    }
}

TableExampleComplex.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};