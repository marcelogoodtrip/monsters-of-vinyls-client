import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    button: {
        color: "#fff",
        background: "#dc3545",
        '&:hover': {
            background: "#dc3545",
            opacity: '0.7',
        },
      },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img className='mw-100' src={product.image} alt={product.name_product}/>
                    <Typography variant='h6'>
                        {children}
                    </Typography>
                    <Typography className='text-success' variant='subtitle1'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <Button 
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                    className={classes.button}
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
