import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contacts({ onDelete, contacts, onAdd }) {
  const [search, setSearch] = useState("");
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    id: contacts[contacts.length - 1].id + 1,
  });

  function filterByName(contact) {
    const regex = new RegExp(`^${search}`, "i");

    return regex.test(contact.name);
  }

  return (
    <div>
      <input
        value={search}
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(newContact);
          setNewContact({
            name: "",
            email: "",
            phone: "",
            id: newContact.id + 1,
          });
        }}
      >
        <input
          required
          value={newContact.name}
          placeholder="Name"
          onChange={(e) => {
            setNewContact({ ...newContact, name: e.target.value });
          }}
        />
        <input
          required
          value={newContact.email}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setNewContact({ ...newContact, email: e.target.value });
          }}
        />
        <input
          required
          value={newContact.phone}
          type="number"
          placeholder="Phone"
          onChange={(e) => {
            setNewContact({ ...newContact, phone: e.target.value });
          }}
        />
        <button>Add New Contact</button>
      </form>
      <ul>
        {contacts.filter(filterByName).map((contact, index) => {
          return (
            <li key={index}>
              <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
              <button
                onClick={(e) => {
                  onDelete(index);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contacts;
