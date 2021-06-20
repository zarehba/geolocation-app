import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import SearchHistory from 'components/SearchHistory';
import Map from 'components/Map';
import LocationInfo from 'components/LocationInfo';
import Search from 'components/Search';
import useLocation from 'hooks/useLocation';
import useStateWithSessionStorage from 'hooks/useStateWithSessionStorage';

const SearchLocationPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [searches, setSearches] = useStateWithSessionStorage('searches', [
    "User's location",
  ]);
  const locations = useLocation(searches[0]);
  const [lookedUpSearch, setLookedUpSearch] = useState(0);

  console.log(locations);
  // console.log(searches, lookedUpSearch, searches[lookedUpSearch]);

  const addSearch = (search) => {
    setSearches([search, ...searches]);
  };

  const handleHistoryLookup = (index) => {
    setLookedUpSearch(index);
  };

  return (
    <>
      <Grid container spacing={3} mb={3} className='xx'>
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
            />
          </Grid>
          <Grid item xs={12} md={5}>
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
