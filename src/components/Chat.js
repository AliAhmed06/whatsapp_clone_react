import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MoreVert } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

const Chat = () => {
  
  const[seed, setSeed] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  const sendMessage = (e) => {
    e.preventDefault();
    console.log('you typed: ' + input);

    setInput('');
  }

  return (
    <div className="chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />

            <div className="chat_headerInfo">
                <h3>Room name</h3>
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
            <div className={`chat_message ${ true && 'chat_receiver'}`}>
                <span className="chat_name">Ali Ahmed</span>
                Hey Guys
                <span className='chat_timestamp'>3:52pm</span>
            </div>            
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