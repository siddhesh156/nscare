import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import  LeftContainer  from './Components/LeftContainer';
import RightContainer from './Components/RightContainer';
import CardContainers from './Components/CardContainers';


function App() {
  return (
    <div className="App">
       <NavBar />

        <div id="left-container" className="white left">
            <LeftContainer />
        </div>

        <div id="right-container" className="white right">
            <RightContainer />
        </div>

        <div>
          
          <div id="img" className="">
            <img className="App-logo" src={require('./tooth.jpeg')} alt="logo" />
            </div>
          </div>
          
          <div id="">
            <CardContainers />
          </div>
          


        

        
      </div>
  );
}

export default App;





{/* <img src={logo} className="App-logo" alt="logo" /> 

<div id="img" className="container center blue">
          <img className="App-logo" src={require('./tooth.jpeg')} alt="logo" />
          </div>




*/}