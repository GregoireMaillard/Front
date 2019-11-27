import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  render() {
    return (
      <div className="App">
      <p>Formulaire pour injecter de la donnee dans une API.</p>
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
      </div>
    );
  }
}
export default Form;