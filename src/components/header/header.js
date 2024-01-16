import {Link} from "react-router-dom";
import styles from "./header.module.css";
import {Button, Avatar, Container, Typography,IconButton, Toolbar, Box, AppBar} from "@mui/material";

const menu = [
{title: "Home", to: "/"},
{title: "Profile", to: "/profile"},
{title: "Chat", to: "/chat"},
]

export function Header(){
    return <AppBar position="static" color="primary" className={styles.appBar}>
        <Container maxWidth = "x1">
            <Toolbar>
            <Typography 
            variant="h6" 
            noWrap
            component="div" 
            sx={{ mr: 2, display: {xs: "flex", md:"flex"}}}>
            LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex"}}
            >
            {menu.map(item => (
                <Button key={item.to} 
                sx={{ my: 2, color: "white", display: "block"}}>
                <Link
                className={styles.link}
                to={item.to}>
                {item.title}
                </Link>
                </Button>
            ))}
            </Box>
            <Box sx={{flexGrow: 0}}>
                <IconButton sx={{p: 0}}>
                    <Avatar/>
                </IconButton>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>;
        
}