import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export default function AddProduct() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ['Product details', 'Review your product'];

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [quantity, setQuantity] = React.useState('')

  function Review() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Product summary
        </Typography>
        <List disablePadding>
          <ListItem className={classes.listItem} key={name}>
            <ListItemText primary={name} secondary={description} />
            <Typography variant="body2">{price}</Typography>
          </ListItem>
        </List>

      </React.Fragment>
    )
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Product details
              </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                  autoComplete="description"
                  onChange={(event) => setDescription(event.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  autoComplete="price"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                  fullWidth
                  autoComplete="quantity"
                  onChange={(event) => setQuantity(event.target.value)}

                />
              </Grid>
            </Grid>
          </React.Fragment>
        )
      case 1:
        return <Review></Review>
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      addProduct({name,description,price})
    }
  };

  function addProduct({ name, description, price }) {
    const data = new URLSearchParams()
    Object.entries({ "entry.207779487": name, "entry.1041034555": description, "entry.1115846303": price, "fvv": "1", "draftResponse": "[null,null,\"2721945909698223078\"]\r\n", "pageHistory": "0", "fbzx": "2721945909698223078" }).forEach(([key, value]) => {
      data.append(key, value)
    })
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScxizPqfKfBHDnBbNo05dsMDRIbwb1AKHdW1YFybVyH8ZbJ1w/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: data
    })
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          ReSTORErant Wholesale
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Add a new product
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Your products have been successfully added.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={handleNext}
                      href = "/Wholesaler"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Add product' : 'Back'}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={handleNext}
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Add product' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
