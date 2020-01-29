import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import Deposits from './Deposits';
import { TableComponent } from './Table';
import { useStyles } from './myStyles';

export const Posts: FC<{ fixedHeightPaper: string }> = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <TableComponent />
        </Paper>
      </Grid>
    </Grid>
  );
};