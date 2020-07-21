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
import Rating from '@material-ui/lab/Rating'
import DOCUMENT_ID from './config'
import GetSheetDone from 'get-sheet-done'
import SearchBar from 'material-ui-search-bar'



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
    backgroundColor: "white",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "white",
    padding: theme.spacing(6),
  },
}));


export default function Store() {
  const classes = useStyles();
  const [allWholesalers, setAllWholesalers] = useState([])
  const [keyword, setKeyword] = useState('')
  const wholesalers = allWholesalers.filter(wholesaler => wholesaler.name.toLowerCase().includes(keyword.toLowerCase()))
  useEffect(() => {
    GetSheetDone.labeledCols(DOCUMENT_ID).then(sheet => setAllWholesalers(sheet.data))
  }, [])


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Find Wholesalers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Wholesalers near me
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Order from the wholesalers near you
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <SearchBar
                    value={keyword}
                    onChange={v=>setKeyword(v)}
                    style={{
                      margin: '0 auto',
                      maxWidth: 800
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {wholesalers.map((wholesaler) => (
              <Grid item key={wholesaler.name} xs={12} sm={6} md={4}>
                <Card style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/product-listing'} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={wholesaler.logo}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {wholesaler.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="p" variant="body2" color="textSecondary" align="left">
                          {wholesaler.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        {/* <Typography component="span" variant="body2" color="textSecondary" align="left">
                          (Picture changes with refresh)
                    </Typography> */}
                      </Grid>
                      <Grid item xs={6}>
                        <Rating name="read-only" value={4} readOnly />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography component="span" variant="body2" color="textSecondary" align="left">
                          {wholesaler.distance} miles
                    </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography component="span" variant="body2" color="textSecondary" align="right" style={{ display: 'block' }}>
                          {wholesaler.rating}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          href="/product-listing"
                          variant="contained" color="primary">
                          Order
                    </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
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
          Restorerant Wholesales
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
