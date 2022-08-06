import { Button, Grid, makeStyles, Typography } from '@material-ui/core/';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import LogoImg from './images/logo.png';

const useStyles = makeStyles(() => ({
    typograph: {
      fontFamily: 'New Rocker',
    },
    logo: {
        maxWidth: '100px'
    },
    options: {
        color: "#fff",
        textDecoration: 'none',
        '&:hover': {
           borderBottom: "2px solid #dc3545",
        },
      },
  }));

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container className="w-100 p-3 mb-2 bg-dark text-white mx-0 border-bottom border-5 border-danger" direction="row" justify="space-between" alignItems="center" xs={12}>
            <img className={classes.logo} src={LogoImg}/>
            <Typography className={classes.typograph} variant='h3'>
                Monsters of Vinyls
            </Typography>
            <Link className={classes.options} to="/">
                <Button className="text-white">Home</Button>
            </Link>
            <Link className={classes.options} to="/contato">
                <Button className="text-white">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
  
    )
}

export default Header;
