import React  from 'react';
import { ReactDOM } from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {MessageList, Layout, ChatList, Header } from './components';
import {ProfilePage, ChatPage} from './pages';
import {ThemeProvider } from 'styled-components';

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
const root = createRoot(document.getElementById('root'));

// Render the app within the root
root.render(
  <React.StrictMode>
    {/*<ThemeProvider theme = {theme}>*/}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/chat/*" element={<ChatPage/>}/>
        <Route path="*" element={<h1>404 Page</h1>}/>
      </Routes>
      </BrowserRouter>
    {/*</ThemeProvider>*/}
   </React.StrictMode>
);
