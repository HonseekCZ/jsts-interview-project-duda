import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserParams from '../utils/user';
import { TRepoList, getRepos} from '../utils/github-api';
import RepoComponent from '../components/RepoComponent'
import {
    Box,
    Card, 
    CardContent,
    Container, 
    Grid,
    List,
    Typography,
    CircularProgress
} from "@material-ui/core";

import Header from '../components/Header';

const Repos: FC = () => {
    const { username } = useParams<UserParams>();
    
    const [repos, setRepos] = useState<TRepoList>([]);

    useEffect(() => {
        getRepos(username)
        .then(res => {   
            setRepos(res);
        });
    }, [username]);

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Grid container wrap="wrap" spacing={3}>
                    <Grid item xs={12}>
                        <Box m={3}>
                            <Typography variant="h4" gutterBottom >
                                <b>Repositories</b>
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                {username}
                            </Typography>
                        </Box>
                    </Grid>                    
                    <Grid item xs={12}>
                        {repos === undefined || repos.length === 0 ? (
                            <CircularProgress />
                        ) : (
                            <Card style={{backgroundColor: "lightgrey"}}>
                                <CardContent>
                                    <List>
                                        {repos.map((repo, i) => (
                                            <RepoComponent {...repo} key={i} />
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        )}
                    </Grid>      
                </Grid>
            </Container>
        </>
    );
};

export default Repos;