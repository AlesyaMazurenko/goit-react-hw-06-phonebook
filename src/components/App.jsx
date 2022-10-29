import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Form from "./Form/Form";
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './Form/form.css'

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
      // Добавляем запись в state - распыляем новую запись в список контактов
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    
  };

  removeContact = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id);

      return {
        contacts: newContacts
      }
    })
  }

  FilterInput = (evt) => {
    this.setState({ filter: evt.currentTarget.value })
  }

  isDuplicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find((item) => item.name === name);
      // &&
      // item.number === number);
    return result;
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
     const normalizedFilter = filter.toLowerCase();
   
     //выбираем список по фильтру, что быдем рендерить
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
  }

  // Стадия монтирования - вызывается 1 раз при загрузке
  componentDidMount() {
    console.log('App componentDidMount');

    const contacts1 = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts1);

    //записываем в State, не важно предыдущее состояние
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });    
    }
    
  }

  // Стадия обновления = вызывается кажлый раз
  componentDidUpdate(prevProps, prevState) {
    console.log('App Стадия обновления  componentDidUpdate');

    // обязательно перед отновлением проверяем дыйствительно ли изменилось, иначе зациклится компонент!!!!
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { formSubmitHandler, removeContact } = this;
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="form_wrapper">
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2> Contacts</h2>

        <Filter value={filter} onChange={this.FilterInput} />
        <ContactList items={visibleContacts} removeContact={removeContact} />
      </div> 
    )
  }
}
