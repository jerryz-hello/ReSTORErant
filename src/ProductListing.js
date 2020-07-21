import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Rating from '@material-ui/lab/Rating';
import GetSheetDone from 'get-sheet-done'
import DOCUMENT_ID from './config'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  img: {
    width: 128,
    height: 128,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  }
}));




function preventDefault() { }
export default function Wholesaler() {
  const [value, setValue] = React.useState(3);
  const [products, setProducts] = useState([])
  const classes = useStyles();

  useEffect(() => {
    GetSheetDone.labeledCols(DOCUMENT_ID, 2).then(sheet => setProducts(sheet.data))
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
<<<<<<< HEAD
            Products
=======
            Shop Items
>>>>>>> 4806fcbd34595c4e663bbb0a1b17a1e17106bef0
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>

          <Container maxWidth="md">
          <Button
            href="/store"
            simple color="primary" size="lg">
              Go Back
            </Button>
            <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
              Walmart
            </Typography>
            <Typography variant="subtitle1" align="left" color="textPrimary" component="span">
              2000 Lafayette Ave
            </Typography>
            <Typography>
              Fresh produce and grocery bundles
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography>
            </Typography>
            <Typography>
              
            </Typography>
            <Button
              href="/checkout"
              variant="contained" color="primary">
              My Cart

            < ShoppingCartIcon className={classes.icons}/>
            </Button>

          </Container>
        </div>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid key={index} item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid container spacing={2}>
                    <Grid item style={{ position: 'realtive' }}>
                      <div style={{ position: 'relative' }}>
                        <img className={classes.img}
                          src="https://source.unsplash.com/1600x900/?food"
                          alt="Image title"
                        />
                        <span style={{ position: 'absolute', top: 5, left: 5, borderRadius: 2, fontFamily: 'Helvetica', color: '#222222', backgroundColor: 'hsla(0,0%,100%,.75)', padding: '2px 5px' }}>${product.price}</span>
                      </div>
                    </Grid>
                    <Grid item xs direction="column" container >
                      <Typography gutterBottom variant="h5" component="h4">
                        {product.name}
                      </Typography>
                      <Typography paragraph>
                        {product.description}
                      </Typography>
                      <TextField
          id="standard-textarea"
          label="Enter Quantity"
          placeholder=""
          multiline
        />
                      <Button
                        href="/checkout"
                        variant="contained" color="primary">
                        Add to Cart


                        </Button>
                    </Grid>

                    <Grid item>
                      <Typography variant="subtitle1" color="textSecondary">38 in Stock</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>

        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">

        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment >
  );
}
