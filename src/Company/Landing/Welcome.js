import { Link } from 'react-router-dom';
import React ,{ Component } from 'react';

export default class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                 
<div   style={{padding:"0em", background:"white", color:"black"}}>
	 
        <div class="row">
       
		<div class="col-md-12">
        <img src={require('../../images/pwa.png')} style={{width: "100%"}}/>
	 
		</div>
        </div>
</div>  

            </div>
        )
    }
}