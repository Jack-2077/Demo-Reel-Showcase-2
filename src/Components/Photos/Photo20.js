import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//NIGHT
import N1 from '../../Assests/Photos/2020/NIGHT/NIGHT_01.jpg';
import N2 from '../../Assests/Photos/2020/NIGHT/NIGHT_02.jpg';
import N3 from '../../Assests/Photos/2020/NIGHT/NIGHT_03.jpg';
import N4 from '../../Assests/Photos/2020/NIGHT/NIGHT_04.jpg';
import N5 from '../../Assests/Photos/2020/NIGHT/NIGHT_05.jpg';
import N6 from '../../Assests/Photos/2020/NIGHT/NIGHT_06.jpg';
import N7 from '../../Assests/Photos/2020/NIGHT/NIGHT_07.jpg';
import N8 from '../../Assests/Photos/2020/NIGHT/NIGHT_08.jpg';
import N9 from '../../Assests/Photos/2020/NIGHT/NIGHT_09.jpg';
import N10 from '../../Assests/Photos/2020/NIGHT/NIGHT_10.jpg';

//VANCITY
import V1 from '../../Assests/Photos/2020/VANCITY/VANCITY_01.jpg';
import V2 from '../../Assests/Photos/2020/VANCITY/VANCITY_02.jpg';
import V3 from '../../Assests/Photos/2020/VANCITY/VANCITY_03.jpg';
import V4 from '../../Assests/Photos/2020/VANCITY/VANCITY_04.jpg';
import V5 from '../../Assests/Photos/2020/VANCITY/VANCITY_05.jpg';
import V6 from '../../Assests/Photos/2020/VANCITY/VANCITY_06.jpg';
import V7 from '../../Assests/Photos/2020/VANCITY/VANCITY_07.jpg';
import V8 from '../../Assests/Photos/2020/VANCITY/VANCITY_08.jpg';
import V9 from '../../Assests/Photos/2020/VANCITY/VANCITY_09.jpg';
import V10 from '../../Assests/Photos/2020/VANCITY/VANCITY_10.jpg';
import V11 from '../../Assests/Photos/2020/VANCITY/VANCITY_11.jpg';
import V12 from '../../Assests/Photos/2020/VANCITY/VANCITY_12.jpg';
import V13 from '../../Assests/Photos/2020/VANCITY/VANCITY_13.jpg';
import V14 from '../../Assests/Photos/2020/VANCITY/VANCITY_14.jpg';
import V15 from '../../Assests/Photos/2020/VANCITY/VANCITY_15.jpg';
import V16 from '../../Assests/Photos/2020/VANCITY/VANCITY_16.jpg';
import V17 from '../../Assests/Photos/2020/VANCITY/VANCITY_17.jpg';
import V18 from '../../Assests/Photos/2020/VANCITY/VANCITY_18.jpg';
import V19 from '../../Assests/Photos/2020/VANCITY/VANCITY_19.jpg';
import V20 from '../../Assests/Photos/2020/VANCITY/VANCITY_20.jpg';

//YWN
import Y1 from '../../Assests/Photos/2020/YWN/YWN_01.jpg';
import Y2 from '../../Assests/Photos/2020/YWN/YWN_02.jpg';
import Y3 from '../../Assests/Photos/2020/YWN/YWN_03.jpg';
import Y4 from '../../Assests/Photos/2020/YWN/YWN_04.jpg';
import Y5 from '../../Assests/Photos/2020/YWN/YWN_05.jpg';
import Y6 from '../../Assests/Photos/2020/YWN/YWN_06.jpg';
import Y7 from '../../Assests/Photos/2020/YWN/YWN_07.jpg';
import Y8 from '../../Assests/Photos/2020/YWN/YWN_08.jpg';
import Y9 from '../../Assests/Photos/2020/YWN/YWN_09.jpg';
import Y10 from '../../Assests/Photos/2020/YWN/YWN_10.jpg';

const night_images = [N1, N2, N3, N4, N5, N6, N7, N8, N9, N10];
const vancity_images = [
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  V10,
  V11,
  V12,
  V13,
  V14,
  V15,
  V16,
  V17,
  V18,
  V19,
  V20,
];
const ywn_images = [Y1, Y2, Y3, Y4, Y5, Y6, Y7, Y8, Y9, Y10];

const ReelGrid = ({ image }) => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return <img src={image} style={styles} />;
};

const Photo20 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {/* night */}
        {night_images.map((item) => (
          <Grid item xs={12}>
            <ReelGrid image={item} />
          </Grid>
        ))}

        {/* vancity */}
        {vancity_images.map((item) => (
          <Grid item xs={12}>
            <ReelGrid image={item} />
          </Grid>
        ))}

        {/* ywn */}
        {ywn_images.map((item) => (
          <Grid item xs={12}>
            <ReelGrid image={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Photo20;
