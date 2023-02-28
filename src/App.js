import { useState } from "react";
import "./App.css";
import contactDB from "./contacts.json";

function App() {
    const [contacts, setContacts] = useState(contactDB.slice(0, 5));
    const addRandomContact = () => {
        setContacts((contactList) => {
            const filteredCelebs = contactDB.filter(
                (celeb) => contactList.indexOf(celeb) === -1
            );
            const randomNum = Math.floor(Math.random() * filteredCelebs.length);
            return [...contactList, filteredCelebs[randomNum]];
        });
    };
    return (
        <div className="App">
            <button onClick={addRandomContact}>Add Random Contact</button>
            <h1>IronContacts</h1>
            <table className="ContactList">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Oscar</th>
                        <th>Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>
                                <img src={contact.pictureUrl} alt="" />
                            </td>
                            <td>{contact.name}</td>
                            <td>{Number(contact.popularity).toFixed(2)}</td>
                            <td>{contact.wonOscar && "🏆"}</td>
                            <td>{contact.wonEmmy && "🏆"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
