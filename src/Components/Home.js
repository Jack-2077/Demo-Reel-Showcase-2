import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import video1 from '../Assests/PROJECTS/01.GASSTATION/GS01.mp4';

import MAIN_SET from '.';

const Homediv = () => {
  const styles = {
    width: '100%',
    height: '100%',
  };
  //return <img src={home_gif} style={styles} />;
  return 'hi';
};

const ReelGrid = ({ imageArray }) => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return (
    <img
      src={imageArray[0][0]}
      style={styles}
      onClick={() => console.log('hi')}
    />
  );
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
          <Grid container spacing={0.5}>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[0]} />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[2]} />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[10]} />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[1]} />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[5]} />
            </Grid>
            <Grid item xs={6}>
              <ReelGrid imageArray={MAIN_SET[6]} />
            </Grid>
            <Grid item xs={6}>
              <ReelGrid imageArray={MAIN_SET[8]} />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[3]} />
            </Grid>
            <Grid item xs={6}>
              <ReelGrid imageArray={MAIN_SET[7]} />
            </Grid>
            <Grid item xs={6}>
              <ReelGrid imageArray={MAIN_SET[4]} />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid imageArray={MAIN_SET[9]} />
            </Grid>
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
