import { motion } from 'framer-motion';

import reel from './download.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const variants = {
  hidden: { opacity: 0, x: 100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 100, y: 0 },
};

const Homediv = () => {
  const styles = {
    backgroundColor: 'green',
    position: 'absolute',
    top: '60px',
    right: '0px',
    left: '0px',
  };
  return <div style={styles}>hi</div>;
};

const ReelGrid = () => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return <img src={reel} style={styles} />;
};

function Home() {
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial='hidden' // Set the initial state to variants.hidden
      animate='enter' // Animated state to variants.enter
      exit='exit' // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className=''
    >
      <Homediv />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <Grid item xs={6}>
              <ReelGrid />
            </Grid>
            <Grid item xs={6}>
              <ReelGrid />
            </Grid>
            <Grid item xs={12}>
              <ReelGrid />
            </Grid>
            <Grid item xs={6}>
              <ReelGrid />
            </Grid>

            <Grid item xs={6}>
              <ReelGrid />
            </Grid>
          </Grid>
        </Box>
      </div>
    </motion.div>
  );
}

export default Home;

//1200 and 650
//height 754px  100vh
//width 100%
