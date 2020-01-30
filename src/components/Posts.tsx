import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { TableComponent } from './Table';
import { useStyles } from './myStyles';

export const Posts: FC<{ fixedHeightPaper: string }> = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <TableComponent />
        </Paper>
      </Grid>
    </Grid>
  );
};