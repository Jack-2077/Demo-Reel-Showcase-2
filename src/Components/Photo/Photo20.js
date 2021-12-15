import React from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//NIGHT
import N1 from '../../Photos/2020/NIGHT/NIGHT_01.jpg'
import N2 from '../../Photos/2020/NIGHT/NIGHT_02.jpg'
import N3 from '../../Photos/2020/NIGHT/NIGHT_03.jpg'
import N4 from '../../Photos/2020/NIGHT/NIGHT_04.jpg'
import N5 from '../../Photos/2020/NIGHT/NIGHT_05.jpg'
import N6 from '../../Photos/2020/NIGHT/NIGHT_06.jpg'
import N7 from '../../Photos/2020/NIGHT/NIGHT_07.jpg'
import N8 from '../../Photos/2020/NIGHT/NIGHT_08.jpg'
import N9 from '../../Photos/2020/NIGHT/NIGHT_09.jpg'
import N10 from '../../Photos/2020/NIGHT/NIGHT_10.jpg'


const ReelGrid = ({image}) => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return <img src={image} style={styles} />;
};


const Photo20 = () => {

 
  

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <ReelGrid image={N1}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N2}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N3}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N4}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N5}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N6}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N7}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N8}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N9}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={N10}/>
      </Grid>
      </Grid>
  </Box>

  )
}

export default Photo20