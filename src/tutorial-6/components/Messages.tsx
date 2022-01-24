import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { IMessageProps } from "../interfaces/IMessageProps";

export const Messages: React.FC<IMessageProps> = (props) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <AccountCircleIcon fontSize="large" />
        </ListItemAvatar>
        <ListItemText
          primary={props.user.fullName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary">
                {props.user.text}{" "}
              </Typography>
              {props.user.createdAt}
            </React.Fragment>
          }
        />
        <Button size="small" onClick={() => props.removeComm(props.index)} variant="contained">
          X
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
