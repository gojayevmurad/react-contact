import React, { useEffect, useState } from "react";

const ContactsList = ({ contacts }) => {
  const [keyword, setKeyword] = useState("");


  const filtered = contacts.filter((el) => {
    return Object.keys(el).some((key) =>
      el[key].toString().toLowerCase().includes(keyword.toLowerCase())
    );
  });

  // let contactsList = filtered ? filtered : contacts;

  return (
    <>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        type="search"
        placeholder="Filter content"
      />
      <p>Total contacts ({filtered.length})</p>
      <ul>
        {filtered.map((contact, index) => {
          return (
            <li key={index}>
              {contact.fullname}-------{contact.phone_number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactsList;
