import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';
import { Construction } from '@mui/icons-material';

export default function ComingSoon({
  featureName,
  redirectPath = '/',
}: Readonly<{
  featureName?: string;
  redirectPath?: string;
}>) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(redirectPath); // Navigate to the provided redirect path
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
        <Construction
          sx={{ fontSize: 100, color: 'primary.main', mb: 2 }}
        />
        <Typography variant="h4" component="div" fontWeight="bold" mb={2}>
          {featureName || 'Coming Soon!'}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          We are working hard to bring this feature to you. Stay tuned for updates!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGoBack}
        >
          Go Back
        </Button>
      </Box>
    </Container>
  );
}
