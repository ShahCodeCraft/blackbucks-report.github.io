import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
const rows = [
    createData('Mithali Sharma', 159, 6.0, 24, 4.0),
    createData('Satish Rane', 237, 9.0, 37, 4.3),
    createData('Raman Singh', 262, 16.0, 24, 6.0),
    createData('Sanjay Singh', 305, 3.7, 67, 4.3),
    createData('Sumit Sharma', 356, 16.0, 49, 3.9),
  ];
  
export default function StudentRankingTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{ border: 1 }} >
                    <TableRow >
                        <TableCell>Student Name</TableCell>
                        <TableCell align="right">College reg Id</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Email Id</TableCell>
                        <TableCell align="right">College Name</TableCell>

                        <TableCell align="right">10th</TableCell>
                        <TableCell align="right">12th</TableCell>
                        <TableCell align="right">UG</TableCell>
                        <TableCell align="right">Employability Score</TableCell>

                        <TableCell align="right">Coding rank</TableCell>
                        <TableCell align="right">No. of  tests taken</TableCell>
                        <TableCell align="right">Aptitude</TableCell>
                        <TableCell align="right">Coding</TableCell>
                        <TableCell align="right">English</TableCell>
                        <TableCell align="right">Top 3 Tech Skill</TableCell>
                        <TableCell align="right">Strong Area</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
