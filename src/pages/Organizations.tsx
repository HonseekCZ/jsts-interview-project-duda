import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserParams from '../utils/user';
import { TOrgList, UserInfo, getUserData, getUserOrgs} from '../utils/github-api';
import OrgComponent from '../components/OrgComponent'
import UserInfoComponent from '../components/UserInfoComponent'

import {
    Card, 
    CardContent, 
    Grid,
    List,
    Typography,
    CircularProgress,
} from "@material-ui/core";

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
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                    User Information
                </Typography>
            </Grid>            
            <Grid item xs={12}>
                {userInfo === undefined ? (
                    <CircularProgress />
                ) : (
                    <>
                        <UserInfoComponent {...userInfo} />
                        {orgs.length > 0 ? (
                            <Card>
                                <CardContent>
                                    <Typography variant="subtitle1" paragraph>
                                        <b>Part of organizations:</b>
                                    </Typography>
                                    <List>
                                        {orgs.map((org, i) => (
                                            <OrgComponent {...org} key={i} />
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>                   
                        ) : ('')
                        }
                    </>
                )}
            </Grid>      
        </Grid>
    );
};

export default Organizations;