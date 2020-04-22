import React from "react";
import { useParams } from "react-router-dom";

function Contact({ contacts }) {
  let { userId } = useParams();
  const contact = contacts.find((contact) => contact.id === Number(userId));

  if (contact == null) return <h3>User Not Found</h3>;

  return (
    <>
      <h3>Requested user: ID {contact.id}</h3>
      <p> Name: {contact.name}</p>
      <p> Email: {contact.email}</p>
      <p> Phone: {contact.phone}</p>
    </>
  );
}

export default Contact;
