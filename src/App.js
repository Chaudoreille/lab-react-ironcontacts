import { useState } from "react";
import "./App.css";
import contactDB from "./contacts.json";

function ContactList(props) {
    const { contacts, setContacts } = { ...props };
    return (
        <table className="ContactList">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => {
                    return (
                        <tr>
                            <td>
                                <img src={contact.pictureUrl} alt="" />
                            </td>
                            <td>{contact.name}</td>
                            <td>{Number(contact.popularity).toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

function App() {
    const [contacts, setContacts] = useState(contactDB.slice(0, 5));
    return (
        <div className="App">
            <h1>IronContacts</h1>
            <ContactList contacts={contacts} setContacts={setContacts} />
        </div>
    );
}

export default App;
