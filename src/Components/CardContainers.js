import React, { Component } from  'react'

class CardContainers extends Component{
   state = {
       title: 'Cavity',
       descp: ''
   }
    

     handleChange = (e) => {
        if(this.state.title == "Cavity"){

            this.setState({ title: 'Root Canal'});
            
            //console.log(no);

        }
        else{
            this.setState({ title: 'Cavity'});
            //console.log(no);
        }

        
    }

    

render(){
    
        return(

    <div id="bottom-cards" className="">
        <div  id="bottom-card-row" className="row">
            
            <div className=" col s4">
               
               <div id="bottom-card-col" class="card-panel red lighten-1 z-depth-1">
                            <div class="row valign-wrapper">
                                <div id="" class="col s3">
                                    <img  src={require('../img.jpeg')} alt="" class="circle responsive-img" /> 
                                </div>
                                <div  class="col s9">
                                    <span class="white-text left-align">
                                        This is a square image. Add the "circle" class to it to make it appear circular. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            
                                    </span>
                                    
                                </div>
                            </div>
                </div>

            </div>
           

            <div className=" col s4">

                <div id="bottom-card-col" class="card-panel red lighten-1 z-depth-1">
                            <div class="row valign-wrapper">
                                <div id="" class="col s3">
                                    <img  src={require('../img.jpeg')} alt="" class="circle responsive-img" /> 
                                </div>
                                <div  class="col s9">
                                    <span class="white-text left-align">
                                        This is a square image. Add the "circle" class to it to make it appear circular. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            
                                    </span>
                                    
                                </div>
                            </div>
                </div>
                
            </div>
            
            <div className=" col s4">

                <div id="bottom-card-col" class="card-panel red lighten-1 z-depth-1">
                            <div class="row valign-wrapper">
                                <div id="" class="col s3">
                                    <img  src={require('../img.jpeg')} alt="" class="circle responsive-img" /> 
                                </div>
                                <div  class="col s9">
                                    <span class="white-text left-align">
                                        This is a square image. Add the "circle" class to it to make it appear circular. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            
                                    </span>
                                    
                                </div>
                            </div>
                </div>
                
            </div>
           

        </div>

      

     </div>    
        );
        }
}

export default CardContainers

/*
 <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div id="" class="card-panel red lighten-1 z-depth-1">
                    <div class="row valign-wrapper">
                        <div id="" class="col s2">
                            <img  src={require('../img.jpeg')} alt="" class="circle responsive-img" /> 
                        </div>
                        <div  class="col s10">
                            <span class="white-text">
                                This is a square image. Add the "circle" class to it to make it appear circular. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
       
                            </span>
                            
                        </div>
                    </div>
            </div>
        </div>

        <div class="col offset-m2  offset-l3">
            <div class="card-panel red lighten-1 z-depth-1">
                    <div class="row valign-wrapper">
                        <div id="" class="col s2">
                            <img  src={require('../img.jpeg')} alt="" class="circle responsive-img" /> 
                        </div>
                        <div  class="col s10">
                            <span class="white-text">
                                This is a square image. Add the "circle" class to it to make it appear circular. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
       
                            </span>
                            
                        </div>
                    </div>
            </div>
        </div>


*/