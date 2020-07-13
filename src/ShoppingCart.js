import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ShoppingCartItem from './ShoppingCartItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const items=[1,2,3,4,5];
export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {items.map((item)=>(

<Grid item xs={12}>
<ShoppingCartItem></ShoppingCartItem>
</Grid>
          ))}
      </Grid>
    </div>
  );
}