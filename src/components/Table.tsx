import React, { useCallback } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useFetch from "react-fetch-hook";

import Title from './Title';

type TRow = {
  id: number,
  userId: number,
  title: string
};

// @ts-ignore
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export const TableComponent = () => {
  const classes = useStyles();
  const { isLoading, data } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const handleClick = (id: number) => {
    console.log(id, 'aaa');
  }
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <React.Fragment>
      <Title>Recent Posts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>userId</TableCell>
            <TableCell align="right">title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: TRow) => (
            <TableRow key={row.id}>
              <TableCell onClick={() => handleClick(row.id)}>{row.id}</TableCell>
              <TableCell onClick={() => handleClick(row.id)}>{row.userId}</TableCell>
              <TableCell onClick={() => handleClick(row.id)} align="right">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
    )
  );
}