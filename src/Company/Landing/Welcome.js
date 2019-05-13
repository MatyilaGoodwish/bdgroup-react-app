import React ,{ Component } from 'react';

export default class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                 
            <div   style={{padding:"0em", background:"white", color:"black"}}>
                    <div  className="row">
                        <div className="col-md-12">
                            <img src={require('../../images/pwa.png')} style={{width: "100%"}} alt="pwa"/>
                        </div>
                    </div>
            </div>  
            </div>
        )
    }
}