import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import SearchHistory from 'components/SearchHistory';
import Map from 'components/Map';
import LocationInfo from 'components/LocationInfo';
import Search from 'components/Search';

const SearchLocationPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [searches, setSearches] = useState([]);

  const addSearch = (search) => {
    setSearches([search, ...searches]);
  };
  console.log(searches);

  return (
    <>
      <Grid container spacing={3} mb={3} className='xx'>
        <Grid container item justify='center' spacing={0} xs={12} md={3}>
          <SearchHistory />
        </Grid>

        <Grid container item spacing={isSmall ? 0 : 3} xs={12} md={9}>
          <Grid item xs={12} md={7}>
            <Map />
          </Grid>
          <Grid item xs={12} md={5}>
            <LocationInfo />
          </Grid>
          <Grid item xs={12}>
            <Search handleSearch={addSearch} />
            {searches[0]}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchLocationPage;
