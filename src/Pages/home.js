import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      textAlign: 'center',
    },
    head: {
        color: "#fff",
        backgroundColor: '#dc3545',
        padding: '8px',
        borderRadius: '16px 16px 0 0',
        fontFamily: 'New Rocker',
      },
    list: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    item: {
        borderBottom: "2px solid #dc3545",
        width: '80%',
    },
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography className={classes.head} variant='h5'>
                        CATEGORIAS
                    </Typography>
                    <List className={classes.list}>
                        {category.map(
                            category => {
                                return (
                                    <div className={classes.item}>
                                    <Item
                                        key = {category.id} 
                                        name= {category.name}
                                        details={count[category.name]}
                                    />
                                    </div>
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
