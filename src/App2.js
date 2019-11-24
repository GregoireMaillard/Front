import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
  render() {
    return (
      <div className="App">
      <p>Formulaire simple qui vous permettra d’injecter de la donnée dans votre API.</p>
        <form>
          <label>
            Nom : 
            <input type="text" name="lastname" /><br/>
            Prenom :
            <input type="text" name="name" /><br/>
            Age :
            <input type="text" name="age" /><br/>
            Moyenne :
            <input type="text" name="moyenne" /><br/>
            Salaire :
            <input type="text" name="salaire" /><br/>
          </label>
          <input type="submit" value="Envoyer" />
        </form>
        <a
            href="src/App.js"
          >PAGE 1
          </a>
          <br/>
          <a
            href="src/App2.js"           
          >
            PAGE 2
          </a>
      </div>
    );
  }
}
export default App2;