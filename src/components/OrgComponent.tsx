import React, {FC} from 'react';
import { Divider, ListItem, ListItemText} from "@material-ui/core";
import { Org } from '../utils/github-api';

const OrgComponent: FC<Org> = ({ login }) => {
    
    return (
        <>
            <ListItem>
                <ListItemText
                    primary={login}>
                </ListItemText>
            </ListItem>
            <Divider />
        </>
    );
};

export default OrgComponent;
