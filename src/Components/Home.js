import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
    <video>
      {i === 7 ? <img src={item} /> : <source src={item} type='video/mp4' />}
    </video>
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
