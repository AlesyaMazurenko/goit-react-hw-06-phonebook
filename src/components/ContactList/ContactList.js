import './contact.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { removeContact } from 'redux/contacts/contacts-slice';

export const ContactList = () => {
    
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    
    const onRemoveContact = (id) => {
        const action = removeContact(id);    
        dispatch(action);
    }
    
    const elements = filteredContacts.map(({ name, id, number }) => {
        return <li className="contacts_item" key={id}>
            
            {name}: {number}
            <button type="button" className='btn_remove' onClick={() => onRemoveContact(id)}>X</button>
        </li>
    })

    return (
        <ul className="contact_list">{elements}</ul>
    )
}

// ContactList.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })).isRequired,
//     removeContact: PropTypes.func.isRequired,
// }
