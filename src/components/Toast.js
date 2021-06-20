import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={5} variant='filled' {...props} />;
}

const Toast = ({ msg, type, show }) => {
  const [isOpen, setIsOpen] = useState(show);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={3500} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
