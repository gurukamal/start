import React from 'react';

import {Link } from 'react-router-dom';

class Appcomp extends React.Component {
   render() {
      return (
         <div>
           
            <ul>
               <li> <Link to="/women">Women</Link></li>
               <li> <Link to="/men">Men</Link></li>
               <li> <Link to="/collection">Collection</Link></li>
               <li> <Link to="/handbags">Handbags</Link></li>
               <li> <Link to="/shoes">Shoes</Link></li>
               <li> <Link to="/watches">Watches</Link></li>
               <li> <Link to="/accessories">Accessories</Link></li>
               <li> <Link to="/gifts">Gifts</Link></li>
            </ul>
      
         </div>
      )
   }
}
export default Appcomp;