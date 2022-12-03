import React from "react";
// import { useEffect } from "react";
import { nanoid } from 'nanoid';
import Form from "./Form/Form";
import Filter from  './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './Form/form.css';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from "../redux/contacts/contacts-slice";
import { setFilter } from "../redux/filter/filter-slice";
// import { combineReducers }  from "redux";

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  

  const isDuplicate = ({ name, number }) => {
        const resullt = contacts.find((item) => item.name === name || item.number === number)
        return resullt;
  } 
  
    const formSubmitHandler = (name, number) => {

      //   const isDuplicate = ({ name }) => {
      // const result = contacts.find((item) => item.name === name);
      // return result;
      //   }
      
  
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
      
          if (isDuplicate(contact)) {
      return alert(`Contact with name ${contact.name} or number ${contact.number} is already in list`)
    }
    
    const action = addContact(contact);
    dispatch(action);
  

    // if (isDuplicate(contact)) {
    //   return alert(`${contact.name} is already in contacts`);
    // }

  
  };

  const onRemoveContact = (id) => {
    const action = removeContact(id);
    dispatch(action);
  }

  
  const filterInput = (evt) => {
    const { value } = evt.target;
    dispatch(setFilter(value));
    // setFilter(value);
  }

   const getVisibleContacts = (e) => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter) || number.includes(normalizeFilter);
      return result;
    })
    return filteredContacts;
  }
 
    const visibleContacts = getVisibleContacts();
  // console.log(visibleContacts);
  
  return (
      <>
      <div className="form_wrapper">
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
         </div> 
      <div className="phonebook_contaner">
        <h2> Contacts</h2>

        <Filter value={filter} onChange={filterInput} />
        <ContactList className="phonebook-container" items={visibleContacts} removeContact={onRemoveContact} />
     </div>
      </>
    )
  
}


