import React, {FC} from 'react';
import { Divider, ListItem, ListItemText, IconButton} from "@material-ui/core";
import { Repo } from '../utils/github-api';
import SendIcon from '@material-ui/icons/Send';


const RepoComponent: FC<Repo> = ({ name, html_url, created_at }) => {
    
    return (
        <>
            <ListItem>
                <ListItemText
                    primary={name}
                    secondary={new Date(created_at).toLocaleDateString("de-DE")}>
                </ListItemText>
                <IconButton 
                    color="primary" 
                    size="small" 
                    title="Visit repository"
                    href={html_url}   
                ><SendIcon /></IconButton>
            </ListItem>
            <Divider />
        </>
    );
};

export default RepoComponent;
