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

    const sortByName = () => {
        setContacts((contactList) => {
            contactList.sort((a, b) =>
                a.name === b.name ? 0 : a.name < b.name ? -1 : 1
            );
            return [...contactList];
        });
    };

    const sortByPopularity = () => {
        setContacts((contactList) => {
            contactList.sort((a, b) => a.popularity - b.popularity);
            return [...contactList];
        });
    };

    function deleteContact(id) {
        return () =>
            setContacts((contactList) => {
                const copy = contactList.filter((celeb) => celeb.id !== id);
                return copy;
            });
    }
    return (
        <div className="App">
            <h1>IronContacts</h1>
            <div className="control-bar">
                <button onClick={addRandomContact}>Add Random Contact</button>
                <button onClick={sortByName}>Sort by Name</button>
                <button onClick={sortByPopularity}>Sort by Popularity</button>
            </div>
            <table className="ContactList">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Oscar</th>
                        <th>Emmy</th>
                        <th>Actions</th>
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
                            <td className="cup">{contact.wonOscar && "🏆"}</td>
                            <td className="cup">{contact.wonEmmy && "🏆"}</td>
                            <td>
                                <button onClick={deleteContact(contact.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
