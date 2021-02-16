import React , { useState , useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
     const [input, setInput] = useState('');
     const [messages, setMessages] = useState([
       {username:'Ved', text:'heyyy'},
       {username:'Ana', text:'helooo'}
      ]);
     const [username, setUsername] = useState(''); 

     useEffect(() => {
        setUsername(prompt('Please enter your name.'))
     }, []) //condition
   
     const sendMessage = (event) => {
        // this fires when the button is clicked 
        event.preventDefault();  // prevents Reload/Refresh
        setMessages([...messages, {username: username , text: input}]);
        setInput('') // clears the input after submit
 
    }

  return (
    <div className="App">
      <h1>Welcome {username}!</h1> 

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
          <Message username={username} message={message} />
          // <p>{message}</p>
        ))

      }
 
    </div>
  );
}

export default App;
