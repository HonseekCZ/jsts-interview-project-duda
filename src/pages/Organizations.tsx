import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserParams from '../utils/user';
import { TOrgList, UserInfo, getUserData, getUserOrgs} from '../utils/github-api';
import OrgComponent from '../components/OrgComponent'
import UserInfoComponent from '../components/UserInfoComponent'

import {
    Box,
    Card, 
    CardContent,
    Container, 
    Grid,
    List,
    Typography,
    CircularProgress,
} from "@material-ui/core";

import Header from '../components/Header';

const Organizations: FC = () => {
    const { username } = useParams<UserParams>();
    
    const [orgs, setOrgs] = useState<TOrgList>([]);
    const [userInfo, setUserInfo] = useState<UserInfo>();

    useEffect(() => {
        getUserOrgs(username)
        .then(res => {   
            setOrgs(res);
        });

        getUserData(username)
        .then(res => {   
            setUserInfo(res);
        });
    }, [username]);

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Grid container wrap="wrap" spacing={3}>
                    <Grid item xs={12}>
                        <Box m={3}>
                            <Typography variant="h4" gutterBottom>
                                <b>User Information</b>
                            </Typography>
                        </Box>
                    </Grid>            
                    <Grid item xs={12}>
                        {userInfo === undefined ? (
                            <CircularProgress />
                        ) : (
                            <>
                                <UserInfoComponent {...userInfo} />
                                {orgs.length > 0 ? (
                                    <Box my={3}>
                                        <Card style={{backgroundColor: "lightgrey"}}>
                                            <CardContent>
                                                <Typography variant="h6" paragraph>
                                                    <b>Part of organizations:</b>
                                                </Typography>
                                                <List>
                                                    {orgs.map((org, i) => (
                                                        <OrgComponent {...org} key={i} />
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Box>                   
                                ) : ('')
                                }
                            </>
                        )}
                    </Grid>      
                </Grid>
            </Container>
        </>
    );
};

export default Organizations;