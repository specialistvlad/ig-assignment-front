import React from 'react';
import { useHistory } from "react-router-dom";
import useSWR from 'swr';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from './Title';

type TRow = {
  id: number,
  userId: number,
  title: string
};

export const TableComponent = () => {
  let history = useHistory();
  const { data } = useSWR('https://jsonplaceholder.typicode.com/posts', (url: string) => fetch(url).then(_ => _.json()));
  const handleClick = (id: number) => {
    history.push(`/post/${id}`);
  }

  return (
    !data ? (
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
    </React.Fragment>
    )
  );
}