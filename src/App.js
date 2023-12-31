import React from "react";
import personalImg from "./women-stem-web.png"
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      show : true,
      Person : { 
                fullName : "sarah",
                bio : "bio chemical engineer ", 
                imgSrc: personalImg, 
                profession:"biochemist"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={personalImg} alt="image peronel" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
      );
  }
}

export default App;