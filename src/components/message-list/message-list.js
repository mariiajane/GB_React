import { useState, useEffect} from 'react';
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import {useStyles} from "./use-styles";
import { Message } from "./message";
//jss
export function MessageList(){
    const [value, setValue] = useState("")

    const [messages, setMessages] = useState([
      {
        autor: "Bot",
        message: "message 1",
        data: new Date().toLocaleDateString(),
      },
    ]);
    const styles = useStyles()

    const sendMessge = () => {
      if (value){
        setMessages([...messages,  { 
            autor: "User", 
            message: value,
            data: new Date().toLocaleDateString(),
      } ]);
      setValue ("");
      }
    };
    const handlePressInput = ({code}) =>{
        if (code === "Enter"){
            sendMessge();
        }
    };
    
    useEffect(() => {
      const lastMessages = messages[messages.length - 1];
      let timerId = null;
  
      if (messages.length && lastMessages.autor === "User"){
        timerId = setTimeout(() => {
          setMessages([...messages,
            {
              autor: "Bot",
              message: "Hello From bot",
              data: new Date().toLocaleDateString()},
          ]);
        }, 500)
      }
  
        return () => {
          clearInterval(timerId);
        };
      }, [messages])
  
      return(
        <>
        <div>
        {messages.map((message) =>(
              <Message message={message}/>
            ))}
        </div>
            <Input
            placeholder='enter message'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handlePressInput}
            className={styles.input}
            fullWidth
            endAdornment ={
                <InputAdornment position='end'>
                    {value && <Send className={styles.icon} onClick={sendMessge} />}
                </InputAdornment>
            }
            />  
        </>
      );
}