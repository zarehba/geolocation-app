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

const LocationInfo = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} p={2} className={classes.container}>
      <Title>Location details</Title>
      <Table className={classes.table} aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell className={classes.title}>info key</TableCell>
            <TableCell>info value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.title}>info key 2</TableCell>
            <TableCell>info value 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.title}>info key 2</TableCell>
            <TableCell>info value 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default LocationInfo;
