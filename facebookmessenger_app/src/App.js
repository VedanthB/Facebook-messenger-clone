import React , { useState , useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, } from '@material-ui/core';
import Message from './Message';
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function App() {
     const [input, setInput] = useState('');
     const [messages, setMessages] = useState([]);
     const [username, setUsername] = useState(''); 
       
     useEffect(() => {
       //runs when the app component loads
       db.collection('messages')
       .orderBy('timestamp', 'desc')
       .onSnapshot(snapshot => {
         setMessages(snapshot.docs.map(doc => ({id: doc.id ,message: doc.data()})) )
       });
     }, [])


     useEffect(() => {
        setUsername(prompt('Please enter your name.'))
     }, []) //condition
   
     const sendMessage = (event) => {
        // this fires when the button is clicked 
        event.preventDefault();  // prevents Reload/Refresh

        db.collection('messages').add({
          message: input ,
          username: username, 
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        // setMessages([...messages, {username: username , text: input}]);
       
         setInput('') // clears the input after submit
 
    }

  return (
    <main className="app__welcomeMessage ">  
   
      <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100'></img>
      <h1>Welcome {username}!</h1> 
    
      
    <div className="glass">
   

      <form className='app__form'>
           <FormControl className='app__formControl'>
             
             <Input className='app__input' placeholder='Enter a message...' value={input}   onChange = {event => setInput(event.target.value)} />
             
             <IconButton className='app__iconButton'
             disabled={!input} 
             type='submit' 
             onClick={sendMessage} 
             variant="contained" 
             color="primary" 
             >   
             <SendIcon />           
             </IconButton>
             {/* <Button disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="primary">Send Message</Button> */}
           </FormControl>
       {/* <input value={input}   onChange = {event => setInput(event.target.value)} /> */}   
      </form>

     <FlipMove>
       {
         messages.map(({id, message}) => (
           <Message key={id} username={username}  message={message} />
           // <p>{message}</p>
         ))

       }
    </FlipMove>
    </div>
  </main>
  
  

  );
}

export default App;
