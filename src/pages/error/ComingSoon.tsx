import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';
import { Snowboarding } from '@mui/icons-material';

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
        <Snowboarding sx={{ fontSize: 100, color: 'primary.main', mb: 2 }} />

        {/* Updated Title Text */}
        <Typography
          variant="h4"
          component="div"
          fontWeight="bold"
          mb={2}
          sx={{
            color: '#4CAF50',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          {featureName || 'Comming Soon'}
        </Typography>

        {/* Updated Subtitle Text */}
        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          sx={{
            fontSize: '1.2rem',
            color: '#555',
            fontStyle: 'italic',
            lineHeight: '1.6',
          }}
        >
          Thank you for your patience! We're busy building something amazing for you. Please check back soon.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGoBack}
          sx={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
          }}
        >
          Return to Dashboard
        </Button>
      </Box>
    </Container>
  );
}
