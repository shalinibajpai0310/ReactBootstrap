import React from 'react'
import ReactDOM from  'react-dom'
import { BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'

const qualityType = {
  good: 'good',
  bad: 'bad',
  unknown: 'unknown'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}



var products = [{
      id: 1,
      name1: "Product1",
       name2: "Product1",
       quality:'good',
      price: 120
  }, {
      id: 2,
      name1: "Product2",
      name2: "Product2",
       quality:'bad',
      price: 90
  }, {
       id: 2,
      name1: "Product2",
      name2: "Product2",
       quality:'unknown',
      price: 10
  }, {
       id: 2,
      name1: "Product2",
      name2: "Product2",
       quality:'bad',
      price: 60
  }];
class AllFilters extends React.Component {
  
  render() {
    return (
      <BootstrapTable ref='table' data={ products }>
        <TableHeaderColumn ref='name1'isKey dataField='name1' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref='name2' dataField='name2' filter={ { type: 'RegexFilter', placeholder: 'Please enter a regex' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Product Quality</TableHeaderColumn>
        <TableHeaderColumn ref='price' dataField='price' filter={ { type: 'NumberFilter', delay: 1000 } }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default AllFilters;