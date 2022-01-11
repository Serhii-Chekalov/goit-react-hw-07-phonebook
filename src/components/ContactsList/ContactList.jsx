import { List, ListItem, Button } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/PhoneBook/actions";
import { visibleContacts } from "../../redux/PhoneBook/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);

  return (
    <div>
      <List>
        {filteredContacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <ListItem key={id}>
              {name} - {number}
              <Button type="button" onClick={() => dispatch(removeContact(id))}>
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
