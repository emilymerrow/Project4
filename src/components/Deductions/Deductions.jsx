import React, { useState} from "react";
import { Dropdown, Form, TextArea, Message } from "semantic-ui-react";
import Header from '../Header/Header';

const Deductions = () => {
    // State variables to store form data
    const [account, setAccount] = useState('Savings Account');
    const [totalSavings, setTotalSavings] = useState(10);
    const [deductAmount, setDeductAmount] = useState(0);
    const [description, setDescription] = useState('');
    


    const handleDeductAmountChange = (value) => {
      setDeductAmount(value);
    };
  
    // Event handler for account dropdown change
    const handleAccountChange = (e, { value }) => {
      setAccount(value);
    };
  
    // Event handler for deduct amount input change
    // const handleDeductAmountChange = (e) => {
    //   setDeductAmount(Number(e.target.value));
    // };
  
    // Event handler for description textarea change
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    // Event handler for apply button click
    const handleApplyClick = () => {
      // Deduct the specified amount from the total savings
      setTotalSavings(totalSavings - deductAmount);
    };
  
    return (
      <div>
        <Header/>
        <h1 style={{
          marginBottom: '5rem',
          backgroundColor: '#00b5ad',
          color: 'white',
          border: '1px solid black',
          padding: '2rem',
          display: 'inline-block',
          textShadow: '2px 2px 2px black',
          WebkitTextStroke: '1px black',
          textStroke: '1px black'
        }}>
          DEDUCTIONS
        </h1>
    
        <Message info style={{ marginBottom: '5rem' }}>
          <Message.Header style={{ fontSize: '1.5em' }}>Note:</Message.Header>
          <p style={{
            fontSize: '1.5em',
            lineHeight: '2em',
            color: 'red',
            fontFamily: 'Georgia, serif'
          }}>
            Starting May 2023, the new law addressing eye-rolling, sarcasm, and talking back will be implemented and serious deductions will take place.
            <br />
            For further details or inquiries, please reach out to your local authorities.
          </p>
        </Message>
    
        <Form>
          <Form.Field>
            <label style={{ fontSize: '1.5em', fontFamily: 'Comic Sans MS, sans-serif', marginBottom: '1rem' }}>Account</label>
            <Dropdown
              style={{ backgroundColor: '#d1f9f7' }}
              selection
              options={[
                {
                  key: 'savings',
                  text: `Savings Account (${totalSavings})`,
                  value: 'Savings Account'
                },
                {
                  key: 'allowance',
                  text: 'Allowance Account (20)',
                  value: 'Allowance Account'
                }
              ]}
              value={account}
              onChange={handleAccountChange}
            />
          </Form.Field>
    
          <Form.Field>
            <label style={{ fontSize: '1.5em', fontFamily: 'Comic Sans MS, sans-serif', marginBottom: '1rem' }}>Amount to be deducted</label>
            <Dropdown
              selection
              options={[
                { key: '1', text: '$1', value: 1 },
                { key: '2', text: '$2', value: 2 },
                { key: '5', text: '$5', value: 5 },
                { key: '10', text: '$10', value: 10 },
                { key: '20', text: '$20', value: 20 }
              ]}
              value={deductAmount}
              onChange={(e, { value }) => handleDeductAmountChange(value)}
              style={{ backgroundColor: '#d1f9f7' }}
            />
          </Form.Field>
    
          <Form.Field>
            <label style={{ fontSize: '1.5em', fontFamily: 'Comic Sans MS, sans-serif', marginBottom: '1rem' }}>Reason for Deduction</label>
            <TextArea
              placeholder="Deduction for what?"
              value={description}
              onChange={handleDescriptionChange}
              style={{ backgroundColor: '#d1f9f7' }}
            />
          </Form.Field>
    
          <Form.Button onClick={handleApplyClick}
              style={{
                fontSize: '1.2em',
                backgroundColor: '#FFDAB9',
                color: 'black',
                padding: '0.8em 1.2em',
                transition: 'background-color 0.3s, color 0.3s',
                border: 'none',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'gray'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FFDAB9'}
          >
             Apply
            </Form.Button>
        </Form>
      </div>
    );
  }
  
  export default Deductions;