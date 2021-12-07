import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import reel from '../download.png';

export default function Reel() {
  const ReelGrid = () => {
    const styles = {
      width: '100%',
      height: '100%',
    };

    return <img src={reel} style={styles} />;
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction='column'
          justifyContent='space-around'
          alignItems='center'
        >
          <Grid item xs={6}>
            <iframe
              title='vimeo-player'
              src='https://player.vimeo.com/video/507376902?h=5a521858dc?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0'
              width='1000'
              height='850'
              frameborder='0'
              allow='autoplay; fullscreen'
              allowfullscreen
            ></iframe>
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
        </Grid>
      </Box>
    </div>
  );
}
