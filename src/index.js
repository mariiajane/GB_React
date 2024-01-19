import React  from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {Header } from './components';
import {ProfilePage, ChatPage} from './pages';
import {CustomThemeProvider} from './theme-context';
import { store } from './store';
const root = createRoot(document.getElementById('root'));

// Render the app within the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <CustomThemeProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/chat/*" element={<ChatPage/>}/>
        <Route path="*" element={<h1>404 Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
    </Provider>
   </React.StrictMode>
);
