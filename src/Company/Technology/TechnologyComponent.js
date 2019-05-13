import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class SilosComponent extends Component{
    render(){
        return(
            
<div id="container" style={{background:"white", padding:"5em", color:"black"}}>
	<div className="container">
		<div className="title">
			<h1>Developing Modern Web apps with React.js</h1>
			<span className="">Better user experience is now derived from the speed of the application and as more customers start using a particular technology, companies have to strive towards scalability</span>
		</div>
		<div className="row">
		<div className="col-md-4">
            <h3>Seamless SEO Integration</h3>
			<p>
            For any online business, content is king. Search Engine Optimization is the gateway to boost user traffic onto their platform. React significantly reduces page load time through faster rendering speed, adapts it performance in real-time based on current user traffic, features that are otherwise not perfectly handled by most frameworks.
            </p>
			<Link to="/Contact" className="button button-alt">More Info</Link>
		</div>
		<div className="col-md-4">
            <h3>Ease of Migration</h3>
			<p>
            React; is lightweight and practically wrapped around the same JavaScript standards that made developers and manager alike, to fall in love with this language in the first place. React code can be added anywhere onto existing infrastructure without worry of shutting down the system for maintenance and also less dependency to reinvent the wheel.
            </p>
			<Link to="/Contact" className="button button-alt">More Info</Link>
		</div>
		<div className="col-md-4">
        <h3>Improve Code Stability With Tests</h3>
			<p>
            Businesses looking to create fault tolerant user interface will find ReactJS as the go-to choice. The component creation aspect of this library allows developers to efficiently perform unit testing, making sure no system crashes occur. Code reuse enables for curtailing time performing redundant tests. Adding such tests improves standards in code quality; hence, platform stability.
            </p>
			<Link to="/Contact" className="button button-alt">More Info</Link>
		</div>
		</div>
	</div>
</div>
        )
    }
}