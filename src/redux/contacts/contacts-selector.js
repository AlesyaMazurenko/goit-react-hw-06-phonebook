import { getFilter } from "redux/filter/filter-selectors";

export const getContacts = store => store.contacts;

export const getFilteredContacts = state => {

    const contacts = getContacts(state);
    const filter = getFilter(state);

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
 