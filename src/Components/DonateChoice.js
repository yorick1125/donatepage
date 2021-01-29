import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MoneyInput from './MoneyInput';
import {useState} from 'react';
import './DonateChoice.css';


export default function DonateChoice() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const txtsize = 'sm';

    const radios = [
      { name: '1$', value: '1' },
      { name: '10$', value: '10' },
      { name: '20$', value: '20' },
      { name: '50$', value: '50' },
      { name: '100$', value: '100' },
      { name: '300$', value: '300' },
      { name: 'Other', value: '0' },
    ];

    const setDonationValue = (currentValue) => {
        if(currentValue == '0') {
        document.getElementById("donationamount").disabled = false;
        }
        else {
            document.getElementById("donationamount").disabled = true;
        }
        document.getElementById("donationamount").value = currentValue;

    }
  
    return (
      <>
        <ButtonGroup toggle className="Options" >
          {radios.map((radio, idx) => (
            <ToggleButton
              className="ToggleButton"
              key={idx}
              type="radio"
              variant="dark"
              name="radio"
              size={txtsize}
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                  setRadioValue(e.currentTarget.value)
                  setDonationValue(e.currentTarget.value)
                }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  