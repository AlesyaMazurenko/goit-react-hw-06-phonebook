import React, { useState } from "react";
import { nanoid } from 'nanoid';
import './form.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contacts-selector";
import { addContact } from "redux/contacts/contacts-slice";

const initialState = {
  name: '',
  number: '',
}

const Form = () => {

  const [state, setState] = useState(initialState);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };
  
  const isDuplicate = ({ name, number }) => {
    const resullt = contacts.find((item) => item.name === name || item.number === number)
    return resullt;
  } 

  const handleSubmit = (evt) => {
    evt.preventDefault();  

    if (isDuplicate({ name, number })) {
      return alert(`Contact with name ${name} or number ${number} is already in list`)
    }

    const action = addContact({ name, number });
    dispatch(action);
    reset();
  }
    
  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor={nameId} className='form_label'>Name
        <input
          type="text"
          name="name" //name cовпадает с полем в state.name!!
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="input_field"
          value={name}
          onChange={handleInputChange}
          id={nameId} />
      </label>
      <label htmlFor={numberId} className='form_label'>Number
        <input
          type="tel"
          name="number" //name cовпадает с полем в state.name!!
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="input_field"
          value={number}
          onChange={handleInputChange}
          id={numberId} />
      </label> 
      <button type="submit" className='form_btn'>Add contact</button>
    </form>
  );
}

export default Form;

