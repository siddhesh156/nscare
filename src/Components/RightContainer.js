import React, { Component } from  'react'

class RightContainer extends Component{
   state = {
       title: 'Cavity',
       descp: '',
       contacts: []
   }
    
   componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=129f9eae3a934c2bb5cd1a8ae9807064')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
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
 //console.log(this.state.contacts);
 var users = [];
 var myState = Object.entries(this.state.contacts);
 //console.log(data);
        return(
         
 <div class="row">
    <div class="col s12">
      <div class="card medium red lighten-1">
        <div className="card-content white-text text-darken-2">
        <span id="text" class="card-title"><strong>{this.state.title} </strong></span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
        </div>

        <div>

        
        </div>
        {/*<a class="btn-floating btn-large waves-effect waves-light red" onClick={this.handleChange}><i class="material-icons">add</i></a>

apiKey="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=129f9eae3a934c2bb5cd1a8ae9807064"
apikKey2='http://jsonplaceholder.typicode.com/users';
              <div>
                {this.state.contacts.map((contact) => (
                  <h5>{contact.object.acticles.title}</h5>
                ))}
              </div>
              <div>
              {
if (this.state.contacts) {
          user = this.state.contacts.map((contact) => {
            return(
              )
           });
          }
         }</div>
         <div>this.state.contacts.map((contact) => {
            
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.articles.title}</h5>
                
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          })</div>
        */}
      
       
      </div>
    </div>
  </div>
        );
        }
}

export default RightContainer