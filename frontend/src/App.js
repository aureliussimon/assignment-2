import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function App() {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/phones')
            .then(response => response.json())
            .then(data => setPhones(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    },   []);

    useEffect(() => {
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    },   []);
    

    return (
        <div>     
            <h1 class="centred-heading">Contactor</h1>
            <p class="centred-heading">Click a contact to view associated phone numbers</p>
            <List heaading="Contact" contacts={contacts} setContacts={setContacts}/>
        </div>
    );
}

export default App;