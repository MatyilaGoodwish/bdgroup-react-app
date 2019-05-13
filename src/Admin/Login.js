import React ,{ Component } from 'react';

export default class LoginComponent extends Component{

    componentDidMount(){
       
    }

    render(){
        const   OutdatedService = (e) =>{
            alert('The service is updated too');
            return e.preventDefault;
        };
         
        return(
            <div>
                 
                <div id="container" style={{padding:"5em", background:"white", color:"black"}}>
                    <div className="container">
                        <div className="title">
                    <h1>Accounts</h1> 
                            <span> 
                                Customer management and self-service.
                            </span>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <h3>Login</h3>
                            <p>
                            Manager account, Update/Downgrade services & Self-service.
                            </p>
                            <p>
                                <input type="input" className="form-control" placeholder="Email address"/>
                            </p>
                            <p>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </p>
                            <br/>
                            <button  className="button button-alt" onClick={OutdatedService}>Login</button>
                            
                        </div>
                        
                        <div className="col-md-6">

                        <h3>Register Account</h3>
                            <p>
                                Register new account for online services.
                            </p>
                            <p>
                                <input type="input" className="form-control" placeholder="Email address"/>
                            </p>
                            <p>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </p>
                            <br/>
                            <button className="button button-alt" onClick={OutdatedService}>Register</button>
                        </div>
                        </div>
                        
                    </div>
                    
                
                </div>  

            </div>
        )
    }
}