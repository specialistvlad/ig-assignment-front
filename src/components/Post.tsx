import React, { FC } from 'react';
import { useParams } from "react-router-dom";
import useSWR from 'swr';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './myStyles';

const getRandomDog = (url: string) => fetch(url).then(_ => _.json());

export const Post: FC<{ fixedHeightPaper: string }> = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  const { postId } = useParams();
  const { data: post } = useSWR(`https://jsonplaceholder.typicode.com/posts/${postId}`, getRandomDog);
  const { data: user } = useSWR(() => `https://jsonplaceholder.typicode.com/users/${post.userId}`, getRandomDog)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {post ? (
            <>
              <Typography variant="h6" gutterBottom>
              Title: {post.title}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue={post.body}
                  />
                </Grid>
                {user ? (
                  <>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="author"
                    name="author"
                    label="Author"
                    fullWidth
                    autoComplete="fname"
                    value={user.name}
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="email"
                      name="email"
                      label="email"
                      fullWidth
                      autoComplete="lname"
                      value={user.email}
                    />
                  </Grid>
                  </>
                ) : ('Loading author data...')}
              </Grid>
            </>
          ) : ('Loading post...')}
        </Paper>
      </Grid>
    </Grid>
  );
};