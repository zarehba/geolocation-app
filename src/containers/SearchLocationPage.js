import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import SearchHistory from 'components/SearchHistory';
import Map from 'components/Map';
import LocationInfo from 'components/LocationInfo';
import Search from 'components/Search';
import Toast from 'components/Toast';
import useLocation from 'hooks/useLocation';
import useStateWithSessionStorage from 'hooks/useStateWithSessionStorage';

const useStyles = makeStyles((theme) => ({
  locationInfoContainer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '24px',
      marginBottom: '32px',
    },
  },
}));

const SearchLocationPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [searches, setSearches] = useStateWithSessionStorage('searches', [
    "User's location",
  ]);
  const locations = useLocation(searches[0]);
  const [lookedUpSearch, setLookedUpSearch] = useState(0);

  const addSearch = (search) => {
    if (search === searches[0]) return;

    setSearches([search, ...searches]);
    setLookedUpSearch(0);
  };

  const handleHistoryLookup = (index) => {
    setLookedUpSearch(index);
  };

  return (
    <>
      {locations[lookedUpSearch]?.error && (
        <Toast
          show={!!locations[lookedUpSearch]?.error}
          type='error'
          msg={locations[lookedUpSearch]?.error}
          key={`error_${locations[lookedUpSearch]?.search}`}
        />
      )}
      <Grid container spacing={3} mb={3}>
        <Grid container item justify='center' spacing={0} xs={12} md={3}>
          <SearchHistory
            lookedUpSearch={lookedUpSearch}
            searches={searches}
            handleHistoryLookup={handleHistoryLookup}
          />
        </Grid>

        <Grid container item spacing={isSmall ? 0 : 3} xs={12} md={9}>
          <Grid item xs={12} md={7}>
            <Map
              latitude={locations[lookedUpSearch]?.lat}
              longitude={locations[lookedUpSearch]?.lon}
              error={locations[lookedUpSearch]?.error}
            />
          </Grid>
          <Grid item xs={12} md={5} className={classes.locationInfoContainer}>
            <LocationInfo locInfo={locations[lookedUpSearch]} />
          </Grid>
          <Grid item xs={12}>
            <Search handleSearch={addSearch} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchLocationPage;
