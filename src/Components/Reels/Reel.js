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
    <>
    <div className="content">
    <h2>The Evinetta</h2>
    <p>We designed this car around the incredible 1970's Ferrari Berlinetta concept designed by renowned Pininfarina.  We thought it would be a unique concept to combine the past with the present and package it together as a hybrid.  The Evinetta is propelled by a Tesla Model S powertrain with active ride suspension, custom wheels, and a chassis and interior bits from a Porsche RSR.  
</p></div>
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
    </>
  );
}


//add comment to check commits