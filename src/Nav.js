import React from 'react';

class Nav extends React.Component {
	render() {
		return(
<div className="bottom-left">
<div className="bottom">
	    <ul className="abc">
	    <li className="accordion-collapsed">
	    <span id="cust">Customer Service</span>
	    <ul className="footer-links-list" >
	    <li className="footer-link internal">
	    <a className="footer-link internal-link" title="FAQ" href="/en_IN/info/faq/eus580006" >FAQ</a>
	    </li>
	    <li className="footer-link internal" >
	    <a href="/en_IN/myaccount/trackMyOrder.jsp" target="" className="footer-link" title="Track My Order">Track My Order</a>
	    </li> 
	    <li className="footer-link internal"><a classname="footer-link internal" title="Returns" href="/en_IN/info/returns-exchange/eus580008">Returns
	    </a>
	    </li>
	    <li className="footer-link internal"><a className="footer-link internal" title="Shipping Terms" href="/en_IN/info/shipping-terms/eus580009">Shipping Terms</a>
	    </li>
	    <li className="footer-link internal"><a className="footer-link internal" title="Payment Policy" href="/en_IN/info/payment-policy/eus580007">Payment Policy</a>
	    </li>
	    <li className="footer-link internal" ><a className="footer-link internal" title="Contact Us" href="/en_IN/contact-us" data-reactid="1678">Contact Us</a>
	    </li>
	    <li className="footer-link internal" ><a className="footer-link internal" title="Warranty &amp; Repair" href="/en_IN/info/warranty-repair/eus580012">Warranty &amp; Repair</a>
	    </li>
	    </ul>
	    </li>
	    </ul>
</div>
<div className="bottom">
	    <ul className="abc">
		<li >
        <span id="cust">My Account</span>
        <ul className="footer-links-list">
        <li><a className="footer-link internal" title=" create accounts" href="/en_IN/info/warranty-repair/eus580012">Create Account</a>
        </li>
        <li><a className="footer-link internal" title="accounts" href="/en_IN/info/warranty-repair/eus580012">Accounts</a>
        </li>
        </ul>
        </li>
        </ul>
</div>
<div className="bottom">
	     <ul className="abc">
	     <li className="bottom-items">
	     <span id="cust"> Company</span>
	     <ul  className="footer-links-list">
	     <li><a className="footer-link internal" title="about Us" href="/en_IN/info/warranty-repair/eus580012">About Us</a></li>
	     <li><a className="footer-link internal" title="Investor Relations" href="/en_IN/info/warranty-repair/eus580012">Investor Relations</a></li>
	     <li><a className="footer-link internal" title="Supply Chain" href="/en_IN/info/warranty-repair/eus580012">Supply Chain</a></li>
	     <li><a className="footer-link internal" title="Disclosure" href="/en_IN/info/warranty-repair/eus580012">Disclosure</a></li>
   		 </ul>
   		 </li>
   		 </ul>
</div>
</div>
);
}
}
export default Nav;