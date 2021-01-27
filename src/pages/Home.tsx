import React, { FC } from 'react';
import Header from '../components/Header';
import UserSetter from '../components/UserSetter';
import Container from '@material-ui/core/Container';

const Home: FC = () => {
return (
    <>
        <Header />
        <Container maxWidth="md">
            <UserSetter />
        </Container>
    </>
)};

export default Home;