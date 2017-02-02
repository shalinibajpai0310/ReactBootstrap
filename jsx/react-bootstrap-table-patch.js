import React from 'react'
import ReactDOM from 'react-dom';
import { BootstrapTable as bt, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';

// The class below is a wrapper around react-bootstrap-table library and overrides
// the Add button click event in the toolbar which launches a form.
// We want to override that behaviour by calling props.options.onAdd event handler
class BootstrapTable extends bt {
  componentDidMount() {
    super.componentDidMount();
    var onAdd = this.props.options || {};
    //var props = this.props;
    const dom = ReactDOM.findDOMNode(this);
    const addButton = dom.getElementsByClassName('react-bs-table-add-btn')[0];
    if (addButton) {
      addButton.onclick = function onclick(event) {
        event.stopPropagation();
        onAdd.onAdd();
      };
    }
  }

  render() {
    return super.render({ ...this.props });
  }
}

export {
  BootstrapTable,
  TableHeaderColumn,
  InsertButton
};
