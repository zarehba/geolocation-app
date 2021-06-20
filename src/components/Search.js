import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <TextField fullWidth label='IP or URL' variant='outlined' />
          </Grid>
          <Grid item xs={5}>
            <Button
              variant='contained'
              color='primary'
              size='medium'
              className={classes.button}
              type='submit'
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Search;
