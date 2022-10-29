import './contact.css';
import PropTypes from 'prop-types';

export default function ContactList({ items, removeContact }) {
    console.log(items);
    const elements = items.map(({ name, id, number }) => {
        return <li className="contacts_item" key={id}>
            {name}: {number}
            <button type="button" className='btn_remove' onClick={() => removeContact(id)}>Remove</button>
        </li>
    })

    return (
        <ul className="contact=list">{elements}</ul>
    )
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
    })).isRequired,
    removeContact: PropTypes.func.isRequired,
}
