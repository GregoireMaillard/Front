import React, { Component } from 'react';
import './App.css';
import './Form.css';


class Form extends Component {
  render() {
    return (
      <div className="Form">
      <p>Formulaire pour injecter de la donnee dans notre API.</p>
        <form>
          <label>
            Nom<br/></label>
            <input type="text" name="name" /><br/><br/>
            <label>Type<br/>
            </label>
            <input type="text" name="type" /><br/><br/>
            <label>Quantite<br/>
            </label>
            <input type="text" name="quantite" /><br/><br/>
        
          <button type="submit">ENVOYER</button>
        </form>
      </div>
    );
  }
}
export default Form;