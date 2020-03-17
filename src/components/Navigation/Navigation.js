import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


export const classNames = {
  navigationTab: 'navigation--tab'
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Navigation = (props) => {
  const classes = useStyles();
  const { location } = props;
  const { pathname } = location;

  const [value, setValue] = React.useState(pathname);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const pathValue = value === '/' ? '/films/' : value
  const isLoggedIn = !!props.token;
  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Tabs value={pathValue} onChange={handleChange}>
            (isLoggedIn ? <Tab label="films" 
              className={classNames.navigationTab}
              value="/films/" 
              component={Link} 
              to={'/films/'} />
            /> : "")
            <Tab label="study" 
              className={classNames.navigationTab}
              value="/study/" 
              component={Link} 
              to={'/study/'} />
            />
            <Tab label="vocabulary" 
              className={classNames.navigationTab}
              value="/vocabulary/" 
              component={Link} 
              to={'/vocabulary/'} />
            />
            <Tab label="words" 
              className={classNames.navigationTab}
              value="/words/" 
              component={Link}
              to={'/words/'} />
            />
            <Tab label="blacklist" 
              className={classNames.navigationTab}
              value="/blacklist/" 
              component={Link}
              to={'/blacklist/'} />
            />
          </Tabs>

          <Button>
            <Link to={!isLoggedIn ? "/login/" : "/logout/"} color="inherit">{!isLoggedIn ? "Login" : "Logout"}
            </Link>
           </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  }  
}

const locationPropShape = {
  pathname: PropTypes.oneOf(['/','/films/', '/study/', '/words/','/blacklist/','/logout/','/logout','/login/', '/login']).isRequired
}

Navigation.propTypes = {
  location: PropTypes.shape(locationPropShape)
}

export default withRouter(connect(mapStateToProps)(Navigation)) 