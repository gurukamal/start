import React, { Component } from 'react';
import Head from './Head';
import Icon from './Icon';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render(){
return(
	
<div className="header-part">
<div className="left-content">
<Head />

<Icon />
</div>
<Nav />
</div>


    );
  }
}

export default App;
