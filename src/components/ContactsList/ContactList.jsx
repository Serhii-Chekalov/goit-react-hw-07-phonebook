import { List, ListItem, Button } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/PhoneBook/operation.js";
import { visibleContacts } from "../../redux/PhoneBook/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <List>
        {filteredContacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <ListItem key={id}>
              {name} - {number}
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ContactList;
