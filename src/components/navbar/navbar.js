import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="chat" href="/chats" />
          <LinkTab label="news" href="/news" />
          <LinkTab label="events" href="/event" />
          <LinkTab label="tasks" href="/tasks" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Chat</TabContainer>}
      {value === 1 && <TabContainer>News</TabContainer>}
      {value === 2 && <TabContainer>Events</TabContainer>}
      {value === 3 && <TabContainer>Tasks</TabContainer>}
    </div>
  );
}

export default NavTabs;
