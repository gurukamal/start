import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Women from "./Women";
import Men from "./Men";
import Michael from "./Michael";
import Collection from "./Collection";
import Handbags from "./Handbags";
import Shoes from "./Shoes";
import Watches from "./Watches";
import Gifts from "./Gifts";
import './michael.css';


class Rexample extends React.Component{
	render(){
		return(
				<Router>
					<div>
					    <Route exact path = "/" component = {Michael} />
				        <Route path = "/women" component = {Women} />
				        <Route path = "/men" component = {Men} />
				        <Route path = "/collection" component = {Collection} />
				        <Route path = "/handbags" component = {Handbags} />
				        <Route path = "/shoes" component = {Shoes} />
				        <Route path = "/watches" component = {Watches} />
				        <Route path = "/gifts" component = {Gifts} /> 

			        </div>           
			    </Router>
			);
	}
}
export default Rexample;