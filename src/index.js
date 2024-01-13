import React  from 'react';
import ReactDOM from 'react-dom';
import {MessageList, Layout, ChatList, Header } from './components';
//import "./global.css";

const Appl = () => {
  return(
    <>
    <Layout 
    messages={<MessageList/>} 
    chats = {<ChatList/>}
    header = {<Header/>}
    />
    </>
  )
}
ReactDOM.render(
   <React.StrictMode>
   <Appl/>
   </React.StrictMode>,
 document.getElementById('root')
 );