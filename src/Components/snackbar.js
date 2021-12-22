import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector,useDispatch } from 'react-redux';
import  {closesnackbar} from '../redux/slices/user'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
const user= useSelector((state) => state.user)

const dispatch =useDispatch()


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closesnackbar())

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
     
      <Snackbar open={user.snackbar!==null} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={user.snackbar?.type} sx={{ width: '100%' }}>
        {user.snackbar?.message}
        </Alert>
      </Snackbar>
      {}
      
     
    </Stack>
  );
}
