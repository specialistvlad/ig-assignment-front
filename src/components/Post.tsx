import React, { FC } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './myStyles';

export const Post: FC<{ fixedHeightPaper: string }> = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  const { postId } = useParams();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div>post {postId} </div>
        </Paper>
      </Grid>
    </Grid>
  );
};