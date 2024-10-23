import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const views = ['Show cards layout', 'Show sankey layout'];

export default function SettingPopUp({ open, selectedView, onClose }) {
  const handleClose = () => {
    onClose(selectedView)
  };

  const handleItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Settings</DialogTitle>
      <List sx={{ pt: 0 }}>
        {views.map((view) => (
          <ListItem disableGutters key={view}>
            <ListItemButton onClick={() => handleItemClick(view)}>
              <ListItemAvatar>
                <Avatar>
                  <CheckBoxOutlineBlankIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={view} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}