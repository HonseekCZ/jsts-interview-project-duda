import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserParams from '../utils/user';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  toolbar: { display: 'flex', justifyContent: 'space-between' },
  link: { textDecoration: 'none' },
  
}));

const Header: FC = () => {
  const classes = useStyles();
  const { username } = useParams<UserParams>();

  return (
    <AppBar color="primary" position="static" variant="outlined">
        {/* Navigation - all pages */}
        <Toolbar>
            {username && (
                <>
                    <Link className={classes.link} to="/">
                        <Button>
                            <b>Change User</b>
                        </Button>
                    </Link>
                    <Link className={classes.link} to={`/repos/${username}`}>
                        <Button>
                            <b>Repositories</b>
                        </Button>
                    </Link>         
                    <Link className={classes.link} to={`/orgs/${username}`}>
                        <Button>
                            <b>Organizations</b>
                        </Button>
                    </Link>
                </>
            )}
        </Toolbar>
    </AppBar>
  );
};

export default Header;