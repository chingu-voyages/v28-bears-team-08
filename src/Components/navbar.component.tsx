import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { setFlagsFromString } from 'v8';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';

export interface isAuthedProps {
  isAuthenticated: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar: FunctionComponent<isAuthedProps> = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          Logo To Come
        </Typography>
        {isAuthenticated ? (
          <>
            <div>
              <Link to="/profile">PROFILE</Link>
            </div>
            <div>
              <Link to="/logout">LOGOUT</Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/register">REGISTER</Link>
            </div>
            <div>
              <Link to="/Login">LOGIN</Link>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
