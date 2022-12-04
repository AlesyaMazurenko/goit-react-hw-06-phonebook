import React from "react";
import Form from "./Form/Form";
import Filter from  './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import './Form/form.css';

export function App() {
  
  return (
      <>
      <div className="form_wrapper">
        <h1>Phonebook</h1>
        <Form/>
      </div> 
      <div className="phonebook_contaner">
        <h2> Contacts</h2>
        <Filter />
        <ContactList className="phonebook-container"/>
      </div>
      </>
    )
}


