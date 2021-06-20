import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchLocationPage from 'containers/SearchLocationPage';
import Header from 'components/Header';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className='App'>
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <SearchLocationPage />
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
