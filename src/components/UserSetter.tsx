import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');

  if (user) {
    return <Redirect to={`/repos/${user}`} />
  }

  return (
      <Box m={3}>
        <Card style={{backgroundColor: "lightgrey"}}>
          <CardContent>
            <Typography variant="h5" component="h1">
              Github User Info
            </Typography>
            <Typography variant="subtitle1">Enter username of Github account</Typography>
            <TextField
              label="Username"
              name="Username"
              fullWidth
              margin="normal"
              variant="outlined"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </CardContent>
          <CardActions style={{justifyContent: 'center'}}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => 
                setUser(username)            
              }            
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Box>
  );
};

export default Login;
