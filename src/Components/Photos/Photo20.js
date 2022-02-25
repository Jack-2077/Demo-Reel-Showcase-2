import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { images_20 } from './index';

const ReelGrid = ({ image }) => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return <img src={image} style={styles} alt='photography' />;
};

const Photo20 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {images_20.map((images) =>
          images.map((image) => (
            <Grid item xs={12}>
              <ReelGrid image={image} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Photo20;
