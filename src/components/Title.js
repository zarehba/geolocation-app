import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Title = (props) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography component='h2'>
      <Box p={isSmall ? 1 : 2}>{props.children}</Box>
    </Typography>
  );
};

export default Title;
