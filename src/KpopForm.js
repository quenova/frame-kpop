import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const KpopForm = () => {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [bias, setBias] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Favorite Group: ${group}, Bias: ${bias}, Age Group: ${ageGroup}`);

    // Perform any necessary actions after form submission (e.g., store data to Firebase)

    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/images/skz.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', minWidth: 300, maxWidth: 600 }}>
        <Typography variant="h5" gutterBottom>
          Kpop Fan Form
        </Typography>
        {!submitted ? ( // Show form if not submitted
          <>
            <Typography variant="body1" paragraph>
              We would love to know more about you and your favorite Kpop group. Fill out the form below to share your information.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Favorite Kpop Group"
                type="text"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                variant="outlined"
                required
              />
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">Bias (Favorite Member)</FormLabel>
                <TextField
                  fullWidth
                  label="Bias Name"
                  type="text"
                  value={bias}
                  onChange={(e) => setBias(e.target.value)}
                  variant="outlined"
                />
              </FormControl>
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">Age Group</FormLabel>
                <RadioGroup
                  aria-label="ageGroup"
                  name="ageGroup"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  row
                >
                  <FormControlLabel value="under20" control={<Radio />} label="Under 20" />
                  <FormControlLabel value="20to30" control={<Radio />} label="20 to 30" />
                  <FormControlLabel value="over30" control={<Radio />} label="Over 30" />
                </RadioGroup>
              </FormControl>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
          </>
        ) : ( // Show thank you message if form is submitted
          <Typography variant="body1" paragraph>
            Terima kasih telah mengirimkan formulir!
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default KpopForm;
