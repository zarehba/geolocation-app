import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GlobeIcon from '@material-ui/icons/Public';

const useStyles = makeStyles(() => ({
  title: { marginLeft: '16px' },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='absolute'>
      <Toolbar>
        <GlobeIcon />
        <Typography
          component='h1'
          variant='h6'
          noWrap
          className={classes.title}
        >
          Look up location of an IP/URL
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
