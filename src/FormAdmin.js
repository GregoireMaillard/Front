import React, { Component } from 'react';
import './App.css';
import './FormAdmin.css';


class FormAdmin extends Component {
  render() {
    return (
      <div className="FormAdmin">
      <p>Formulaire pour ajouter un administrateur.</p>
        <form>
          <label>
            Nom<br/></label>
            <input type="text" name="name" /><br/><br/>
            <label>Type<br/>
            </label>
            <input type="text" name="type" /><br/><br/>
               
          <button type="submit">ENVOYER</button>
        </form>
      </div>
    );
  }
}
export default FormAdmin;