import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Title = (props) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography component='h2' variant='h6' color='primary'>
      <Box fontWeight='fontWeightBold' p={isSmall ? 1 : 2}>
        {props.children}
      </Box>
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
