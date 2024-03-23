import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restaurent App
          </Typography>
          
          <Button> 
            <Link to='/h'style={{color:"white",textDecoration:"none"}} >HOME</Link></Button>
        
           <Button> 
            <Link to='/'style={{color:"white",textDecoration:"none"}} >LOGIN</Link></Button>
            <Button> 
            <Link to='/s'style={{color:"white",textDecoration:"none"}} >SIGN UP</Link></Button>
            <Button> 
            <Link to='/d'style={{color:"white",textDecoration:"none"}} >MENU MANAGEMENT</Link></Button>
            
            {/* <Button> 
            <Link to='/o'style={{color:"white",textDecoration:"none"}} >ORDER</Link></Button>
            <Button> 
            <Link to='/f'style={{color:"white",textDecoration:"none"}} >FEEDBACK</Link></Button> */} 
            {/* <Button> 
            <Link to='/m'style={{color:"white",textDecoration:"none"}} >MENU</Link></Button>
             */}
            
             

        </Toolbar>
      </AppBar>
    </Box>
  );
}
