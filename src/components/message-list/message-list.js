import { useState, useEffect, useRef, useCallback} from 'react';
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import {useStyles} from "./use-styles";
import { Message } from "./message";
import { useParams } from 'react-router-dom';
//jss
export const MessageList =() =>   {
    const ref = useRef(); 
    const {roomID} = useParams();

    const [value, setValue] = useState("")
    const [MessageList, setMessageList] = useState({
      room1:[
        {
          autor: "Bot",
          message: "message 333",
          data: new Date(),
        },
      ]
    });
    const styles = useStyles();

    useEffect(() =>{
      if (ref.current){
        ref.current.scrollTo(0, ref.current.scrollHeight);
      }
    }, [MessageList]);

    const sendMessge = useCallback((message, autor = "User") => {
      if (message){
         setMessageList({
          ...MessageList,
          [roomID]:[
          ...(MessageList[roomID] ?? []),
          {
            autor, 
           message,
           data: new Date(),
          }
         ]
        });
      setValue ("");
      }
    }, [MessageList, roomID]);

    const handlePressInput = ({code}) =>{
        if (code === "Enter"){
            sendMessge(value);
        }
    };
    
    useEffect(() => {
      const messages = MessageList[roomID] ?? [];
      const lastMessage = messages[messages.length - 1]
      let timerId = null;
  
      if (messages.length && lastMessage.autor === "User"){

        //todo сделать функцию sendMessage
        timerId = setTimeout(() => {
          sendMessge("Hello from Bot", "Bot")
        }, 500)
      }
  
        return () => {
          clearInterval(timerId);
        };
      }, [MessageList, roomID, sendMessge])

      const messages = MessageList[roomID] ?? [];
      return(
        <>
        <div ref={ref}>
        {messages.map((message, index) =>(
              <Message message={message} key={index}/>
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
                    {value && <Send className={styles.icon} onClick={() =>sendMessge(value)} />}
                </InputAdornment>
            }
            />  
        </>
      );
}