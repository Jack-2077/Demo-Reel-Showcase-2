import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import reel from '../download.png';
import Container from '@material-ui/core/Container';
import './Reel.css'

export default function Reel() {
  const ReelGrid = () => {
    const styles = {
      width: '100%',
      height: '100%',
    };

    return <img src={reel} style={styles} />;
  };

  return (
      <Container maxWidth="xl">
        <div className="videoWrapper">
        <iframe
          title='vimeo-player'
          src='https://player.vimeo.com/video/507376902?h=5a521858dc?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0'
          frameborder='0'
          allow='autoplay; fullscreen'
          allowfullscreen
        ></iframe>
        </div>  
        <ReelGrid />
        <ReelGrid />
        <ReelGrid />
        <ReelGrid />
      </Container>
    
  );
}


//add comment to check commits