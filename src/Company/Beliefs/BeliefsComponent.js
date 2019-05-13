import React ,{ Component } from 'react'; 

export default class Beliefs extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>        
                <div id="container" style={{padding:"5em", background:"white", color:"black"}}>
                    <div class="container">
                        <div class="title">
                    <h1>Our Beliefs Methodology</h1>  
                            <span>We focus on the company’s objectives and goals
                            ,The agile approach is what keeps us going.

                That is why we always recommend developing software for our clients with the Scrum Methodology, usually working in 14-day sprints schedule.
                
                            </span>
                        </div>
                        <div class="row">
                        <div class="col-md-4">
                            <h3>Technology comes next.</h3>
                            <p>
                            We understand that the key is to choose the best technology which will ensure your business expectations are met and based on that, create tailor-made software. Our goal is to help you save you a fortune on useless made-to-order IT products which tempt you with tech buzzwords which don’t necessarily improve your business growth.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <h3>Isomorphic Environment</h3>
                            <p>
                            The fundamental difference between regular SPA and isomorphic SPA is that in isomorphic SPA you will process several requests simultaneously, therefore you should somehow deal with a global user-dependent state (like current language, flux stores state etc).
                            </p>
                    </div>
                        <div class="col-md-4">

                        <h3>Improve Code Stability With Tests</h3>
                            <p>
                            Businesses looking to create fault tolerant user interface will find ReactJS as the go-to choice. The component creation aspect of this library allows developers to efficiently perform unit testing, making sure no system crashes occur. Code reuse enables for curtailing time performing redundant tests. Adding such tests improves standards in code quality; hence, platform stability.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                
                    <div style={{padding:'5em'}}>
                            <img src={require('../../images/scrum.png')} style={{width:'100%'}}/>
                </div>
                </div>  

            </div>
        )
    }
}