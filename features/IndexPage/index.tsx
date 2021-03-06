import React from 'react';
import BaseLayout from 'features/core/BaseLayout';
import { Box } from '@material-ui/core';
import AboutMe from './AboutMe';
import MyWriteUps from './MyWriteUps';

const Home: React.FC = () => (
  <BaseLayout>
    <Box mt={{ xs: 4, sm: 8, md: 10 }} py={3}>
      <AboutMe />
    </Box>
    <Box mb={5} mt={{ xs: 1, sm: 2, md: 3 }}>
      <MyWriteUps />
    </Box>
  </BaseLayout>
);

export default Home;
