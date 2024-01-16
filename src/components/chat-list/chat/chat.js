import { AccountCircle } from "@mui/icons-material";
import {ListItem, ListItemText,  ListItemButton} from "@mui/material";
import {styled } from '@mui/system'; 
import st from "./chat.module.css";

//import { styled } from "styled-components";

 const useStyles = styled(() => {
     return{
         item: {
             "&.Mui-selected": {
                 backgroundColor: "#2b5278",
             },
             "&.Mui-selected:hover": {
                 backgroundColor: "#386c9e",
             },
        },
     };
 });
export function Chat({ title, Select }) {
    const classes = useStyles();

    return (
<ListItemButton 
    className={`${classes.item} ${classes.item}`}
    selected ={Select}  
    >
    <ListItem>
        <AccountCircle fontSize="large" className={st.icon}/>
        </ListItem> 
        <ListItemText primary={title} className={st.text}/>  
        </ListItemButton>
    );
}