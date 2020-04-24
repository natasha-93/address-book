import React from "react";
import { useParams } from "react-router-dom";

function Contact({ contacts, onEdit }) {
  let { userId } = useParams();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === Number(userId)
  );
  const contact = contacts[contactIndex];

  if (contact == null) return <h3>User Not Found</h3>;

  function editContact(e) {
    const key = e.target.name;

    const editedContact = {
      ...contact,
      [key]: e.target.value,
    };

    onEdit(contactIndex, editedContact);
  }

  return (
    <>
      <h3>Requested user: ID {contact.id}</h3>
      <input value={contact.name} name="name" onChange={editContact} />
      <input value={contact.email} name="email" onChange={editContact} />
      <input name="phone" value={contact.phone} onChange={editContact} />
    </>
  );
}

export default Contact;
