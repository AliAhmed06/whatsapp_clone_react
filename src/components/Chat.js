import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ConnectingAirportsOutlined, MoreVert } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';

import db from '../firebase';
import { doc, getDoc, getDocs, collection, query } from "firebase/firestore";
import { async } from '@firebase/util';

const Chat = () => {
  
  const[seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    const fun = async () => {
        if(roomId){
            // getting name of room from db
            const docRef = doc(db, "rooms", roomId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setRoomName(docSnap.data().name);                
            }

            // getting messages data from room sub collection
            const messagesCollection = query(collection(db, `rooms/${roomId}/messages`));
            const allMessages = await getDocs(messagesCollection);
            setMessages(allMessages.docs.map((doc) => doc.data() ))                    
        }
    };

    fun();
  }, [roomId]);
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log('you typed: ' + input);

    setInput('');
  }

  return (
    <div className="chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/adventurer/${Math.floor(Math.random() * 5000)}.svg`} />

            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at...</p>
            </div>

            <div className="chat_headerRight">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className="chat_body">
           { 
           messages.map((message) => (
             <div className={`chat_message ${ true && 'chat_receiver'}`}>
                <span className="chat_name">{message.name}</span>
                {message.message}
                <span className='chat_timestamp'>{
                    new Date(message.timestamp?.toDate()).toUTCString()
                }</span>
            </div>     
           ))
           }       
        </div>

        <div className="chat_footer">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' />
                <button type='submit' onClick={sendMessage}>Send a message</button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Chat;