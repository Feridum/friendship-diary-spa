import React, {FC, useState} from "react";
import {
    AppBar,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
} from "@material-ui/core";
import {AccountCircle, Inbox, Menu as MenuIcon} from '@material-ui/icons';
import {useHistory} from "react-router-dom";
import {ADD_MEMORY, FRIENDS, LOGIN, MEMORIES, MEMORIES_DRAFT, USERS} from "../../../routing/routes";

const useStyles = makeStyles({
    root: {
        justifyContent: 'space-between',
    },
});


export const MainLayout: FC = ({children}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    const handleLogout = () => {
        history.push(LOGIN)
    };

    const handleIconClick = (e: any) => {
        setMenuOpen(true)
    };

    const handleProfileClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const MenuOptions = [
        {
            text: 'Wspomnienia',
            icon: <Inbox/>,
            onClick: () => {
                history.push(MEMORIES);
            }
        },
        {
            text: 'Wersje robocze wspomnień',
            icon: <Inbox/>,
            onClick: () => {
                history.push(MEMORIES_DRAFT)
            }
        },
        {
            text: 'Dodaj wspomnienie',
            icon: <Inbox/>,
            onClick: () => {
                history.push(ADD_MEMORY)
            }
        },
        {
            text: 'Znajomi',
            icon: <Inbox/>,
            onClick: () => {
                history.push(FRIENDS)
            }
        },
        {
            text: 'Wszyscy użytkownicy',
            icon: <Inbox/>,
            onClick: () => {
                history.push(USERS)
            }
        }
    ];
    return (
        <>
            <AppBar position="static">
                <Toolbar classes={classes}>
                    <div>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleIconClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Drawer open={isMenuOpen} onClose={() => setMenuOpen(false)}>
                            <List>
                                {MenuOptions.map((option) => (
                                    <ListItem button key={option.text} onClick={option.onClick}>
                                        <ListItemIcon>{option.icon}</ListItemIcon>
                                        <ListItemText primary={option.text}/>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </div>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleProfileClick}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                            id={'menuId'}
                            keepMounted
                            transformOrigin={{vertical: 'top', horizontal: 'right'}}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {/*<MenuItem onClick={() => history.push(PROFILE)}>Profil</MenuItem>*/}
                            <MenuItem onClick={handleLogout}>Wyloguj</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth='md'>
                {children}
            </Container>
        </>
    )
}