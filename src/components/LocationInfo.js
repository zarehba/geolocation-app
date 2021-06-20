import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Title from 'components/Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  table: {
    maxWidth: '50vw',
    margin: 'auto',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const uppercaseFirstLetter = (str) =>
  !str ? str : str[0].toUpperCase() + str.substr(1);
const keyToDisplayedKey = (key) => {
  switch (key) {
    case 'search':
      return 'Search query';
    case 'regionName':
      return 'Region';
    case 'query':
      return 'IP';
    default:
      return uppercaseFirstLetter(key);
  }
};

const LocationInfo = ({ locInfo }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} p={2} className={classes.container}>
      <Title>Location details</Title>
      {locInfo && (
        <Table className={classes.table} aria-label='simple table'>
          <TableBody>
            {Object.entries(locInfo)
              .filter(
                ([key]) =>
                  [
                    'search',
                    'query',
                    'country',
                    'regionName',
                    'city',
                    'lat',
                    'lon',
                  ].indexOf(key) > -1
              )
              .map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className={classes.title}>
                    {keyToDisplayedKey(key)}
                  </TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
};

export default LocationInfo;
