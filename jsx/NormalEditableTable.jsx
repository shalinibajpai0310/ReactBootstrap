import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import EditTable from 'material-ui-table-edit';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const headers = [
    {value: 'Name', type: 'TextField', width: 200},
    {value: 'Address', type: 'TextField', width: 200},
    {value: 'Phone', type: 'TextField', width: 200},
    {value: 'Enabled', type: 'Toggle', width: 50},
    {value: 'Last Edited By', type: 'ReadOnly', width: 100}
]

const rows = []

const onChange = (row) => {
    console.log(row)
}

export default class NormalEditableTable extends React.Component {

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
            <EditTable
                onChange={onChange}
                rows={rows}
                headerColumns={headers}
            />
        );
    }
}

NormalEditableTable.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};