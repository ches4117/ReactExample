import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#adc6ff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static" className={classes.root} >
        <Toolbar>
          <Link to="/">
          <IconButton className={classes.menuButton} color="#FFF" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Link>

          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            easy  
          </Button>
          <Menu
            id="easy-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link to="/ToDoList">ToDoList </Link>
            </MenuItem>
          </Menu>
          <div style={{ flexGrow: 1 }}/>
          <Button color="black" style={{ alignItems: 'right'}}>Login</Button>
        </Toolbar>
      </AppBar>
  );
}
