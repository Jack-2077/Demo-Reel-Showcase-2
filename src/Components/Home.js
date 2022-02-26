import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import video1 from '../Assests/PROJECTS/01.GASSTATION/GS01.mp4';
import { Link } from 'react-router-dom';

import './Home.css';
import MAIN_SET from '.';

const Homediv = () => {
  const styles = {
    width: '100%',
    height: '100%',
  };
  //return <img src={home_gif} style={styles} />;
  return 'hi';
};

const styles = {
  width: '100%',
  height: '100%',
};

const ReelGrid = ({ imageArray }) => {
  const newTo = {
    pathname: '/ReelInfo',
    imageArray,
  };
  return (
    <Link to={newTo}>
      <img src={imageArray[0][0]} style={styles} className='image' />
    </Link>
  );
};

function Home() {
  return (
    <>
      <Homediv />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[0]} />
                <div class='middle'>
                  <div class='text'>GASSTATION</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[2]} />
                <div class='middle'>
                  <div class='text'>917</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[10]} />
                <div class='middle'>
                  <div class='text'>CRITTER</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[1]} />
                <div class='middle'>
                  <div class='text'>ATELIER</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[5]} />
                <div class='middle'>
                  <div class='text'>HALLOWEEN</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[6]} />
                <div class='middle'>
                  <div class='text2'>PORSCHE SINGER</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[8]} />
                <div class='middle'>
                  <div class='text2'>RESTLESS</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[3]} />
                <div class='middle'>
                  <div class='text'>VELAR</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[7]} />
                <div class='middle'>
                  <div class='text2'>ECDYSIS721</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[4]} />
                <div class='middle'>
                  <div class='text2'>ROVER</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='container'>
                <ReelGrid imageArray={MAIN_SET[9]} />
                <div class='middle'>
                  <div class='text'>TOWNCAR</div>
                </div>
              </div>
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
