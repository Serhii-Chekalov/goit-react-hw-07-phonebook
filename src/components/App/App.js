import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactsList/ContactList";
import Filter from "../Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "red",
            color: "#000",
          },
        }}
      />
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
