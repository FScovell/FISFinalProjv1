import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageHolder from './ImageHolder'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>item</Paper> */}
          <ImageHolder/>
        </Grid>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>item</Paper> */}
          <ImageHolder/>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid 
         container item xs={12} 
         spacing={3}
        //  direction="column"
         alignItems="center"
         justifyContent="center"
        >
          <FormRow />
        </Grid>
      
      </Grid>
    </div>
  );
}