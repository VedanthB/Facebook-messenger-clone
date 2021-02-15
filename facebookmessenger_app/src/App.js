import React , { useState }from 'react';
import './App.css';

function App() {
     const [input, setInput] = useState('');
     const [messages, setMessages] = useState(['hello','hi']);
   
     console.log('🧜🏼‍♀️', input);
     console.log('🧜🏼‍♀️', messages);

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
      <input value={input}   onChange = {event => setInput(event.target.value)} />
      <button type='submit' onClick={sendMessage} >Send message</button>
      </form>


      {
        messages.map(message => (
          <p>{message}</p>
        ))

      }
 
    </div>
  );
}

export default App;
