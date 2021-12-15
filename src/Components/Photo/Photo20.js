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

//VANCITY
import V1 from '../../Photos/2020/VANCITY/VANCITY_01.jpg'
import V2 from '../../Photos/2020/VANCITY/VANCITY_02.jpg'
import V3 from '../../Photos/2020/VANCITY/VANCITY_03.jpg'
import V4 from '../../Photos/2020/VANCITY/VANCITY_04.jpg'
import V5 from '../../Photos/2020/VANCITY/VANCITY_05.jpg'
import V6 from '../../Photos/2020/VANCITY/VANCITY_06.jpg'
import V7 from '../../Photos/2020/VANCITY/VANCITY_07.jpg'
import V8 from '../../Photos/2020/VANCITY/VANCITY_08.jpg'
import V9 from '../../Photos/2020/VANCITY/VANCITY_09.jpg'
import V10 from '../../Photos/2020/VANCITY/VANCITY_10.jpg'
import V11 from '../../Photos/2020/VANCITY/VANCITY_11.jpg'
import V12 from '../../Photos/2020/VANCITY/VANCITY_12.jpg'
import V13 from '../../Photos/2020/VANCITY/VANCITY_13.jpg'
import V14 from '../../Photos/2020/VANCITY/VANCITY_14.jpg'
import V15 from '../../Photos/2020/VANCITY/VANCITY_15.jpg'
import V16 from '../../Photos/2020/VANCITY/VANCITY_16.jpg'
import V17 from '../../Photos/2020/VANCITY/VANCITY_17.jpg'
import V18 from '../../Photos/2020/VANCITY/VANCITY_18.jpg'
import V19 from '../../Photos/2020/VANCITY/VANCITY_19.jpg'
import V20 from '../../Photos/2020/VANCITY/VANCITY_20.jpg'

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

      <Grid item xs={12}>
        <ReelGrid image={V1}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V2}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V3}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V4}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V5}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V6}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V7}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V8}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V9}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V10}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V11}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V12}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V13}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V14}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V15}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V16}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V17}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V18}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V19}/>
      </Grid>
      <Grid item xs={12}>
        <ReelGrid image={V20}/>
      </Grid>
      
      </Grid>
  </Box>

  )
}

export default Photo20