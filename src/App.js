import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";



class App extends React.Component {
  state = {
    display: false,
    toys: []
  };

  componentDidMount(){
    fetch('http://localhost:3000/toys')
      .then(r => r.json())
      .then((retrieveToy)=>{
        this.setState({
          toys: retrieveToy
        })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  toyInfo = (newToy) => {
    const copyOfToys = [...this.state.toys, newToy];
    this.setState({
      toys: copyOfToys
    })
  };

  deleteToyFromState = (deletedToy) => {
    let copyOfToys = this.state.toys.filter(toyObj => {
      return toyObj.id !== deletedToy
    })
    this.setState({
      toys: copyOfToys
    })
  }


  updateToyFromState =(updatedObj) =>{
    let copyOfToy = this.state.toys.map(toy => {
      if (toy.id === updatedObj.id){
        return updatedObj
      }else{
        return toy
      }
    })
    this.setState({
      toys: copyOfToy
    })
  }

  render() {
    return (
      <>
        <Header title="Toy Club" />
        {this.state.display ? <ToyForm toyInfo={this.toyInfo} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
        toys={this.state.toys}
        deleteToyFromState={this.deleteToyFromState}
        updateToyFromState={this.updateToyFromState}
        />
      </>
    );
  }
}

export default App;
