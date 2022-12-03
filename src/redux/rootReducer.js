import { combineReducers } from "redux";
// import { addContact, removeContact } from "./action";
import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-reducer";

// const taskInitilaState = [];

// export const tasksReducer = (state = taskInitilaState, action) => {
    
// }

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

// export default rootReducer;
//==============
//  export const rootReducer = createReducer([], {
//     [addContact.type]: (store, {payload}) => {
//         store.push(payload);
//     },
//     [removeContact.type]: (store, { payload }) => {
//         store.filter(({ id }) => id !== payload)
//     }
// })
//===============
// export default rootReducer;

// const filterReducer = createReducer("", {
// [setFilter.type]: (_, {payload}) => payload
// })

// export default filterReducer;


// const initialState = {
//     contacts: [],
//     filter: ""
// };

// const reducer = (store = initialState, {type,payload}) => {
//     switch (type) {
//         case ADD_CONTACT:
//             const newContact = [...store.contacts, payload];
//             return { ...store, contacts: newContact }
//         case REMOVE_CONTACT:
//             const result = store.contacts.filter((item) =>
//                 item.id !== payload);
//             return { ...store, contacts: result };
//         case SET_FILTER:
//             return { ...store, filter: payload }
//         default:
//             return store;
//     }
// }

