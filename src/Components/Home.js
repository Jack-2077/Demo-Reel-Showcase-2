import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import home_gif from '../Assests/Videos/GIF03.gif';
import { Link } from 'react-router-dom';

import './Home.css';
import MAIN_SET from '.';

const Homediv = () => {
  const styles = {
    width: '100%',
    height: '100%',
  };
  return <img src={home_gif} style={styles} />;
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

const FullSizeGrid = ({ mainSet, title, fullSize }) => {
  return (
    <>
      <Grid item xs={fullSize ? '12' : '6'}>
        <div className='container'>
          <ReelGrid imageArray={mainSet} />
          <div className='middle'>
            <div className={fullSize ? 'text' : 'text2'}>{title}</div>
          </div>
        </div>
      </Grid>
    </>
  );
};

function Home() {
  return (
    <>
      <Homediv />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <FullSizeGrid
              mainSet={MAIN_SET[0]}
              title='GASSTATION'
              fullSize={true}
            />
            <FullSizeGrid mainSet={MAIN_SET[2]} title='917' fullSize={true} />
            <FullSizeGrid
              mainSet={MAIN_SET[10]}
              title='CRITTER'
              fullSize={true}
            />
            <FullSizeGrid
              mainSet={MAIN_SET[1]}
              title='ATELIER'
              fullSize={true}
            />
            <FullSizeGrid
              mainSet={MAIN_SET[5]}
              title='HALLOWEEN'
              fullSize={true}
            />
            <FullSizeGrid
              mainSet={MAIN_SET[6]}
              title='PORSCHE SINGER'
              fullSize={false}
            />
            <FullSizeGrid
              mainSet={MAIN_SET[8]}
              title='RESTLESS'
              fullSize={false}
            />
            <FullSizeGrid mainSet={MAIN_SET[3]} title='VELAR' fullSize={true} />
            <FullSizeGrid
              mainSet={MAIN_SET[7]}
              title='ROVER'
              fullSize={false}
            />
            <FullSizeGrid
              mainSet={MAIN_SET[4]}
              title='SPACE ROVER'
              fullSize={false}
            />
            <FullSizeGrid
              mainSet={MAIN_SET[9]}
              title='TOWNCAR'
              fullSize={true}
            />
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
