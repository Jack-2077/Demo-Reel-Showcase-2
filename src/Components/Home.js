import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import video1 from '../Assests/PROJECTS/01.GASSTATION/GS01.mp4';

import full_image1 from '../Assests/PROJECTS/01.GASSTATION/06.jpg';
import full_image2 from '../Assests/PROJECTS/02.ATELIER/ATLR01.jpg';
import full_image3 from '../Assests/PROJECTS/05.ROVER/SPACEROVER_03.jpg';
import full_image4 from '../Assests/PROJECTS/06.HALLOWEEN/Vfx02_AkshayVenugopal_HalloweenContest_02_Colour.jpg';
import full_image5 from '../Assests/PROJECTS/11.CRITTER/01_001.JPG';

import half_image1 from '../Assests/PROJECTS/03.917/917_01.jpg';
import half_image2 from '../Assests/PROJECTS/04.VELAR/VLR_01.jpg';
import half_image3 from '../Assests/PROJECTS/07.PORSCHE_SINGER/04.jpg';
import half_image4 from '../Assests/PROJECTS/08.ECDYSIS721/fs_frontquarter.jpg';
import half_image5 from '../Assests/PROJECTS/09.RESTLESS/Vfx02AkshayVenugopal_VFXPreProdFinalModel_Class08.v001-01.jpg';
import half_image6 from '../Assests/PROJECTS/10.TOWNCAR/CAM_02.jpg';

import MAIN_SET from '.';

const Homediv = () => {
  const styles = {
    width: '100%',
    height: '100%',
  };
  //return <img src={home_gif} style={styles} />;
  return 'hi';
};

const ReelGrid = ({ image }) => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return <img src={image} style={styles} />;
};

const ImageGridItem = ({ set }) => {
  return set.map((item) => (
    <Grid item xs={12}>
      <ReelGrid image={item} />
    </Grid>
  ));
};

const VideoGridItem = ({ set }) => {
  let videoType;
  return set.map((item, i) => (
    <>
      {i === 7 ? (
        <img src={item} />
      ) : (
        <video
          controls
          // autostart
          // autoPlay
          src={item}
          type='video/mp4'
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </>
  ));
};

function Home() {
  return (
    <>
      <Homediv />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            {MAIN_SET.map((sets) =>
              sets.map((set, i) => {
                return i === 0 || i === 1 ? (
                  <ImageGridItem set={set} />
                ) : (
                  <VideoGridItem set={set} />
                );
              })
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Home;

//1200 and 650
//height 754px  100vh
//width 100%
