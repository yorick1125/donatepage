import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './MoneyInput.css';

function App() {
    return (
        <div>
            <InputGroup className="input">
                <InputGroup.Prepend className="input" > 
                    <InputGroup.Text>$</InputGroup.Text>
                    <input id="donationamount" defaultValue="1" type="number" step="1" min="1" max="1000000" disabled="true" />
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    );
}

export default App;
