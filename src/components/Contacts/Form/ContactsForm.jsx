import React, { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

const ContactsForm = ({ setContacts, contacts }) => {
  const [contact, setContact] = useState(initialFormValues);

  useEffect(() => {
    setContact(initialFormValues);
  }, [contacts]);

  const onChangeForm = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const submitted = (e) => {
    e.preventDefault();

    if (contact.fullname == "" || contact.phone_number == "") return false;

    setContacts([...contacts, contact]);
    e.target.fullname.value = "";
    e.target.phone_number.value = "";

    return true;
  };

  return (
    <form onSubmit={submitted}>
      <div>
        <input
          onChange={onChangeForm}
          name="fullname"
          type="text"
          placeholder="Full name"
        />
      </div>
      <div>
        <input
          onChange={onChangeForm}
          name="phone_number"
          type="text"
          placeholder="Phone number"
        />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ContactsForm;
