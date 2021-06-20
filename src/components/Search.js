import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const checkIfIpOrUrl = (text) => {
  const regexIpOrUrl =
    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
  return text.match(regexIpOrUrl);
};

const Search = ({ handleSearch }) => {
  const [input, setInput] = useState();
  const [isInputValid, setIsInputValid] = useState(true);

  const classes = useStyles();

  const validateInput = (inputText) => checkIfIpOrUrl(inputText);
  const handleForm = (e) => {
    e.preventDefault();

    const isValid = validateInput(input);
    setIsInputValid(isValid);

    if (isValid) {
      return handleSearch(input);
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <form noValidate autoComplete='off' onSubmit={handleForm}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <TextField
              fullWidth
              label='IP or URL'
              variant='outlined'
              onChange={handleInput}
              error={!isInputValid}
              helperText={
                !isInputValid && 'Please enter a valid IP or URL address'
              }
            />
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
