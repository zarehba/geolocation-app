import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Title from 'components/Title';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
}));
const mapContentsStyle = {
  border: '0',
  width: '100%',
  height: '100%',
  minHeight: '50vh',
};

const Map = ({ latitude, longitude, error }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} p={2} className={classes.container}>
      <Title>Location on map</Title>
      {latitude && longitude ? (
        <iframe
          title='Location'
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
          style={mapContentsStyle}
          allowFullScreen
          loading='lazy'
        />
      ) : error ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '32px',
            color: '#f44336',
            ...mapContentsStyle,
          }}
        >
          {error}
        </div>
      ) : (
        <Skeleton variant='rect' style={mapContentsStyle} />
      )}
    </Paper>
  );
};

export default Map;
