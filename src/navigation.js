import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Popover from '@material-ui/core/Popover'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#adc6ff',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}))

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
))

const theme = createMuiTheme({
    overrides: {
        MuiList: {
            root: {
                width: 300
            }
        }
    }
})

export default function Navigation() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Link to="/">
                    <IconButton className={classes.menuButton} color="#FFF" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Link>

                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
          Easy example
                </Button>

                <ThemeProvider theme={theme}>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        style={{ padding: 16 }}
                    >
                        <Link to="/ToDoList" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem>
                                <ListItemText primary="ToDoList" />
                            </MenuItem>
                        </Link>
                    </StyledMenu>
                </ThemeProvider>

                <div style={{ flexGrow: 1 }} />
                <Button color="black" style={{ alignItems: 'right' }}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}
