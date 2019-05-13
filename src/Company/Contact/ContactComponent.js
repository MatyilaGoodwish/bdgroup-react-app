import { Link } from 'react-router-dom';
import React ,{ Component } from 'react';

export default class ContactComponent extends Component{
    render(){
        return(
            <div>
                 
<div id="container" style={{padding:"5em", background:"white", color:"black"}}>
	<div className="container">
		<div className="title">
      <h1>Contact Information</h1>  
			<span> 
                Get intouch with us to discuss your next project goals and planning.
            </span>
		</div>
        <div className="row">
        <div className="col-md-4">
            <h3>Billing Support</h3>
			 
                <ul>
                    <li>M. Nomakhosi</li>
                    <li>Tel: 087 057-1581</li>
                    <li>Email: nomakhosi@bdsoft.co.za</li>
                </ul>
             
			<Link to="/Public" className="button button-alt">Back</Link>
		</div>
		<div className="col-md-4">
        <h3>Developer Support</h3>
			 
                <ul>
                    <li>Goodwish Matyila</li>
                    <li>Tel: 087 057-1581</li>
                    <li>Cell: 082 632-5761</li>
                    <li>Email: gsm@bdsoft.co.za</li>
                </ul>
             
			 
		</div>
		<div className="col-md-4">

        <h3>Technical Support</h3>
			 
                <ul>
                    <li>M. Simar</li>
                    <li>Tel: 087 057-1581</li>
                    <li>Email: m.simar@bdsoft.co.za</li>
                </ul>
             
			 
		</div>
        </div>
		
	</div>
    
 
</div>  

            </div>
        )
    }
}