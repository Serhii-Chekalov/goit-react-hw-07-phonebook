export const contacts = (state) => state.contacts.items;
export const filter = (state) => state.contacts.filter;

export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const visibleContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  if (filter !== "") {
    if (contacts !== []) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  } else {
    return contacts;
  }
};
