import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

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

const Navigation = (props) => {
  const classes = useStyles();
  const { location } = props;
  const { pathname } = location;

  const [value, setValue] = React.useState(pathname);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="study" 
            value="/study/" 
            component={Link} 
            to={'/study/'} />
          />
          <Tab label="words" 
            value="/words/" 
            component={Link}
            to={'/words/'} />
          />
          <Tab label="blacklist" 
            value="/blacklist/" 
            component={Link}
            to={'/blacklist/'} />
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default withRouter(Navigation)  