import { useState, useEffect, useRef} from 'react';
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
          data: "date",
        },
      ]
    });
    const styles = useStyles();

    useEffect(() =>{
      if (ref.current){
        ref.current.scrollTo(0, ref.current.scrollHeight);
      }
    }, [MessageList]);

    const sendMessge = () => {
      if (value){
         setMessageList({
          ...MessageList,
          [roomID]:[
          ...(MessageList[roomID] ?? []),
          {
            autor: "User", 
           message: value,
           data: new Date(),
          }
         ]
        });
      setValue ("");
      }
    };

    const handlePressInput = ({code}) =>{
        if (code === "Enter"){
            sendMessge();
        }
    };
    
    useEffect(() => {
      const messages = MessageList[roomID] ?? [];
      const lastMessage = messages[messages.length - 1]
      let timerId = null;
  
      if (messages.length && lastMessage.autor === "User"){
        timerId = setTimeout(() => {
          setMessageList({
            ...MessageList,
            [roomID]:[
            ...(MessageList[roomID] ?? []),
            {
              autor: "Bot",
              message: "Hello From bot",
              data: new Date(),
            },
          ]
        });
        }, 500)
      }
  
        return () => {
          clearInterval(timerId);
        };
      }, [MessageList, roomID])

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
                    {value && <Send className={styles.icon} onClick={sendMessge} />}
                </InputAdornment>
            }
            />  
        </>
      );
}