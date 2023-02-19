import ContactsList from "./List/ContactsList";
import ContactsForm from "./Form/ContactsForm";
import { useState } from "react";
import "./styles.css";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  return (
    <div className="container">
      <ContactsList contacts={contacts} />
      <ContactsForm setContacts={setContacts} contacts={contacts} />
    </div>
  );
};

export default ContactApp;
