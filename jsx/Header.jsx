import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div className="header">
			  <div className="user-icons">
			   <i className="fa fa-user-o icon" aria-hidden="true"></i>
			   <i className="fa fa-home icon" aria-hidden="true"></i>
				   <div className="sap-img"></div>
			   		</div>
           		<div className="title">
			   		Sales Overview
		  		</div>
			  <div className="search">
			  	<i className="fa fa-search fa-1x icon" aria-hidden="true"></i>
			  </div>
			
         </div>
      );
   }
}

export default Header;