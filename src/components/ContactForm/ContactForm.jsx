import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addContact } from "../../redux/PhoneBook/actions";
import { contacts } from "../../redux/PhoneBook/selectors";
import { Form, Label, Input, Button } from "./ContactForm.styled";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const stateContacts = useSelector(contacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    newContact();
    setName("");
    setNumber("");
  };

  const notify = (name) => toast(`${name} is already in contacts`);

  const newContact = () => {
    const contactToAdd = {
      name,
      number,
    };

    stateContacts.some((contact) => contact.name === contactToAdd.name)
      ? notify(contactToAdd.name)
      : dispatch(addContact(contactToAdd));
  };

  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <Label htmlFor="number">Number</Label>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#f8cd98",
            color: "#000",
          },
        }}
      />
    </>
  );
}

export default ContactForm;
