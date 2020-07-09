import React from 'react';
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

import Paper from '@material-ui/core/Paper';

import Rating from '@material-ui/lab/Rating';

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
    width:128,
    height:128,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth:500
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function preventDefault() { }
export default function Restaurant() {
  const [value, setValue] = React.useState(3);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
              KFC
            </Typography>
            <Typography variant="subtitle1" align="left" color="textPrimary" component="span">
              2000 Lafayette Ave
            </Typography>
            <Link href="#" onClick={preventDefault} >
              Change locations
            </Link>
            <Typography>    74 Food was good
            71 Delivery was on time
    70 Order was correct</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Container>
        </div>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item xs={6}>
                <Paper class={classes.paper} elevation="3">
                  <Grid container spacing={2} key={card}>
                    <Grid item >
                      <img class={classes.img}
                        src="https://source.unsplash.com/random"
                        alt="Image title"
                      />
                    </Grid>
                    <Grid item xs direction="column" container >
                      <Typography gutterBottom variant="h5" component="h4">
                        8 pc. Family Fill Up + 12 Extra Crispy™ Tenders Bucket
                        </Typography>
                      <Typography paragraph>
                        Order a meal for today & tomorrow! 8 pieces of our freshly prepared chicken, available in Original Recipe® or Extra Crispy™, 2 Large Mashed Potatoes and Gravy, a Large Cole Slaw, 4 biscuits, and 12 Extra Crispy™ Tenders with 4 dipping sauces.
                        </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="p" color="textSecondary">$30.00</Typography>
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
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment >
  );
}
