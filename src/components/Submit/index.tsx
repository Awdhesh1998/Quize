import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { useFormStatus } from 'react-dom';

export default function Submit({icon}:any) {
    const { pending } = useFormStatus();
  
  const buttonSx = {
    ...(pending && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };
  const Icon = icon;
  const itemIcon = icon ? <Icon />:"";
  return (
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={pending}
          type="submit"
          fullWidth
        >
           {itemIcon}Submit
          {pending && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
        </Button>
  );
}
