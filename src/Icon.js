import React from 'react';
import './App.css';

class Icon extends React.Component {
	render() {
		return(
			<div className="icon-bar">
<div className="icon-bar-content">
	    <ul className="bar-items">
		<li className="link" ><a href="http://www.facebook.com/michaelkors" title="Facebook" target="_blank">
		<i class="fa fa-facebook item-list" ></i>
		<span className="facebook">
		</span>
		</a>
		</li>
		<li className="link"><a href="http://www.twitter.com/michaelkors" title="Twitter" target="_blank">
		<i class="fa fa-twitter item-list"></i>
		<span classname="twitter">
		</span>
		</a>
		</li>
		<li className="link"><a href="http://www.pinterest.com/michaelkors" title="Pinterest" target="_blank">
		<i class="fa fa-pinterest-square" >
		</i>
		<span className="pinterest">
		</span>
		</a> 
	    </li>
		<li className="link"><a href="http://www.youtube.com/michaelkors" title="Youtube" target="_blank"></a>
		<i class="fa fa-youtube-play" ></i>
		<span className="youtube">
		</span>
		
		</li>
		<li className="link">
		<a href="http://www.instagram.com/michaelkors" title="instagram" target="_blank">
		<i class="fa fa-instagram"></i>
		<span className="instagram">	
		</span>
		</a>
		</li>
	    </ul>
</div>
</div>
);
}
}
export default Icon;