import React,{Component} from "react";

export default class FooterComponent extends Component{
    render(){
        return (
            <div id="copyright" class="container">
                <p>{new Date().getFullYear() } &copy; BDSoft. All rights reserved. </p>
            </div>
        )
    }
}