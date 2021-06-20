import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Search = () => {
  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <TextField fullWidth label='IP or URL' variant='outlined' />
          </Grid>
          <Grid item xs={5}>
            <Button>Search</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Search;
