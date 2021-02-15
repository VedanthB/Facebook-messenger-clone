import React , { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
     const [input, setInput] = useState('');
     const [messages, setMessages] = useState(['hello','hi']);

    const sendMessage = (event) => {
        // this fires when the button is clicked 
        event.preventDefault();  // prevents Reload/Refresh
        setMessages([...messages, input]);
        setInput('') // clears the input after submit

    }

  return (
    <div className="App">
      <h1>hello world</h1> 

      <form>
           <FormControl>
             <InputLabel >Enter a message!</InputLabel>
             <Input value={input}   onChange = {event => setInput(event.target.value)} />
             <Button disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="primary">Send Message</Button>
           </FormControl>
       {/* <input value={input}   onChange = {event => setInput(event.target.value)} /> */}   
      </form>


      {
        messages.map(message => (
          <Message text={message} />
          // <p>{message}</p>
        ))

      }
 
    </div>
  );
}

export default App;
