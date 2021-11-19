import reel from "./download.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Homediv = () => {
  const styles = {
    backgroundColor: "green",
    position: "absolute",
    top: "60px",
    right: "0px",
    left: "0px"
  };
  return <div style={styles}>hi</div>;
};

const ReelGrid = () => {
  const styles = {
    width: "100%",
    height: "100%"
  };

  return <img src={reel} style={styles} />;
};

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;

//1200 and 650
//height 754px  100vh
//width 100%
