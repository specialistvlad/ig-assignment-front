import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © Template by Material UI team, project made by Vladyslav Kazantsev '}
    <br/>
    <Link color="inherit" href="https://github.com/specialistvlad/ig-assignment-front">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);