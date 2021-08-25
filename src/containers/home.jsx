import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    const refTabActive = React.createRef()

  return (

  <Container maxWidth="lg">
    <Grid container spacing={2}>
        <Grid item xs={12}>
            COMPONENT
        </Grid>
        <Grid item xs={12}>
            COMPONENT
        </Grid>
        <Grid item xs={12} sm={4}>
            COMPONENT
        </Grid>
        <Grid item xs={12} sm={4}>
            COMPONENT
        </Grid>
        <Grid item xs={12} sm={4}>
            COMPONENT
        </Grid>
    </Grid>
  </Container>
  )
};

export default Home;