import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlunoForm from './components/aluno/AlunoForm';

const alunoState = {
  lista: [],
  selecionado: null
}

class App extends Component {
  
  constructor(){
    super();
    this.onSave = this.onSave.bind(this);
  }

  onSave(data){
    alunoState.lista.concat(data);
  }

  render() {
    return (
      <AlunoForm onSave={this.onSave}></AlunoForm>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
