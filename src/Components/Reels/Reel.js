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

/*
<div
        class='sqs-block video-block sqs-block-video'
        data-block-json='{"blockAnimation":"none","layout":"caption-hidden","overlay":false,"description":{"html":""},"html":"<iframe src=\"https://player.vimeo.com/video/496218444?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0\" width=\"1920\" height=\"1080\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>","resolvedBy":"manual"}'
        data-block-type='32'
        id='block-40f2c1d25036c5d4c644'
      >
        <div class='sqs-block-content' id='yui_3_17_2_1_1638766030293_93'>
          <div
            class='sqs-video-wrapper video-none'
            data-html='<iframe src="https://player.vimeo.com/video/496218444?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
            data-provider-name=''
            id='yui_3_17_2_1_1638766030293_100'
          >
            <div class='intrinsic'>
              <div class='intrinsic-inner' style='padding-bottom: 56.25%;'>
                <iframe
                  src='https://player.vimeo.com/video/496218444?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0'
                  width='1920'
                  height='1080'
                  frameborder='0'
                  allow='autoplay; fullscreen'
                  allowfullscreen=''
                  id='yui_3_17_2_1_1638766030293_104'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>*/
