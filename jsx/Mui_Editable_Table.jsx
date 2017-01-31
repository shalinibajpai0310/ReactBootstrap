import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MuiEditableTable from "mui-editable-table";


const colS = [
    {title: 'Title', fieldName: 'title', inputType: "SelectField", selectOptions: ["Mr", "Mrs", "Miss", "Other"], width: 200, defaultValue: 'Mr'},
    {title: 'Name', fieldName: 'foreName', inputType: "TextField", width: 200},
    {title: 'Surname', fieldName: 'surname', inputType: "TextField", width: 200},
    {title: 'Maiden Name', fieldName: 'maidenName', inputType: "TextField", width: 200},
    {title: 'Employed', fieldName: 'employed', inputType: "Toggle", width: 200}
];

const rowS = [
    { title: 'Mr', foreName: 'John', surname: 'Smith', employed: true},
    { title: 'Miss', foreName: 'Emily', surname: 'Lockhart', employed: false},
    { title: 'Mrs', foreName: 'Marilyn', surname: 'Monroe', employed: true}
];

const onChange = (dataTable) => {
    console.log(dataTable)
};

export default class Mui_Editable_Table extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render() {
        return (
            <MuiEditableTable
                colSpec={colS}
                rowData={rowS}
                onChange={onChange}
                reorderable={true}
            />
        );
    }
}

Mui_Editable_Table.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
