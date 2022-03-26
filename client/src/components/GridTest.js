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

export default function NestedGrid({walk}) {
  const classes = useStyles();

  function FormRow(walkPiece) {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <ImageHolder walkPiece={walkPiece}/>
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
            {walk.pieces.map(walkPiece => <FormRow walkPiece={walkPiece}/>)}
          
        </Grid>
      
      </Grid>
    </div>
  );
}