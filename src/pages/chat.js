import { Routes, Route, useLinkClickHandler, useNavigate} from "react-router-dom";
import {MessageList, Layout, ChatList} from "../components";
import { useEffect } from "react";

export const ChatPage = () =>{
    const navigate = useNavigate()
    useEffect(() =>{
        const listener = ({code}) => {
            if(code === "Escape") {
                navigate("/chat");
            }
        }
document.addEventListener("keydown", listener)
return () => {
    document.removeEventListener("keydown", listener);
}
    }, [navigate])


    return(
        <Routes>
            <Route path="/" element={<Layout 
            messages={<h1 style={{color:"#fff"}}>выберите чат</h1>}
            chats={<ChatList/>}
            />}/>
            <Route path=":roomID" 
            element={<Layout messages={<MessageList/>} chats={<ChatList/>}/>}
            />
        </Routes>
    );
};