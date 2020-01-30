import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import { Posts } from './Posts';
import { Post } from './Post';
import { Dashboard } from './Dashboard';

export const Router: FC<{ fixedHeightPaper: string }> = ({ fixedHeightPaper }) => (
  <Switch>
    <Route exact path="/">
      <Posts fixedHeightPaper={fixedHeightPaper} />
    </Route>
    <Route path="/post/:postId">
      <Post fixedHeightPaper={fixedHeightPaper} />
    </Route>
    <Route path="/dashboard">
      <Dashboard fixedHeightPaper={fixedHeightPaper} />
    </Route>
  </Switch>
);