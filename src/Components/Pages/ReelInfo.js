import React from 'react';
import Grid from '@mui/material/Grid';

const styles = {
  width: '100%',
  height: '100%',
};

const ReelGrid = ({ images }) => {
  return <img src={images} style={styles} />;
};

const ImageGridItem = ({ set }) => {
  return set.map((item) => (
    <Grid item xs={12}>
      <ReelGrid images={item} />
    </Grid>
  ));
};

const VideoGridItem = ({ set }) => {
  const mediaType = (item) => '' + item.slice(item.length - 3);
  return set.map((item, i) => (
    <>
      {mediaType(item) === 'gif' ? (
        <img src={item} style={styles} />
      ) : (
        <video
          controls
          src={item}
          type='video/mp4'
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </>
  ));
};

const ReelInfo = ({ location }) => {
  const imageArray = location.imageArray;

  return (
    <Grid container>
      <ImageGridItem set={imageArray[0]} />
      <ImageGridItem set={imageArray[1]} />
      <VideoGridItem set={imageArray[2]} />
    </Grid>
  );
};

export default ReelInfo;
