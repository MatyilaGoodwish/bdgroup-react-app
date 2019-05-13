import { Link } from 'react-router-dom';
import React ,{ Component } from 'react';

export default class SupportComponent extends Component{
    render(){
        return(
            <div>
                 
<div id="container" style={{padding:"5em", background:"white", color:"black"}}>
	<div className="container">
		<div className="title">
      <h1>Client Zone</h1>  
			<span> 
                Get Support & Manage your Accounts.
            </span>
		</div>
        <div className="row">
        <div className="col-md-6">
            <h3>Client Accounts</h3>
			<p>
               Manager account, Update/Downgrade services & Self-service.
             </p>
			<Link to="/Accounts" className="button button-alt">Accounts</Link>
		</div>
		 
		<div className="col-md-6">

        <h3>Online Support</h3>
			<p>
                Product support, Billing & Other general assistance.
             </p>
			<Link to="/Contact" className="button button-alt">Contact Info</Link>
		</div>
        </div>
		
	</div>
    
 
</div>  

            </div>
        )
    }
}