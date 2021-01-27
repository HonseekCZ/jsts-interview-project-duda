import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserParams from '../utils/user';
import { TRepoList, getRepos} from '../utils/github-api';
import RepoComponent from '../components/RepoComponent'
import {
    Card, 
    CardContent, 
    Grid,
    List,
    Typography,
    CircularProgress
} from "@material-ui/core";

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
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                    Repositories
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {username}
                </Typography>
            </Grid>
            
                <Grid item xs={12}>
                {/* {error && (
                    <Typography variant="subtitle2" align="center" color="error" paragraph>
                        <b>{error}</b>
                    </Typography>
                )} */}
                {repos === undefined || repos.length === 0 ? (
                    <CircularProgress />
                ) : (
                    <Card>
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
    );
};

export default Repos;