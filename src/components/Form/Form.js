import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './form.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = evt => {
      evt.preventDefault();
      
      //передаем форме данные в App
      this.props.onSubmit(this.state.name, this.state.number);
      this.reset();

    console.log(this.state);
  }
    
    reset = () => {
        this.setState({ name: '', number: ''})
    }
    
    nameId = nanoid();
    numberId = nanoid();

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <label htmlFor={this.nameId} className='form_label'>Name
                <input
                        type="text"
                        name="name" //name cовпадает с полем в state.name!!
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className="input_field"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        id={this.nameId} />
                </label> 
                 <label htmlFor={this.numberId} className='form_label'>Number
                <input
                        type="tel"
                        name="number" //name cовпадает с полем в state.name!!
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className="input_field"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        id={this.numberId} />
                </label> 
                <button type="submit"className='form_btn'>Add contact</button>
            </form>
         );
    }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}