import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Title from 'components/Title';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '7em',
      overflowY: 'auto',
    },
  },
}));

const SearchHistory = ({ searches, handleHistoryLookup, lookedUpSearch }) => {
  const classes = useStyles();

  return (
    <Paper p={2} className={classes.container}>
      <Title>Search history</Title>
      <List component='nav' aria-label='Looked up IPs/URLs'>
        <ListItem button selected={true}>
          <ListItemText primary={'text1'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'text2'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'text3'} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default SearchHistory;
