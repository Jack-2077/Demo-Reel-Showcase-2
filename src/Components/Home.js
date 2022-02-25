import { motion } from 'framer-motion';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import pic1 from '../Assests/PROJECTS/01.GASSTATION/06.jpg';
import pic2 from '../Assests/PROJECTS/02.ATELIER/ATLR01.jpg';
import pic3 from '../Assests/PROJECTS/03.917/917_01.jpg';
import pic4 from '../Assests/PROJECTS/03.917/917_02.jpg';
import pic5 from '../Assests/PROJECTS/03.917/917_03.jpg';
import pic6 from '../Assests/PROJECTS/03.917/917_04.jpg';
import pic7 from '../Assests/PROJECTS/03.917/917_05.jpg';
import pic8 from '../Assests/PROJECTS/03.917/917_06.jpg';
import pic9 from '../Assests/PROJECTS/03.917/917_07.jpg';
import pic10 from '../Assests/PROJECTS/04.VELAR/VLR_01.jpg';
import pic11 from '../Assests/PROJECTS/05.ROVER/SPACEROVER_03.jpg';
import pic12 from '../Assests/PROJECTS/05.ROVER/SPACEROVER_004.jpg';
import pic13 from '../Assests/PROJECTS/05.ROVER/SPACEROVER_005.jpg';
import pic14 from '../Assests/PROJECTS/06.HALLOWEEN/Vfx02_AkshayVenugopal_HalloweenContest_02_Colour.jpg';
import pic15 from '../Assests/PROJECTS/06.HALLOWEEN/Vfx02_AkshayVenugopal_HalloweenContest_02_DAY.jpg';
import pic16 from '../Assests/PROJECTS/07.PORSCHE_SINGER/04.jpg';
import pic17 from '../Assests/PROJECTS/08.ECDYSIS721/fs_frontquarter.jpg';
import pic18 from '../Assests/PROJECTS/08.ECDYSIS721/FS_SIDE.jpg';
import pic19 from '../Assests/PROJECTS/08.ECDYSIS721/FS02.jpg';
import pic20 from '../Assests/PROJECTS/08.ECDYSIS721/FS03.jpg';
import pic21 from '../Assests/PROJECTS/08.ECDYSIS721/GREYSPIKE.jpg';
import pic22 from '../Assests/PROJECTS/08.ECDYSIS721/ORANGE.jpg';
import pic23 from '../Assests/PROJECTS/08.ECDYSIS721/SCENE_04_001.jpg';
import pic24 from '../Assests/PROJECTS/09.RESTLESS/Vfx02AkshayVenugopal_VFXPreProdFinalModel_Class08.v001-01.jpg';
import pic25 from '../Assests/PROJECTS/10.TOWNCAR/CAM_02.jpg';
import pic26 from '../Assests/PROJECTS/10.TOWNCAR/CAM_04_02.jpg';
import pic27 from '../Assests/PROJECTS/10.TOWNCAR/CAM_05_03.jpg';
import pic28 from '../Assests/PROJECTS/11.CRITTER/01_001.JPG';

import grey1 from '../Assests/PROJECTS/01.GASSTATION/grey.jpg';
import grey2 from '../Assests/PROJECTS/02.ATELIER/ATLR02.jpg';
import grey3 from '../Assests/PROJECTS/04.VELAR/VLR_02.jpg';
import grey4 from '../Assests/PROJECTS/07.PORSCHE_SINGER/04b&w.jpg';
import grey5 from '../Assests/PROJECTS/11.CRITTER/02_085.JPG';

import video1 from '../Assests/PROJECTS/01.GASSTATION/GS01.mp4';
import video2 from '../Assests/PROJECTS/02.ATELIER/ATLR01.mp4';
import video3 from '../Assests/PROJECTS/03.917/01.mp4';
import video4 from '../Assests/PROJECTS/04.VELAR/VLR01.mp4';
import video5 from '../Assests/PROJECTS/05.ROVER/ROVER01.mp4';
import video6 from '../Assests/PROJECTS/06.HALLOWEEN/HALOWEEN01.mp4';
import video7 from '../Assests/PROJECTS/07.PORSCHE_SINGER/04.gif';
import video8 from '../Assests/PROJECTS/09.RESTLESS/FINAL_EDIT_AUG18_v003_FINAL.mp4';
import video9 from '../Assests/PROJECTS/11.CRITTER/CRITTER01.mp4';

import home_gif from '../Videos/GIF03.gif';
// const variants = {
//   hidden: { opacity: 0, x: -100, y: 0 },
//   enter: { opacity: 1, x: 0.1, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

const home_images = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
];
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

// const variants = {
//   hidden: { opacity: 0, x: 50, y: 50 },
//   enter: { opacity: 1, x: -0.5, y: 0 },
//   exit: { opacity: 0, x: 100, y: 0 },
// };

const Homediv = () => {
  const styles = {
    width: '100%',
    height: '100%',
  };
  return <img src={home_gif} style={styles} />;
};

const ReelGrid = ({ image }) => {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return <img src={image} style={styles} />;
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
          <Grid container>
            {home_images.map((item) => (
              <Grid item xs={12}>
                <ReelGrid image={item} />
              </Grid>
            ))}
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
