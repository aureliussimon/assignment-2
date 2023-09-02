import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function App() {

    return (

        <div class="body">     
            <h1 class="centred-heading">Contactor</h1>
            
            
            <div class="square">
                <h1 class="centred-heading">Contact</h1>
                <input type="text" placeholder='Enter Contact name here'></input>
            </div>
            <p class="centred-heading">Click a contact to view associated phone numbers</p>
            
        </div>
    );
}

export default App;