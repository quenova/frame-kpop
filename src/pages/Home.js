import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(skz.jpg)', // Path ke skz.jpg di dalam folder public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2
      }}
    >
      <Paper sx={{ p: 3, backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff' }}>
        <Typography variant="h2" gutterBottom>
          Haloo Ini adalah halaman Kpop Nova
        </Typography>
        <Typography variant="h5" paragraph>
          Ini adalah tempat bagi para penggemar Kpop untuk terhubung dan berbagi kecintaan mereka terhadap grup favorit mereka. 
          Baik Anda penggemar lama atau baru memulai, kami punya sesuatu untuk semua orang. 
          Bergabunglah dengan komunitas kami, berpartisipasi dalam diskusi, dan ikuti terus berita terbaru di dunia Kpop.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/login">
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
