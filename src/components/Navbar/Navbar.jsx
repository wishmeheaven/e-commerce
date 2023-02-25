import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
// import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  // const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} /> <div className={classes.button}> 
          <IconButton aria-label="Show cart items" color="inherit" >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar