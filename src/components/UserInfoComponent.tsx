import React, {FC} from 'react';
import { UserInfo } from '../utils/github-api';

import SendIcon from '@material-ui/icons/Send';

import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const UserInfoComponent: FC<UserInfo> = ({ login, name, company, created_at, public_repos, html_url }) => {
    
    function createData(name: string, value: string) {
        return { name, value };
      }

      const rows = [
        createData('Login:', login),
        createData('Name:', name),
        createData('Company:', company),
        createData('Created:', new Date(created_at).toLocaleDateString("de-DE")),
        createData('Public repositories:', public_repos.toString()),
      ];

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow key="Link">
                        <TableCell component="th" scope="row">
                            Link:
                        </TableCell>
                        <TableCell align="right">
                            <IconButton 
                                color="primary" 
                                size="small" 
                                title="Visit repository"
                                href={html_url}>
                                    <SendIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserInfoComponent;