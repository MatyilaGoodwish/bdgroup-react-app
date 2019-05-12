import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class CtaComponent extends Component{
    render(){
        return (
            <div id="welcome">
	<div class="container">
		<div class="title">
			<h1 style={{fontSize:'100px'}}>BDSoft.</h1>
			<span class="byline">
            <br/>
            <h3>Aiming primarily to provide speed, simplicity, and scalability</h3>
             <br/>
                <h5>Business Phone</h5>
                <p>+27(087) 057-1581</p>
                 
                <h5>Information</h5>
                <p>info@bdsoft.co.za</p>
             </span>
		</div>
	 
	</div>
</div>
        )
    }
}