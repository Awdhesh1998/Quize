import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="h1" component="div" color="error" fontWeight="bold">
          404
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={2}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          You might have mistyped the address or the page may have been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGoHome}
          sx={{ mt: 2 }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
