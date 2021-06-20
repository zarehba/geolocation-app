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
    <Paper elevation={2} p={2} className={classes.container}>
      <Title>Search history</Title>
      <List component='nav' aria-label='Looked up IPs/URLs'>
        {searches.map((searchStr, i) => (
          <ListItem
            button
            key={`search_${searchStr}_${searchStr.length - i}`}
            selected={lookedUpSearch === i}
            onClick={handleHistoryLookup.bind(null, i)}
          >
            <ListItemText primary={searchStr} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchHistory;
