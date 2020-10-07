import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  toyInfo = (infoFromChild) => {
    console.log(infoFromChild)
  }
  

  render(){
    return (
      <>
        <Header title="Toy Club"/>
        { this.state.display
            ?
          <ToyForm />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={data}/>
      </>
    );
  }

}

export default App;
