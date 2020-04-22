import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacts from "./Contacts";
import Contact from "./Contact";
import contactsJson from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJson);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/contacts/:userId">
            <Contact contacts={contacts} />
          </Route>
          <Route path="/contacts">
            <Contacts
              contacts={contacts}
              onAdd={(newContact) => {
                setContacts([...contacts, newContact]);
              }}
              onDelete={(index) => {
                setContacts(contacts.filter((contact, i) => i !== index));
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
