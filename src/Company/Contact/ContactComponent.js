import { Link } from 'react-router-dom';
import React ,{ Component } from 'react';

export default class ContactComponent extends Component{
    render(){
        return(
            <div>
                 
<div id="container" style={{padding:"5em", background:"white", color:"black"}}>
	<div class="container">
		<div class="title">
      <h1>Contact Information</h1>  
			<span> 
                Get intouch with us to discuss your next project goals and planning.
            </span>
		</div>
        <div class="row">
        <div class="col-md-4">
            <h3>Billing Support</h3>
			<p>
                <ul>
                    <li>M. Nomakhosi</li>
                    <li>Tel: 087 057-1581</li>
                    <li>Email: nomakhosi@bdsoft.co.za</li>
                </ul>
             </p>
			<Link to="/Technology" class="button button-alt">More Info</Link>
		</div>
		<div class="col-md-4">
        <h3>Developer Support</h3>
			<p>
                <ul>
                    <li>Goodwish Matyila</li>
                    <li>Tel: 087 057-1581</li>
                    <li>Cell: 082 632-5761</li>
                    <li>Email: gsm@bdsoft.co.za</li>
                </ul>
             </p>
			<Link to="/Technology" class="button button-alt">More Info</Link>
		</div>
		<div class="col-md-4">

        <h3>Technical Support</h3>
			<p>
                <ul>
                    <li>M. Simar</li>
                    <li>Tel: 087 057-1581</li>
                    <li>Email: m.simar@bdsoft.co.za</li>
                </ul>
             </p>
			<Link to="/Technology" class="button button-alt">More Info</Link>
		</div>
        </div>
		
	</div>
    
 
</div>  

            </div>
        )
    }
}