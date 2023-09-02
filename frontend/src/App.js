import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function App() {
    const [contacts, setContacts] = useState ([]);
    const [contactName, setContactName] = useState('');

    const addContact = () => {
        fetch('http://localhost/api/contacts/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: contactName }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to add contact');
                }
            })
            .then((newContact) => {
                setContacts([...contacts, newContact]);
                setContactName('');
            })
            .catch((error) => {
                console.error('Error', error);
            });
    };

    return (

        <div class="body">     
            <h1 class="centred-heading">Contactor</h1>
            
            
            <div class="square">
                <h1 class="centred-heading">Contact</h1>
                <input type="text" placeholder='Enter Contact name here' value={contactName} onChange={(a) => setContactName(a.target.value)}></input><br></br>
                <br></br><button class="blue-button" onClick={addContact}>Create Contact</button>
            </div>

            <div class="contact-square">
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>{contact.names}</li>
                    ))}
                </ul>
            </div>
            <p class="centred-heading">Click a contact to view associated phone numbers</p>
            
        </div>
    );
}

export default App;