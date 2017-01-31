import React from 'react';
import Header from './Header.jsx';
import Welcome from './Welcome.jsx';
import Dashboard from './Dashboard.jsx';
import TableExampleComplex from './TableExampleComplex.jsx';
import Mui_Data_Table from './Mui_Data_Table.jsx';
import Mui_Editable_Table from './Mui_Editable_Table.jsx';
import NormalEditableTable from './NormalEditableTable.jsx';
import Griddle_Table from './Griddle_Table.jsx';
import Datagrid from './Datagrid.jsx';
import Example from './Wizard.jsx';


class App extends React.Component {
   render() {
      return (
		  <div>
              <Header/>
              <Welcome/>
              <Dashboard/>
          </div>
      );
   }
}

export default App;