import React from 'react';
import Header from './Header.jsx';
import Welcome from './Welcome.jsx';

class App extends React.Component {
   render() {
      return (
		  <div>
         <div>
			  <Header></Header>
         </div>
		  <div>
			  <Welcome></Welcome>
		  </div>
			  </div>
      );
   }
}

export default App;